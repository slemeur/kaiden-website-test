<script lang="ts">
  const steps = [
    {
      n: '01',
      title: 'Install & configure',
      body: "Install Kaiden application and follow the flow to configure your coding agents, secrets, connect model providers (local or remote), and import your existing MCP servers and skills. Kaiden is ready to orchestrate your coding agents."
    },
    {
      n: '02',
      title: 'Create an AI Agentic workspace',
      body: "Spin up a coding workspace for your project. You choose the coding agent you want, pick the tools it needs and equip the agent with the skills and MCP servers already in your environment. Run multiple agents in parallel, each in its own sandbox."
    },
    {
      n: '03',
      title: 'Code with confidence',
      body: "Use your coding agent the same way you always have, straight from the CLI. The agent runs inside a sandbox, so the blast radius stays contained. You stay in control of what it can reach. No more worrying about what it might accidentally break."
    }
  ];
</script>

<section class="py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="mb-14">
      <p class="text-[11px] font-mono uppercase tracking-widest mb-3" style="color: var(--accent-text)">How it works</p>
      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight" style="color: var(--text-primary)">
        From install to safe AI coding in minutes
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each steps as step, idx}
        <div>
          <div class="step-num">{step.n}</div>
          <h3 class="text-lg font-semibold mb-4" style="color: var(--text-primary)">{step.title}</h3>

          {#if idx === 0}
            <div class="diag">
              {#each ['Coding agents', 'Model providers', 'MCP servers', 'Skills'] as item}
                <div class="d1-row">
                  <span class="d1-dot"></span>
                  <span>{item}</span>
                </div>
              {/each}
              <div class="d1-ready">
                <span class="pulse-dot"></span>
                Ready to build
              </div>
            </div>

          {:else if idx === 1}
            <div class="diag">
              <div class="d2-chips">
                {#each ['Secrets', 'Network'] as src}
                  <span class="d2-chip">{src}</span>
                {/each}
              </div>
              <div class="d2-arrow"></div>
              <div class="d2-ws">
                <span class="d2-ws-label">Workspace</span>
                <div class="d2-layers">
                  <span class="d2-layer">Tools</span>
                  <span class="d2-layer">Skills</span>
                  <span class="d2-layer">APIs</span>
                </div>
                <div class="d2-agents">
                  <span class="d2-agent">Agent ①</span>
                  <span class="d2-agent">Agent ②</span>
                </div>
              </div>
            </div>

          {:else}
            <div class="diag diag-sandbox">
              <span class="sandbox-label">sandbox</span>
              <div class="d3-agent">▣ Agent</div>
              <div class="d3-rows">
                {#each [['fs', '/workspace', 'authorized'], ['net', 'github.com/openkaiden', 'authorized'], ['net', 'unknown-registry', 'locked'], ['proc', 'pnpm', 'authorized']] as [type, label, tag]}
                  <div class="d3-row">
                    <span class="d3-type">{type}</span>
                    <span class="d3-rlabel">{label}</span>
                    <span class="d3-tag" class:d3-tag-locked={tag === 'locked'}>{tag}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          <p class="leading-relaxed mt-4 text-sm" style="color: var(--text-secondary)">{step.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .step-num {
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1rem;
    user-select: none;
    color: var(--border);
  }

  .diag {
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-subtle);
    padding: 14px;
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 11px;
    min-height: 148px;
  }

  /* Diagram 1 */
  .d1-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    color: var(--text-secondary);
  }
  .d1-dot {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    flex-shrink: 0;
    background: color-mix(in srgb, var(--accent) 22%, transparent);
    border: 1px solid var(--accent);
  }
  .d1-ready {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--border);
    color: var(--accent-text);
  }
  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    animation: pulse 1.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.6); }
  }

  /* Diagram 2 */
  .d2-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .d2-chip {
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-size: 10px;
  }
  .d2-arrow {
    width: 1px;
    height: 14px;
    background: var(--border);
    margin: 3px 0 3px 18px;
  }
  .d2-ws {
    padding: 8px 10px;
    border-radius: 6px;
    border: 1px solid var(--accent-text);
    background: color-mix(in srgb, var(--accent-text) 8%, transparent);
  }
  .d2-ws-label {
    display: block;
    color: var(--accent-text);
    margin-bottom: 7px;
    font-size: 10px;
  }
  .d2-layers {
    display: flex;
    gap: 5px;
    margin-bottom: 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  }
  .d2-layer {
    padding: 2px 7px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    background: color-mix(in srgb, var(--accent) 4%, transparent);
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .d2-agents {
    display: flex;
    gap: 5px;
  }
  .d2-agent {
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid color-mix(in srgb, var(--accent-text) 30%, transparent);
    background: color-mix(in srgb, var(--accent-text) 5%, transparent);
    color: var(--accent-text);
    font-size: 10px;
  }

  /* Diagram 3 */
  .diag-sandbox {
    border-style: dashed;
    position: relative;
    padding-top: 20px;
  }
  .sandbox-label {
    position: absolute;
    top: -8px;
    left: 12px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-muted);
    background: var(--bg-subtle);
    padding: 0 4px;
  }
  .d3-agent {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 5px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    margin-bottom: 10px;
  }
  .d3-rows {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: 1px solid var(--border);
    padding-top: 8px;
  }
  .d3-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .d3-type {
    width: 28px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-muted);
  }
  .d3-rlabel {
    flex: 1;
    color: var(--text-secondary);
    font-size: 10px;
  }
  .d3-tag {
    font-size: 9px;
    padding: 1px 5px;
    border-radius: 3px;
    background: color-mix(in srgb, var(--accent-text) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent-text) 25%, transparent);
    color: var(--accent-text);
  }
  .d3-tag-locked {
    background: color-mix(in srgb, #f87171 10%, transparent);
    border-color: color-mix(in srgb, #f87171 25%, transparent);
    color: #f87171;
  }
</style>
