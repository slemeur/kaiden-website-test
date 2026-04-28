<script lang="ts">
</script>

<section class="py-24 px-6 relative overflow-hidden" style="background: var(--navy)">
  <!-- grid -->
  <div
    aria-hidden="true"
    class="absolute inset-0"
    style="background-image: linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px); background-size: 48px 48px;"
  ></div>
  <!-- glow -->
  <div
    aria-hidden="true"
    class="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full"
    style="background: var(--accent); opacity: 0.04; filter: blur(100px); pointer-events: none"
  ></div>

  <div class="relative max-w-6xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- left: copy + bullets -->
      <div>
        <p class="text-[11px] font-mono uppercase tracking-widest mb-4" style="color: var(--accent)">
          For platform teams
        </p>
        <h2 class="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-6 text-white">
          IT controls what developers can run.
        </h2>
        <p class="text-base leading-relaxed mb-8" style="color: #94afd4">
          Security and Platform teams set the rules once: which models, secrets, tools, and
          MCP servers are permitted. Then developers can build and run agents without needing to ask for permissions every time.
        </p>
        <ul class="space-y-2">
          {#each [
            'Define allowed model providers',
            'Curate and distribute skills across teams',
            'Manage MCP servers & tools',
            'Enforce governance via workspace config'
          ] as item}
            <li class="flex items-center gap-3 px-4 py-3 rounded-lg text-sm" style="background: #ffffff08; color: #c8dff5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent); flex-shrink: 0">
                <polyline points="2,8 6,12 14,4"/>
              </svg>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <!-- right: diagram -->
      <div class="rounded-2xl border p-6 font-mono text-[11px] select-none" style="border-color: #ffffff12; background: #ffffff05">

        <!-- Platform Engineer row -->
        <div class="flex items-start gap-4 mb-1">
          <div class="flex flex-col items-center gap-1.5 w-16 shrink-0 pt-1">
            <div class="w-8 h-8 rounded-full flex items-center justify-center border" style="border-color: #ffffff20; background: #ffffff0a">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="color: #94afd4">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/>
              </svg>
            </div>
            <span class="text-[9px] text-center leading-tight" style="color: #4a6070">Platform<br/>Engineer</span>
          </div>
          <!-- AI Assets Platform card -->
          <div class="flex-1 rounded-xl border p-3" style="border-color: color-mix(in srgb, var(--accent) 25%, transparent); background: color-mix(in srgb, var(--accent) 6%, transparent)">
            <div class="text-[9px] uppercase tracking-widest mb-2.5" style="color: var(--accent); opacity: 0.8">AI Assets Platform</div>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="text-[10px]" style="color: #10b981">✓</span>
                <span style="color: #94afd4">claude-3.5 — allowed</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[10px]" style="color: #10b981">✓</span>
                <span style="color: #94afd4">github.com MCP — approved</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[10px]" style="color: #f87171">✗</span>
                <span style="color: #4a6070">unknown-registry — blocked</span>
              </div>
              <div class="flex items-center gap-2 pt-1 border-t" style="border-color: #ffffff10">
                <span style="color: #4a6070">skill-set:</span>
                <span style="color: #94afd4">backend-team-v2</span>
              </div>
            </div>
          </div>
        </div>

        <!-- vertical connector -->
        <div class="flex items-center gap-3 ml-8 my-2">
          <div class="w-px h-8" style="background: linear-gradient(to bottom, color-mix(in srgb, var(--accent) 30%, transparent), color-mix(in srgb, var(--accent) 15%, transparent))"></div>
          <span class="text-[9px] uppercase tracking-widest" style="color: #4a6070">enforces</span>
        </div>

        <!-- Developer row -->
        <div class="flex items-start gap-4">
          <div class="flex flex-col items-center gap-1.5 w-16 shrink-0 pt-1">
            <div class="w-8 h-8 rounded-full flex items-center justify-center border" style="border-color: #ffffff20; background: #ffffff0a">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="color: #94afd4">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/>
              </svg>
            </div>
            <span class="text-[9px] text-center leading-tight" style="color: #4a6070">Developer</span>
          </div>
          <!-- Kaiden workspace card -->
          <div class="flex-1 rounded-xl border p-3" style="border-color: #ffffff15; background: #ffffff08">
            <div class="text-[9px] uppercase tracking-widest mb-2.5" style="color: #4a6070">Kaiden — workspace</div>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span style="color: #c8dff5">api-refactor</span>
                <span class="px-2 py-0.5 rounded-full text-[9px]" style="background: color-mix(in srgb, #10b981 10%, transparent); color: #10b981">running</span>
              </div>
              <div style="color: #4a6070">model: claude-3.5-sonnet</div>
              <div class="flex items-center gap-1.5 pt-1 border-t" style="border-color: #ffffff10">
                <span style="color: #4a6070">skills:</span>
                <span class="px-1.5 py-0.5 rounded border text-[9px]" style="border-color: #ffffff15; color: #94afd4">backend-team-v2</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
