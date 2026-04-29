<script lang="ts">
  import { assets } from '$app/paths';

  const repos = [
    { label: 'openkaiden/kaiden', href: 'https://github.com/openkaiden/kaiden' },
    { label: 'openkaiden/kdn', href: 'https://github.com/openkaiden/kdn' }
  ];
</script>

<section class="py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- left -->
      <div>
        <p class="text-[11px] font-mono uppercase tracking-widest mb-4" style="color: var(--accent-text)">Open source</p>
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight mb-6" style="color: var(--text-primary)">
          Built in the open.<br />Auditable by design.
        </h2>
        <p class="leading-relaxed mb-4" style="color: var(--text-secondary)">
          Kaiden is built by the team behind
          <a href="https://podman-desktop.io" target="_blank" rel="noopener noreferrer" class="podman-link">Podman Desktop</a>,
          with over 4 million downloads.
          Same foundations, same philosophy: open source, extensible, and yours to run however you want.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="https://podman-desktop.io"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors hover:opacity-80"
            style="border-color: var(--border); color: var(--text-primary); background: var(--bg-card)"
          >
            <img src="https://podman-desktop.io/img/favicon.ico" alt="" width="14" height="14" class="rounded-sm" />
            podman-desktop.io
          </a>
          {#each repos as repo}
            <a
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors hover:opacity-80"
              style="border-color: var(--border); color: var(--text-primary); background: var(--bg-card)"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="color: var(--text-muted)">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              {repo.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- right: podman + heart + kaiden -->
      <div class="flex items-center justify-center gap-6">

        <!-- Kaiden -->
        <div class="flex flex-col items-center gap-3">
          <img
            src="{assets}/icon.png"
            alt="Kaiden"
            width="96"
            height="96"
            style="border-radius: 22%; box-shadow: 0 8px 32px rgba(0,0,0,0.12)"
          />
          <span class="text-[11px] font-mono" style="color: var(--text-muted)">Kaiden</span>
        </div>

        <!-- heart -->
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#f43f5e" style="flex-shrink:0; margin-bottom: 20px">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

        <!-- Podman Desktop -->
        <div class="flex flex-col items-center gap-3">
          <img
            src="https://podman-desktop.io/img/logo.svg"
            alt="Podman Desktop"
            width="96"
            height="96"
            style="border-radius: 22%; box-shadow: 0 8px 32px rgba(0,0,0,0.12)"
          />
          <span class="text-[11px] font-mono" style="color: var(--text-muted)">Podman Desktop</span>
        </div>

        <!-- heart -->
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#f43f5e" style="flex-shrink:0; margin-bottom: 20px">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

        <!-- Podman -->
        <div class="flex flex-col items-center gap-3">
          <img
            src="https://podman.io/logos/optimized/podman-3-logo-266w-253h.webp"
            alt="Podman"
            width="96"
            height="96"
            style="border-radius: 22%; box-shadow: 0 8px 32px rgba(0,0,0,0.12)"
          />
          <span class="text-[11px] font-mono" style="color: var(--text-muted)">Podman</span>
        </div>

      </div>

    </div>
  </div>
</section>

<style>
  .podman-link {
    color: var(--accent-text);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .podman-link:hover {
    opacity: 0.8;
  }
</style>

