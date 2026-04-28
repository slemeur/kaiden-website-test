<script lang="ts">
  import { assets } from '$app/paths';
  const DOWNLOAD_URL = 'https://github.com/openkaiden/prereleases/releases';
  const GITHUB_URL = 'https://github.com/openkaiden/kaiden';

  const agents = [
    { name: 'OpenCode', provider: 'Ollama', active: true },
    { name: 'Claude Code', provider: 'Anthropic', active: false },
    { name: 'Goose', provider: 'Block', active: false }
  ];

  const sessions = [
    { name: 'api-refactor', model: 'claude-3.5-sonnet', status: 'running', pct: 62 },
    { name: 'test-suite', model: 'claude-3.5-haiku', status: 'running', pct: 38 },
    { name: 'docs-update', model: 'gemini-2.0-flash', status: 'stopped', pct: 0 }
  ];

  const navItems = ['Sessions', 'Agents', 'Models', 'MCP', 'Skills', 'Settings'];
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
          tools, and assets they need. Works locally or in your enterprise environment.
          Built for developers, governed by your platform team.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-sm text-center transition-opacity hover:opacity-90"
            style="background: var(--accent); color: var(--navy)"
          >Download Kaiden</a>
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
          </p>
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-xs" style="color: var(--text-muted)">Supports</span>
            {#each ['Claude Code', 'Goose', 'Cursor', 'OpenCode'] as agent}
              <span
                class="text-xs px-2 py-0.5 rounded border font-mono"
                style="border-color: var(--border); color: var(--text-secondary); background: var(--bg-subtle)"
              >{agent}</span>
            {/each}
          </div>
        </div>
      </div>

      <!-- right: UI mockup -->
      <div class="flex-1 relative flex items-center justify-center">
        <div class="relative w-full max-w-md">
          <!-- mockup card -->
          <div
            class="rounded-2xl border shadow-2xl overflow-hidden font-mono text-[11px] select-none"
            style="border-color: var(--border); background: var(--bg-card)"
          >
            <!-- titlebar -->
            <div
              class="flex items-center gap-1.5 px-3 py-2 border-b"
              style="background: var(--bg-subtle); border-color: var(--border)"
            >
              <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              <span class="ml-2 text-[10px]" style="color: var(--text-muted)">
                Kaiden — Agentic Coding Workspaces
              </span>
            </div>

            <!-- sidebar + main -->
            <div class="flex">
              <!-- sidebar -->
              <div class="w-36 border-r p-2 space-y-0.5" style="background: var(--bg-subtle); border-color: var(--border)">
                {#each navItems as item}
                  <div
                    class="px-2 py-1 rounded text-[10px]"
                    style={item === 'Sessions'
                      ? 'background: color-mix(in srgb, var(--accent) 10%, transparent); color: var(--accent); font-weight: 500'
                      : 'color: var(--text-muted)'}
                  >{item}</div>
                {/each}
              </div>

              <!-- main -->
              <div class="flex-1 p-3 space-y-2">
                <!-- agent chips -->
                <div class="flex gap-1.5 mb-3">
                  {#each agents as a}
                    <div
                      class="px-2 py-0.5 rounded-full text-[9px] border"
                      style={a.active
                        ? 'border-color: var(--accent); color: var(--accent); background: color-mix(in srgb, var(--accent) 10%, transparent)'
                        : 'border-color: var(--border); color: var(--text-muted)'}
                    >{a.name}</div>
                  {/each}
                </div>

                <!-- session cards -->
                {#each sessions as s}
                  <div class="p-2 rounded-lg border space-y-1" style="border-color: var(--border); background: var(--bg)">
                    <div class="flex items-center justify-between">
                      <span class="font-medium text-[10px]" style="color: var(--text-primary)">{s.name}</span>
                      <span
                        class="text-[9px] px-1.5 py-0.5 rounded-full"
                        style={s.status === 'running'
                          ? 'background: color-mix(in srgb, #10b981 10%, transparent); color: #10b981'
                          : 'background: var(--bg-subtle); color: var(--text-muted)'}
                      >{s.status}</span>
                    </div>
                    <div class="text-[9px]" style="color: var(--text-muted)">{s.model}</div>
                    {#if s.status === 'running'}
                      <div class="w-full h-0.5 rounded-full overflow-hidden" style="background: var(--bg-subtle)">
                        <div
                          class="h-full rounded-full"
                          style="width: {s.pct}%; background: var(--accent)"
                        ></div>
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <!-- mascot badge -->
          <div
            class="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl border-2 shadow-xl p-1 flex items-center justify-center"
            style="border-color: var(--border); background: var(--bg-card)"
          >
            <img src="{assets}/icon.png" alt="Kaiden mascot" width="80" height="80" class="rounded-xl" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
