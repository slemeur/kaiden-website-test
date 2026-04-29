import { readable } from 'svelte/store';

const REPO = 'openkaiden/prereleases';
export const FALLBACK_URL = `https://github.com/${REPO}/releases`;

export type Platform = 'mac' | 'windows' | 'linux';

export interface DownloadInfo {
  url: string;
  platform: Platform;
  version: string;
}

export const platformLabels: Record<Platform, string> = {
  mac: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
};

function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'linux';
  const ua = navigator.userAgent;
  if (ua.includes('Macintosh') || ua.includes('Mac OS X')) return 'mac';
  if (ua.includes('Windows')) return 'windows';
  return 'linux';
}

function pickAsset(
  assets: Array<{ name: string; browser_download_url: string }>,
  platform: Platform,
): string {
  switch (platform) {
    case 'mac':
      return (
        assets.find(a => a.name.endsWith('-universal.dmg'))?.browser_download_url ??
        assets.find(a => a.name.endsWith('.dmg') && !a.name.endsWith('.blockmap'))?.browser_download_url ??
        FALLBACK_URL
      );
    case 'windows':
      return (
        assets.find(a => a.name.includes('-setup-x64.exe'))?.browser_download_url ??
        assets.find(a => a.name.includes('-setup.exe') && !a.name.endsWith('.blockmap'))?.browser_download_url ??
        FALLBACK_URL
      );
    case 'linux':
      return (
        assets.find(a => a.name.endsWith('.flatpak'))?.browser_download_url ??
        assets.find(a => a.name.endsWith('-x64.tar.gz'))?.browser_download_url ??
        FALLBACK_URL
      );
  }
}

export const downloadStore = readable<DownloadInfo | null>(null, set => {
  if (typeof window === 'undefined') return;

  const platform = detectPlatform();

  fetch(`https://api.github.com/repos/${REPO}/releases?per_page=1`)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((releases: Array<{ tag_name: string; assets: Array<{ name: string; browser_download_url: string }> }>) => {
      const release = releases[0];
      if (!release) return;
      const url = pickAsset(release.assets ?? [], platform);
      if (url === FALLBACK_URL) return;
      set({ url, platform, version: release.tag_name ?? '' });
    })
    .catch(() => {
      // keep null → template falls back to FALLBACK_URL with target="_blank"
    });
});
