<script lang="ts">
  import { downloadStore, platformLabels, FALLBACK_URL } from '$lib/stores/download';

  let { open = $bindable(false) } = $props();

  const platformIcons: Record<string, string> = {
    mac: `<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>`  ,
    windows: `<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>`,
    linux: `<path d="M8.164 20.504c-.522.208-.565.524-.785.756-.24.254-.473.364-.646.396-.332.06-.513-.176-.508-.416a.782.782 0 0 1 .044-.213c.076-.232.252-.45.48-.588.222-.135.39-.17.527-.211.224-.066.373-.164.535-.371.114-.145.218-.25.332-.301-.203-.237-.467-.43-.733-.571-.403-.21-.874-.3-1.345-.302-.854-.005-1.566.375-2.057.969-.493.598-.755 1.414-.756 2.222 0 .434.09.854.245 1.23.017.042.034.083.052.124-.003.006-.007.012-.01.018-.065.126-.196.278-.346.406-.123.106-.258.2-.371.295-.143.12-.243.245-.271.381-.027.133.008.273.118.395.218.24.601.268.892.028.133-.109.244-.261.364-.412.05-.062.101-.124.153-.182.16-.178.338-.318.502-.414.057.04.115.079.175.115.51.307 1.121.502 1.79.502.726 0 1.383-.224 1.916-.601a4.28 4.28 0 0 0 .2-.15c.17.098.342.233.492.403.05.057.099.117.147.177.119.15.228.301.36.41.29.24.673.213.891-.027.11-.121.145-.262.118-.395-.028-.136-.128-.262-.271-.38-.113-.096-.248-.19-.371-.296-.134-.114-.254-.249-.334-.374l-.033-.056c.162-.376.252-.793.252-1.23 0-.811-.262-1.624-.753-2.22a3.048 3.048 0 0 0-.7-.624c.089.06.16.147.237.285.176.317.24.701.206 1.04-.033.328-.139.638-.274.846-.13.2-.337.322-.6.323-.165 0-.338-.048-.515-.145a2.56 2.56 0 0 1-.517-.394 3.466 3.466 0 0 1-.396-.523c-.11-.183-.192-.38-.232-.577-.042-.208-.037-.42.032-.611.068-.187.196-.357.402-.478zm5.483-4.396a4.124 4.124 0 0 0-.616-.74c.254-.904.307-1.777.14-2.47-.193-.8-.68-1.29-1.35-1.29-.507 0-.908.263-1.23.636-.168.192-.317.42-.453.67-.093-.076-.188-.15-.286-.216-.734-.494-1.585-.661-2.333-.544-.751.117-1.38.517-1.722 1.179-.283.546-.345 1.225-.243 1.88.063.4.189.8.364 1.17a5.388 5.388 0 0 0-.38.4c-.413.491-.668 1.055-.697 1.625-.003.06-.004.12-.003.18.005.408.13.806.338 1.14a3.028 3.028 0 0 0-.44.466C5.26 20.6 5 21.413 5 22.224c0 .893.291 1.76.832 2.408C6.377 25.28 7.17 25.7 8.1 25.7c.695 0 1.33-.197 1.874-.527.543.33 1.178.527 1.873.527.93 0 1.724-.42 2.268-1.068.54-.648.832-1.515.832-2.408 0-.81-.26-1.624-.752-2.22a3.041 3.041 0 0 0-.44-.466c.208-.334.333-.732.337-1.14a2.46 2.46 0 0 0-.004-.183c-.03-.572-.286-1.137-.7-1.628a5.4 5.4 0 0 0-.241-.279zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>`
  };

  const platformNames: Record<string, string> = {
    mac: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
  };

  const assetLabels: Record<string, string> = {
    mac: 'Apple Silicon (.dmg)',
    windows: '64-bit installer (.exe)',
    linux: 'Flatpak (.flatpak)',
  };

  let downloading = $state(false);

  function confirm() {
    if (!$downloadStore) return;
    window.location.href = $downloadStore.url;
    downloading = true;
    setTimeout(() => {
      downloading = false;
      open = false;
    }, 2500);
  }

  function close() {
    if (!downloading) open = false;
  }

  function onkeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }
</script>

<svelte:window onkeydown={onkeydown} />

{#if open && $downloadStore}
  <!-- backdrop -->
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center p-4"
    style="background: rgba(0,0,0,0.5); backdrop-filter: blur(4px)"
    aria-hidden="true"
    onclick={close}
  >
    <!-- panel -->
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Download Kaiden"
      tabindex="-1"
      class="relative w-full max-w-md rounded-2xl border p-8 shadow-2xl"
      style="background: var(--bg-card); border-color: var(--border)"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
    >
      <!-- close -->
      <button
        onclick={close}
        class="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-md transition-colors"
        style="color: var(--text-muted)"
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>

      <!-- icon + platform -->
      <div class="flex items-center gap-4 mb-5">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style="background: color-mix(in srgb, var(--accent) 12%, transparent)">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="color: var(--accent)">
            {@html platformIcons[$downloadStore.platform]}
          </svg>
        </div>
        <div>
          <p class="text-[11px] font-mono uppercase tracking-widest mb-0.5" style="color: var(--text-muted)">Kaiden for</p>
          <p class="text-lg font-semibold" style="color: var(--text-primary)">{platformNames[$downloadStore.platform]}</p>
        </div>
      </div>

      <!-- details -->
      <div class="rounded-lg px-4 py-3 mb-5 text-sm space-y-1.5" style="background: var(--bg-subtle); border: 1px solid var(--border)">
        {#if $downloadStore.version}
          <div class="flex justify-between">
            <span style="color: var(--text-muted)">Version</span>
            <span class="font-mono" style="color: var(--text-secondary)">{$downloadStore.version}</span>
          </div>
        {/if}
        <div class="flex justify-between">
          <span style="color: var(--text-muted)">Package</span>
          <span class="font-mono" style="color: var(--text-secondary)">{assetLabels[$downloadStore.platform]}</span>
        </div>
        <div class="flex justify-between">
          <span style="color: var(--text-muted)">License</span>
          <span class="font-mono" style="color: var(--text-secondary)">Apache 2.0</span>
        </div>
      </div>

      <!-- actions -->
      <button
        onclick={confirm}
        disabled={downloading}
        class="w-full py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
        style="background: var(--accent); color: var(--navy); opacity: {downloading ? 0.85 : 1}"
      >
        {#if downloading}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Downloading…
        {:else}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          Download
        {/if}
      </button>

      <div class="mt-3 text-center">
        <a
          href={FALLBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs transition-opacity hover:opacity-70"
          style="color: var(--text-muted)"
        >All platforms & releases →</a>
      </div>
    </div>
  </div>
{/if}
