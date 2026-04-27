<script lang="ts">
  import { assets } from '$app/paths';
  const links = [
    {
      group: 'Project',
      items: [
        { label: 'GitHub', href: 'https://github.com/openkaiden/kaiden' },
        { label: 'Releases', href: 'https://github.com/openkaiden/prereleases/releases' },
        { label: 'kdn CLI', href: 'https://github.com/openkaiden/kdn' },
        { label: 'MCP Registry', href: 'https://github.com/openkaiden/mcp-registry-online' }
      ]
    },
    {
      group: 'Organization',
      items: [
        { label: 'openkaiden', href: 'https://github.com/openkaiden' },
        { label: 'License (Apache 2.0)', href: 'https://github.com/openkaiden/kaiden/blob/main/LICENSE' },
        { label: 'llms.txt', href: '/llms.txt' }
      ]
    }
  ];
</script>

<footer class="border-t" style="border-color: var(--border); background: var(--bg-card)">
  <div class="max-w-6xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- brand -->
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <img src="{assets}/icon.png" alt="Kaiden" width="28" height="28" class="rounded-lg" />
          <span class="font-semibold tracking-tight" style="color: var(--text-primary)">kaiden</span>
        </div>
        <p class="text-sm leading-relaxed max-w-xs" style="color: var(--text-muted)">
          Open platform for running AI coding agents in isolated sandboxes with enterprise-grade governance.
        </p>
        <p class="mt-4 text-xs" style="color: var(--text-muted)">Apache 2.0 · openkaiden organization</p>
      </div>

      <!-- link columns -->
      {#each links as group}
        <div>
          <p class="text-[11px] font-mono uppercase tracking-widest mb-4" style="color: var(--text-muted)">{group.group}</p>
          <ul class="space-y-2.5">
            {#each group.items as item}
              <li>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  class="text-sm transition-colors hover:opacity-80"
                  style="color: var(--text-secondary)"
                >{item.label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}

    </div>
  </div>
</footer>
