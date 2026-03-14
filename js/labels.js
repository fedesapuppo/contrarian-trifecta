import { t, getLang } from './i18n.js';
import { getMonth } from './month.js';
import { updateThemeLabel } from './theme.js';

export function updateStaticLabels() {
  setText('.toolbar__title', t('toolbar.title'));
  setText('.toolbar__subtitle', t('toolbar.subtitle'));
  updateMonthDisplay();

  setAttr('#global-search', 'placeholder', t('toolbar.searchPlaceholder'));
  setAttr('#legend-toggle', 'aria-label', t('toolbar.legendLabel'));
  setAttr('#legend-toggle', 'title', t('toolbar.legendTitle'));
  setAttr('#theme-toggle', 'aria-label', t('toolbar.themeLabel'));
  setAttr('#theme-toggle', 'title', t('toolbar.themeTitle'));

  setTabText('trifecta', t('tab.trifecta'));
  setTabText('technical', t('tab.technical'));
  setTabText('fundamentals', t('tab.fundamentals'));
  setTabText('sentiment', t('tab.sentiment'));

  setText('.footer p', t('footer.disclaimer'));

  updateLegend();
  updateMarketSelector();
  updateThemeLabel();
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setTabText(tab, text) {
  const el = document.querySelector(`[data-tab="${tab}"]`);
  if (el) el.textContent = text;
}

const MONTH_NAMES = {
  en: ['January', 'February', 'March', 'April', 'May', 'June',
       'July', 'August', 'September', 'October', 'November', 'December'],
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
       'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
};

function updateMonthDisplay() {
  const el = document.getElementById('month-display');
  if (!el) return;

  const month = getMonth();
  if (!month) { el.textContent = ''; return; }

  const [year, m] = month.split('-');
  const names = MONTH_NAMES[getLang()] || MONTH_NAMES.en;
  el.textContent = `${names[parseInt(m, 10) - 1]} ${year}`;
}

function translateElements(container, selector, keys) {
  container.querySelectorAll(selector).forEach((el, i) => {
    if (keys[i]) el.textContent = t(keys[i]);
  });
}

function updateLegend() {
  const panel = document.getElementById('legend-panel');
  if (!panel) return;

  const title = panel.querySelector('.legend-panel__title');
  if (title) title.textContent = t('legend.title');

  translateElements(panel, '.legend-section h3', [
    'legend.scoreRanges', 'legend.ratingLabels', 'legend.trifectaPillars',
    'legend.badges', 'legend.technicalIndicators', 'legend.fundamentalArrows'
  ]);

  translateElements(panel, '.legend-desc', [
    'legend.strongSignal', 'legend.moderateSignal', 'legend.weakSignal',
    'legend.ratingHighDesc', 'legend.ratingModerateDesc', 'legend.ratingWatchDesc',
    'legend.ratingLowDesc', 'legend.ratingFearDesc',
    'legend.fundamentalDesc', 'legend.sentimentDesc', 'legend.technicalDesc',
    'legend.divergenceDesc', 'legend.earningsDesc', 'legend.emotionalDesc',
    'legend.cyclicalDesc', 'legend.structuralDesc', 'legend.highConfDesc', 'legend.lowConfDesc',
    'legend.oversoldDesc', 'legend.neutralDesc', 'legend.overboughtDesc',
    'legend.betterDesc', 'legend.worseDesc'
  ]);

  translateElements(panel, '.rating', [
    'rating.highConviction', 'rating.moderate', 'rating.watchList',
    'rating.lowConviction', 'rating.fearJustified'
  ]);

  translateElements(panel, '.badge', [
    'badge.divergence', 'badge.preEarnings', 'badge.emotional',
    'badge.cyclical', 'badge.structural', 'badge.highConf', 'badge.lowConf'
  ]);

  translateElements(panel, '.legend-section:nth-child(3) strong', [
    'legend.fundamental', 'legend.sentiment', 'legend.technical'
  ]);

  translateElements(panel, '.rsi--oversold, .rsi--neutral, .rsi--overbought', [
    'legend.rsiBelow30', 'legend.rsi30to70', 'legend.rsiAbove70'
  ]);

  translateElements(panel, '.arrow--better, .arrow--worse', [
    'legend.betterThanSector', 'legend.worseThanSector'
  ]);
}

function updateMarketSelector() {
  const select = document.getElementById('market-selector');
  if (!select) return;
  const options = select.querySelectorAll('option');
  const keys = ['toolbar.usMarket', 'toolbar.argentina'];
  options.forEach((opt, i) => {
    if (keys[i]) opt.textContent = t(keys[i]);
  });
}

