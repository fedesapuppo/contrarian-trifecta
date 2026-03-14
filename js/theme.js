import { t } from './i18n.js';

const STORAGE_KEY = 'trifecta-theme';

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) document.documentElement.dataset.theme = saved;
  updateThemeLabel(document.documentElement.dataset.theme || 'light');

  document.getElementById('theme-toggle').addEventListener('click', toggle);

  const legendToggle = document.getElementById('legend-toggle');
  const legendPanel = document.getElementById('legend-panel');
  const legendClose = document.getElementById('legend-close');

  legendToggle.addEventListener('click', () => {
    legendPanel.hidden = !legendPanel.hidden;
  });

  legendClose.addEventListener('click', () => {
    legendPanel.hidden = true;
  });

  legendPanel.addEventListener('keydown', e => {
    if (e.key === 'Escape') legendPanel.hidden = true;
  });
}

function toggle() {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem(STORAGE_KEY, next);
  updateThemeLabel(next);
}

export function updateThemeLabel(theme) {
  if (!theme) theme = document.documentElement.dataset.theme || 'light';
  const label = document.getElementById('theme-label');
  if (label) label.textContent = theme === 'dark' ? t('toolbar.themeLight') : t('toolbar.themeDark');
}
