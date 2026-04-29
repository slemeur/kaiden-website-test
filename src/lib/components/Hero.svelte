<script lang="ts">
  import { assets } from '$app/paths';
  import { theme } from '$lib/stores/theme';
  import { download, platformLabels, FALLBACK_URL } from '$lib/stores/download';
  const GITHUB_URL = 'https://github.com/openkaiden/kaiden';
</script>

<section class="relative pt-32 pb-20 px-6 overflow-hidden">
  <!-- grid -->
  <div
    aria-hidden="true"
    class="absolute inset-0 opacity-40"
    style="background-image: linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px); background-size: 48px 48px;"
  ></div>
  <!-- glow -->
  <div
    aria-hidden="true"
    class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
    style="background: var(--accent); opacity: 0.06; filter: blur(120px);"
  ></div>

  <div class="relative max-w-6xl mx-auto">
    <div class="flex flex-col lg:flex-row items-center gap-16">

      <!-- left: copy -->
      <div class="flex-1 text-center lg:text-left">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">Desktop App for Agentic Development </p>
        
        <div
          class="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border text-xs font-mono"
          style="border-color: var(--border); background: var(--bg-card); color: var(--text-muted)"
        >
          <span
            class="w-1.5 h-1.5 rounded-full animate-pulse"
            style="background: var(--accent)"
          ></span>
          From the Podman Desktop Team · Open source · Apache 2.0
        </div>

        <h1
          class="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
          style="color: var(--text-primary)"
        >
          Run AI agents safely.<br />
          On <span style="color: var(--accent-text)">your terms.</span>
        </h1>

        <p class="mt-6 text-lg leading-relaxed max-w-xl" style="color: var(--text-secondary)">
          Kaiden runs your coding agents in isolated sandboxes and equips them with the models,
          tools, and assets they need. Repeatable, preconfigured environments to iterate faster. Experiment safely. Works locally or in your enterprise environment.
          Built for developers, governed by your platform team.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3">
          {#if $download}
            <button
              onclick={() => { if ($download) window.location.href = $download.url; }}
              class="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm text-center transition-opacity hover:opacity-90 cursor-pointer"
              style="background: var(--accent); color: var(--navy)"
            >Download for {platformLabels[$download.platform]}</button>
          {:else}
            <a
              href={FALLBACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm text-center transition-opacity hover:opacity-90"
              style="background: var(--accent); color: var(--navy)"
            >Download Kaiden</a>
          {/if}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-6 py-3 rounded-lg border font-semibold text-sm text-center flex items-center justify-center gap-2 transition-colors"
            style="border-color: var(--border); background: var(--bg-card); color: var(--text-primary)"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            Star on GitHub
          </a>
        </div>

        <div class="mt-5 flex flex-col gap-2">
          <p class="text-xs" style="color: var(--text-muted)">
            macOS · Linux · Windows — free, open source
            {#if $download?.version}&nbsp;·&nbsp;{$download.version}{/if}
          </p>
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-xs" style="color: var(--text-muted)">Supported Coding Agents : </span>
            {#each ['Claude Code', 'Goose', 'Cursor', 'OpenCode'] as agent}
              <span
                class="text-xs px-2 py-0.5 rounded border font-mono"
                style="border-color: var(--border); color: var(--text-secondary); background: var(--bg-subtle)"
              >{agent}</span>
            {/each}
          </div>
          <div class="flex flex-wrap items-center gap-1.5">

            <span class="text-xs" style="color: var(--text-muted)">Supports</span>
              {#each ['Ramalama', 'Ollama','Gemini', 'Mistral', 'Anthropic', 'OpenAI', 'OpenShift AI'] as modelprovider}
                <span
                  class="text-xs px-2 py-0.5 rounded border font-mono"
                  style="border-color: var(--border); color: var(--text-secondary); background: var(--bg-subtle)"
                >{modelprovider}</span>
              {/each}
          </div>
        </div>
      </div>

      <!-- right: screenshot -->
      <div class="flex-1 relative flex items-center justify-center">
        <div class="relative w-full max-w-lg">
          <!-- window frame -->
          <div class="rounded-2xl border overflow-hidden select-none"
            style="border-color: var(--border); box-shadow: 0 24px 80px rgba(0,0,0,0.18);">
            <!-- titlebar -->
            <div class="flex items-center gap-1.5 px-4 py-3 border-b" style="background: var(--bg-subtle); border-color: var(--border)">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
              <span class="ml-2 text-[11px] font-mono" style="color: var(--text-muted)">Kaiden — Agentic Coding Workspaces</span>
            </div>
            <!-- screenshot -->
            <div class="relative">
              <img
                src="{assets}/screenshots/{$theme === 'dark' ? 'coding-workspaces-dark.png' : 'coding-workspaces-light.png'}"
                alt="Kaiden — Agentic Coding Workspaces"
                class="w-full block"
                onerror={(e) => { (e.currentTarget as HTMLImageElement).src = `${assets}/screenshots/coding-workspaces-dark.png`; }}
              />
              <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 0 0 1px var(--border)"></div>
            </div>
          </div>
          <!-- mascot badge -->
          <div class="absolute -bottom-5 -right-5">
            <img src="{assets}/icon.png" alt="Kaiden" width="72" height="72" style="border-radius: 22%; box-shadow: 0 8px 32px rgba(0,0,0,0.22)" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
