<script lang="ts">
  const pillars = [
    {
      title: 'Safe by design',
      body: 'AI agents touch your code, your tools, your credentials. One bad session can cause real damage. Kaiden runs every agent in its own sandbox, so the rest of your system stays untouched.',
      icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`
    },
    {
      title: 'Enterprise connected',
      body: 'A generic AI tool starts from zero every time. Kaiden connects your agents to the tools, APIs, and knowledge that already exist in your organization, so they actually understand the context they\'re working in.',
      icon: `<rect x="2" y="3" width="8" height="6" rx="1"/><rect x="14" y="3" width="8" height="6" rx="1"/><rect x="8" y="15" width="8" height="6" rx="1"/><path d="M6 9v3h12V9M12 12v3"/>`
    },
    {
      title: 'Local to remote, your choice',
      body: 'Run agents locally when you need speed or privacy. Switch to a remote environment when you need more power. Kaiden handles both without changing how you work.',
      icon: `<circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h10"/><path d="M5 9V6a1 1 0 0 1 1-1h4"/><path d="M19 9V6a1 1 0 0 0-1-1h-4"/><path d="M10 5h4"/>`
    }
  ];
</script>

<section class="py-10 px-6 border-t" style="background: var(--bg-card); border-color: var(--border)">
  <div class="max-w-6xl mx-auto">

    <div class="mb-8">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">Core principles</p>
      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight" style="color: var(--text-primary)">
        Adopt AI agents safely, at any scale
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3">
      {#each pillars as pillar}
        <div class="pillar flex flex-col gap-3 py-5 px-5" style="background: var(--bg-card)">
          <div class="flex items-center gap-3">
            <div
              class="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
              style="background: color-mix(in srgb, var(--accent) 12%, transparent)"
            >
              <svg
                width="18" height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="color: var(--accent)"
              >
                {@html pillar.icon}
              </svg>
            </div>
            <h3 class="text-[15px] font-semibold" style="color: var(--text-primary)">
              {pillar.title}
            </h3>
          </div>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary)">
            {pillar.body}
          </p>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  .pillar:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }

  @media (min-width: 768px) {
    .pillar:first-child {
      padding-left: 0;
    }
    .pillar:last-child {
      padding-right: 0;
    }
    .pillar:not(:last-child) {
      border-bottom: none;
      border-right: 1px solid var(--border);
    }
  }
</style>
