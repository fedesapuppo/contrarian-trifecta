import { state } from './data.js';
import { createTable, scoreSpan, fmt, pct, escapeHtml } from './table.js';
import { getFilters } from './filters.js';
import { t } from './i18n.js';

export function renderFundamentals() {
  const panel = document.getElementById('panel-fundamentals');
  panel.innerHTML = '';

  const data = applyFilters(state.fundamentals);

  const columns = [
    { key: 'ticker', label: t('fundamentals.col.ticker'), title: 'Stock ticker symbol', render: r => `<strong>${escapeHtml(r.ticker)}</strong>` },
    { key: 'company', label: t('fundamentals.col.company'), title: 'Company name', render: r => escapeHtml(r.company) },
    { key: 'sector', label: t('fundamentals.col.sector'), title: 'Market sector', render: r => escapeHtml(r.sector) },
    { key: 'eps', label: t('fundamentals.col.eps'), title: 'Earnings per share, trailing twelve months', align: 'right', render: r => fmt(r.eps, 2) },
    { key: 'pe', label: t('fundamentals.col.pe'), title: 'Price-to-earnings ratio vs sector median (arrows show relative position)', align: 'right', render: r => renderRelative(r, 'pe', 'sector_median_pe', true) },
    { key: 'debt_eq', label: t('fundamentals.col.debtEq'), title: 'Debt-to-equity ratio vs sector median (lower is better)', align: 'right', render: r => renderRelative(r, 'debt_eq', 'sector_median_debt_eq', true) },
    { key: 'operating_margin', label: t('fundamentals.col.opMargin'), title: 'Operating margin vs sector median (higher is better)', align: 'right', render: r => renderRelativePct(r, 'operating_margin', 'sector_median_margin', false) },
    { key: 'roe', label: t('fundamentals.col.roe'), title: 'Return on equity vs sector median (higher is better)', align: 'right', render: r => renderRelativePct(r, 'roe', 'sector_median_roe', false) },
    { key: 'cash_yield', label: t('fundamentals.col.cashYield'), title: 'Cash per share / Price - balance sheet strength proxy', align: 'right', render: r => pct(r.cash_yield) },
    { key: 'fundamental_score', label: t('fundamentals.col.fundScore'), title: 'Fundamental pillar score (0-100, sector-relative)', align: 'center', render: r => scoreSpan(r.fundamental_score) }
  ];

  createTable(panel, { columns, data });
}

function renderRelative(row, key, medianKey, lowerIsBetter) {
  const val = row[key];
  if (val == null) return '-';

  const median = row[medianKey];
  if (median == null) return fmt(val);

  const isBetter = lowerIsBetter ? val < median : val > median;
  const cls = isBetter ? 'arrow--better' : 'arrow--worse';
  return `<span class="${cls}" title="Sector median: ${fmt(median)}">${fmt(val)}</span>`;
}

function renderRelativePct(row, key, medianKey, lowerIsBetter) {
  const val = row[key];
  if (val == null) return '-';

  const median = row[medianKey];
  if (median == null) return pct(val);

  const isBetter = lowerIsBetter ? val < median : val > median;
  const cls = isBetter ? 'arrow--better' : 'arrow--worse';
  return `<span class="${cls}" title="Sector median: ${pct(median)}">${pct(val)}</span>`;
}

function applyFilters(data) {
  const f = getFilters();
  return data.filter(s => {
    if (f.search) {
      const q = f.search.toLowerCase();
      if (!(s.ticker || '').toLowerCase().includes(q) && !(s.company || '').toLowerCase().includes(q)) return false;
    }
    if (f.sector && s.sector !== f.sector) return false;
    return true;
  });
}
