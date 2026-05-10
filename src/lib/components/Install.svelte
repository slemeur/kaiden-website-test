<script lang="ts">
  const steps = [
    { comment: '# Download from Website', cmd: 'click `Download` button on the website' },
    { comment: '# Or download from GitHub Releases', cmd: 'open https://github.com/openkaiden/kaiden/releases' },
    { comment: '# Available for macOS, Linux, and Windows', cmd: '# .dmg  ·  .AppImage  ·  .exe' }
  ];
</script>

<section class="py-24 px-6" id="install" style="background: var(--bg-subtle)">
  <div class="max-w-3xl mx-auto text-center">
    <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">Get started</p>
    <h2 class="text-3xl font-bold tracking-tight mb-10" style="color: var(--text-primary)">Install in seconds</h2>

    <!-- terminal -->
    <div class="rounded-xl border shadow-xl text-left overflow-hidden" style="border-color: var(--border); background: var(--navy)">
      <div class="flex items-center gap-1.5 px-4 py-3 border-b" style="border-color: #1e3358">
        <span class="w-2.5 h-2.5 rounded-full" style="background: rgba(239,68,68,0.6)"></span>
        <span class="w-2.5 h-2.5 rounded-full" style="background: rgba(234,179,8,0.6)"></span>
        <span class="w-2.5 h-2.5 rounded-full" style="background: rgba(34,197,94,0.6)"></span>
      </div>
      <div class="p-6 space-y-3 font-mono text-sm">
        {#each steps as step}
          <div>
            <div class="text-xs" style="color: #6491b0">{step.comment}</div>
            <div style="color: var(--accent)">{step.cmd}</div>
          </div>
        {/each}
        <div class="mt-4" style="color: #6491b0">
          <span style="color: #22c55e">✓</span> Ready. Happy coding!
        </div>
      </div>
    </div>

    <p class="mt-6 text-sm" style="color: var(--text-muted)">
      Need help?
      <a
        href="https://github.com/openkaiden/kaiden"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-2 transition-colors hover:opacity-80"
        style="color: var(--accent-text)"
      >Read the docs on GitHub</a>.
    </p>
  </div>
</section>
