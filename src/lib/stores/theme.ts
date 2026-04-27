import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
  const initial = browser
    ? (localStorage.getItem('theme') ??
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    : 'light';

  const { subscribe, update } = writable<string>(initial);

  return {
    subscribe,
    toggle() {
      update((current) => {
        const next = current === 'dark' ? 'light' : 'dark';
        if (browser) {
          localStorage.setItem('theme', next);
          document.documentElement.classList.toggle('dark', next === 'dark');
        }
        return next;
      });
    }
  };
}

export const theme = createTheme();
