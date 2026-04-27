<script lang="ts">
  const capabilities = [
    {
      n: '01',
      title: 'Isolated sandboxes',
      body: 'Each agent session runs in its own container or VM via Podman. Reproducible, ephemeral, and air-gapped from your host environment by default.',
      icon: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`
    },
    {
      n: '02',
      title: 'Open by design',
      body: 'Use frontier models and coding agents like Claude Code or Codex, or go fully open source with local models and agents like OpenCode or Goose. No lock-in.',
      icon: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>`
    },
    {
      n: '03',
      title: 'Devcontainer support',
      body: 'Devcontainers let you predefine repeatable environments that automatically equip the agent with the right dev tools inside its sandbox.',
      icon: `<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`
    },
    {
      n: '04',
      title: 'Secret vault',
      body: 'Store API keys, tokens, and credentials scoped to workspaces or projects. Secrets are injected at runtime, never exposed directly to the agent.',
      icon: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`
    },
    {
      n: '05',
      title: 'Hybrid compute',
      body: 'Tasks that don\'t need a large model run locally. Heavier workloads route to remote environments. Semantic routing picks the right compute automatically based on what the agent actually needs.',
      icon: `<path d="M5 12H3m18 0h-2M12 5V3m0 18v-2M6.34 6.34 4.93 4.93m14.14 14.14-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/>`
    },
    {
      n: '06',
      title: 'Enterprise governance',
      body: 'Platform engineers define which models, MCP servers, skills, and context are permitted. Governance is enforced through the workspace config.',
      icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`
    }
  ];
</script>

<section class="py-24 px-6" style="background: var(--bg-subtle)">
  <div class="max-w-6xl mx-auto">
    <div class="mb-14">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">Capabilities</p>
      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight" style="color: var(--text-primary)">
        Everything you need to run agents at scale
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style="gap: 1px; background: var(--border)">
      {#each capabilities as cap}
        <div class="cap-card p-8 group transition-colors">
          <div class="flex items-start justify-between mb-5">
            <svg
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="transition-transform group-hover:scale-110 origin-left"
              style="color: var(--accent)"
            >
              {@html cap.icon}
            </svg>
            <span class="text-[11px] font-mono" style="color: var(--text-muted)">{cap.n}</span>
          </div>
          <h3 class="text-[15px] font-semibold mb-2" style="color: var(--text-primary)">{cap.title}</h3>
          <p class="text-sm leading-relaxed" style="color: var(--text-secondary)">{cap.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .cap-card {
    background: var(--bg-card);
  }
  .cap-card:hover {
    background: var(--bg);
  }
</style>
