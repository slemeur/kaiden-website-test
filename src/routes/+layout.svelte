<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  onMount(() => {
    // keep store in sync with the class already set by the inline script
    const cls = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    if (cls !== 'dark') {
      // store already initialised to correct value; nothing to do
    }
  });
</script>

<slot />
