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
    <div class="max-w-2xl">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-4" style="color: var(--accent)">
        For platform teams
      </p>
      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-6 text-white">
        IT controls what developers can run.<br />
      </h2>
      <p class="text-base leading-relaxed mb-8" style="color: #94afd4">
        Security and Platform teams set the rules once: which models, secrets, tools, and
        MCP servers are permitted. Then developers can build and run agents without needing to ask for permissions every time.
        Connect to governance platforms that manage AI Assets
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
  </div>
</section>
