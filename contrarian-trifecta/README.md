# Contrarian Trifecta

**Live at** [https://fedesapuppo.github.io/contrarian-trifecta](https://fedesapuppo.github.io/contrarian-trifecta)

**When the market sells quality, we pay attention.**

A stock screening dashboard that surfaces contrarian dollar-cost averaging opportunities by combining three independent analytical pillars — fundamental quality, AI-powered sentiment analysis, and technical floor detection — into a single conviction score.

The thesis is simple: **the best time to accumulate shares in a strong business is when the market irrationally fears it.** This tool automates the discipline of separating unjustified panic from legitimate decline.

---

## The Trifecta Model

Most screeners rely on a single lens — value ratios, or chart patterns, or analyst ratings. Each lens has blind spots. The Trifecta model requires agreement across three independent pillars before flagging an opportunity:

| Pillar | Weight | What It Measures |
|--------|--------|------------------|
| **Fundamental** | 50% | Is this a business worth owning? Sector-relative P/E, debt structure, margins, ROE, cash yield, and dividend coverage. |
| **Sentiment** | 35% | Is the fear justified? AI analysis of the decline narrative, short interest, insider activity, and analyst price gap. |
| **Technical** | 15% | Is there a floor forming? Distance from 52W high, RSI, SMA structure, and double-bottom patterns. |

Fundamentals carry half the weight by design. No amount of discount justifies a deteriorating business. Sentiment carries more weight than technicals because understanding *why* a stock is down matters more than the pattern it draws on a chart.

### Sector-Relative Scoring

Absolute thresholds are lazy analysis. A P/E of 15 is cheap in Technology and expensive in Utilities. Every metric is scored relative to the stock's own sector median, computed from the current screening pool. This eliminates sector bias and surfaces genuinely mispriced names within their peer group.

### The Exclusion Gate

Before any scoring begins, a hard binary filter removes companies with structural distress:

- Liquidity crisis (critically low current ratio)
- Unsustainable leverage (debt multiples above sector norms)
- No path to profitability (negative earnings *and* negative margins)

This prevents the classic value trap: a stock that *looks* cheap because the business is dying. The gate is intentionally strict — better to miss an opportunity than to catch a falling knife.

### Divergence Detection

When two pillars disagree by more than 30 points, the system raises a divergence flag. Strong fundamentals paired with deeply negative sentiment may indicate a value trap the numbers haven't caught yet. These stocks aren't excluded — they're flagged for closer inspection.

### AI Sentiment Classification

Each surviving stock receives an AI-powered analysis that classifies the nature of the decline:

- **Structural** — Long-term business model concerns. Real risk. Proceed with caution.
- **Cyclical** — Temporary sector or macro headwinds. Patience required.
- **Emotional** — Irrational panic on a fundamentally sound company. The strongest contrarian signal.

The AI receives a full snapshot of each stock's financials, growth metrics, ownership structure, and price action — then evaluates whether the market's fear is proportional to the actual risk.

---

## How It Works

```
Screen oversold universe (RSI < 40, below 200-day SMA)
       │
       ▼
Scrape sector benchmarks for relative scoring
       │
       ▼
Enrich each stock with fundamental data
       │
       ▼
Apply exclusion gate ──── eliminated → excluded
       │
       ▼
Score fundamentals (sector-relative)
       │
       ▼
Score technical floor signals
       │
       ▼
AI sentiment analysis on survivors
       │
       ▼
Combine → Trifecta score + divergence flags
       │
       ▼
Rank and output to dashboard
```

---

## Dashboard

A four-tab interactive dashboard:

- **Trifecta** — Ranked opportunities with score breakdowns and expandable AI analysis
- **Technical** — Full screened universe with RSI heatmaps and 52W distance bars
- **Fundamentals** — Sector-relative arrows showing where each stock stands vs peers
- **Sentiment Lab** — AI reasoning cards with classification badges and catalyst identification

Features: dark/light theme, sortable columns, global search, sector filter, month selector, and bilingual support (English / Spanish).

### Multi-Market Support

| Market | Description |
|--------|-------------|
| **US** | Full pipeline with standard oversold filters |
| **Argentina** | ADR-focused screening with adjusted parameters |

---

## Ratings

| Trifecta Score | Rating | Interpretation |
|----------------|--------|----------------|
| 80+ | High Conviction | All three pillars agree — strong business, irrational fear, floor forming |
| 65–79 | Moderate Opportunity | Solid case with minor concerns in one pillar |
| 50–64 | Watch List | Interesting but not yet compelling — monitor for improvement |
| 30–49 | Low Conviction | Weak case across multiple pillars |
| < 30 | Fear Likely Justified | The market is probably right |

---

## Tech Stack

- **Frontend** — Vanilla JavaScript (ES6 modules), no build step, no framework dependencies
- **Styling** — Custom CSS with design tokens, dark/light theme support
- **Data** — Static JSON files updated monthly per market and language
- **Scoring Engine** — Ruby-based pipeline (private repository)
- **AI Analysis** — Powered by Claude (Anthropic)

---

## Disclaimer

This tool is for **informational and educational purposes only**. It does not constitute financial advice, investment recommendations, or an offer to buy or sell any securities. Past performance and screening results do not guarantee future results. Always conduct your own due diligence and consult with a qualified financial advisor before making investment decisions.

---

Built with Ruby, Claude, and the conviction that markets overreact.
