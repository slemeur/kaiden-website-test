<script lang="ts">
  import { assets } from '$app/paths';
  import { theme } from '$lib/stores/theme';

  const pillars = [
    {
      n: '01',
      title: 'One place for all your agents',
      img: { dark: 'coding-workspaces-dark.png', light: 'coding-workspaces-light.png' },
      label: 'Kaiden — Sessions',
      tags: ['Sessions', 'Status', 'Models'],
      body: "Running Claude Code on one task, OpenCode on another, something else in the background. Kaiden gives you a single view across every session.",
      icon: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`
    },
    {
      n: '02',
      title: 'Click go, not configure',
      img: { dark: 'workspace-creation-dark.png', light: 'workspace-creation-light.png' },
      label: 'Kaiden — Workspace config',
      tags: ['Models', 'MCP', 'Skills', 'Context'],
      body: 'Define a workspace once: pick the model, load the MCP servers, attach your skills and context. Every time you start a session, the agent has exactly what it needs from the first prompt.',
      icon: `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>`
    },
    {
      n: '03',
      title: 'Any agent, same setup',
      img: { dark: 'coding-agents-dark.png', light: 'coding-agents-light.png' },
      label: 'Kaiden — Agents',
      tags: ['Claude Code', 'Goose', 'OpenCode', 'Cursor'],
      body: "Kaiden doesn't replace the agents you use today. It wraps around them so your workspace config, secrets, and tools travel with you.",
      icon: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>`
    }
  ];
</script>

<section class="py-24 px-6 border-t" style="background: var(--bg-subtle); border-color: var(--border)">
  <div class="max-w-6xl mx-auto">

    <div class="mb-14">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">Why Kaiden</p>
      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight whitespace-nowrap" style="color: var(--text-primary)">
        Built for developers juggling multiple agents
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      {#each pillars as pillar}
        <div class="card rounded-2xl border overflow-hidden flex flex-col" style="background: var(--bg-card); border-color: var(--border)">
          <!-- screenshot -->
          <div class="border-b overflow-hidden" style="border-color: var(--border)">
            <!-- titlebar -->
            <div class="flex items-center gap-1.5 px-3 py-2 border-b" style="background: var(--bg-subtle); border-color: var(--border)">
              <span class="w-2 h-2 rounded-full bg-red-400 opacity-70"></span>
              <span class="w-2 h-2 rounded-full bg-yellow-400 opacity-70"></span>
              <span class="w-2 h-2 rounded-full bg-green-400 opacity-70"></span>
              <span class="ml-2 text-[9px] font-mono" style="color: var(--text-muted)">{pillar.label}</span>
            </div>
            <!-- image -->
            <div class="relative" style="height: 180px">
              <img
                src="{assets}/screenshots/{$theme === 'dark' ? pillar.img.dark : pillar.img.light}"
                alt={pillar.title}
                class="absolute inset-0 w-full h-full object-cover object-top"
                on:error={(e) => { (e.currentTarget as HTMLImageElement).src = `${assets}/screenshots/${pillar.img.dark}`; }}
              />
              <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 0 0 1px var(--border)"></div>
              <div class="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style="background: linear-gradient(to bottom, transparent, var(--bg-card))"></div>
            </div>
          </div>

          <!-- content -->
          <div class="p-7 flex flex-col gap-5">
            <div class="flex flex-col gap-3">
              <h3 class="text-[17px] font-semibold leading-snug" style="color: var(--text-primary)">{pillar.title}</h3>
              <div class="flex flex-wrap gap-1.5">
                {#each pillar.tags as tag}
                  <span
                    class="text-[10px] font-mono px-2.5 py-1 rounded-full"
                    style="background: color-mix(in srgb, var(--accent) 10%, transparent); color: var(--accent-text)"
                  >{tag}</span>
                {/each}
              </div>
              <p class="text-sm leading-relaxed" style="color: var(--text-secondary)">{pillar.body}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  .card {
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .card:hover {
    box-shadow: 0 8px 32px color-mix(in srgb, var(--accent) 8%, transparent);
    border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
  }
</style>
