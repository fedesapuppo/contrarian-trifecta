const translations = {
  en: {
    // Toolbar
    'toolbar.title': 'Three-Pillar Analytical Station for Stock Analysis',
    'toolbar.subtitle': 'Contrarian Trifecta',
    'toolbar.allSectors': 'All Sectors',
    'toolbar.searchPlaceholder': 'Search ticker or company...',
    'toolbar.legendLabel': 'Show scoring legend',
    'toolbar.legendTitle': 'Scoring legend & reference',
    'toolbar.themeLabel': 'Toggle theme',
    'toolbar.themeTitle': 'Toggle dark/light theme',

    // Tabs
    'tab.trifecta': 'Trifecta Picks',
    'tab.technical': 'Technical View',
    'tab.fundamentals': 'Fundamentals',
    'tab.sentiment': 'Sentiment Lab',

    // Tab descriptions
    'tabDesc.trifecta': (count) => `<strong>Trifecta Picks</strong> — Top 9 from ${count} analyzed stocks, ranked by combined score: Fundamental (50%), Sentiment (35%), Technical (15%). <em>Emotional</em> = irrational sentiment-driven selloff. <em>Cyclical</em> = economic cycle downturn. <em>Structural</em> = business model concerns.`,
    'tabDesc.technical': (count) => `<strong>Technical View</strong> — ${count} stocks from initial oversold screen. RSI below 30 signals oversold conditions. The 52-week range shows distance from annual highs.`,
    'tabDesc.fundamentals': (fundCount, exclCount) => `<strong>Fundamentals View</strong> — ${fundCount} stocks passed quality gate (${exclCount} excluded). Compares each stock against its sector median. Green up-arrows beat the median; red down-arrows trail it.`,
    'tabDesc.sentiment': (count) => `<strong>Sentiment Lab</strong> — ${count} stocks received AI fear analysis. Each card classifies the selloff type and rates confidence in the contrarian thesis.`,

    // Table common
    'table.noData': 'No data available',
    'table.noDataSub': 'Run the pipeline to generate data.',
    'table.stocks': (n) => `${n} stock${n !== 1 ? 's' : ''}`,

    // Ratings
    'rating.highConviction': 'High Conviction',
    'rating.moderate': 'Moderate',
    'rating.watchList': 'Watch List',
    'rating.lowConviction': 'Low Conviction',
    'rating.fearJustified': 'Fear Justified',

    // Trifecta
    'trifecta.empty': 'No stocks match current filters.',
    'trifecta.remaining': (n) => `Remaining ${n} stocks`,
    'trifecta.catalyst': 'Catalyst:',
    'trifecta.col.rank': 'Rank',
    'trifecta.col.ticker': 'Ticker',
    'trifecta.col.company': 'Company',
    'trifecta.col.sector': 'Sector',
    'trifecta.col.trifecta': 'Trifecta',
    'trifecta.col.fund': 'Fund.',
    'trifecta.col.sent': 'Sent.',
    'trifecta.col.tech': 'Tech.',
    'trifecta.col.price': 'Price',
    'trifecta.col.rating': 'Rating',
    'trifecta.col.flags': 'Flags',
    'trifecta.pillar.fund': 'Fund',
    'trifecta.pillar.sent': 'Sent',
    'trifecta.pillar.tech': 'Tech',

    // Badges
    'badge.divergence': 'Divergence',
    'badge.preEarnings': 'Pre-Earnings',

    // Technical
    'technical.col.ticker': 'Ticker',
    'technical.col.company': 'Company',
    'technical.col.price': 'Price',
    'technical.col.dayChange': 'Day Change',
    'technical.col.sma20': 'SMA 20 Dist.',
    'technical.col.sma200': 'SMA 200 Dist.',
    'technical.col.rsi': 'RSI (14)',
    'technical.col.high52w': '52W High Dist.',
    'technical.col.range52w': '52W Range Position',
    'technical.col.volume': 'Volume',
    'technical.col.techScore': 'Technical Score',
    'technical.oversold': 'Oversold',
    'technical.overbought': 'Overbought',

    // Fundamentals
    'fundamentals.col.ticker': 'Ticker',
    'fundamentals.col.company': 'Company',
    'fundamentals.col.sector': 'Sector',
    'fundamentals.col.eps': 'EPS (TTM)',
    'fundamentals.col.pe': 'P/E Ratio',
    'fundamentals.col.debtEq': 'Debt / Equity',
    'fundamentals.col.opMargin': 'Operating Margin',
    'fundamentals.col.roe': 'Return on Equity',
    'fundamentals.col.cashYield': 'Cash Yield',
    'fundamentals.col.fundScore': 'Fundamental Score',

    // Sentiment
    'sentiment.empty': 'No sentiment data',
    'sentiment.emptySub': 'Run the pipeline to generate AI analysis.',
    'sentiment.col.ticker': 'Ticker',
    'sentiment.col.company': 'Company',
    'sentiment.col.price': 'Price',
    'sentiment.col.sentiment': 'Sentiment',
    'sentiment.col.classification': 'Classification',
    'sentiment.col.confidence': 'Confidence',
    'sentiment.col.reasoning': 'AI Reasoning',
    'sentiment.col.catalyst': 'Catalyst',
    'sentiment.col.shortFloat': 'Short Float',
    'sentiment.col.target': 'Target',
    'sentiment.excluded': (n) => `Excluded Stocks (${n}) - failed quality gate before AI analysis`,

    // Footer
    'footer.disclaimer': 'This tool is for informational and educational purposes. It does not constitute financial advice or investment recommendations. Consult a professional before making decisions.',
    'footer.attribution': 'Design & development: Federico Sapuppo',
    'footer.contact': 'fedesapuppo@hotmail.com',

    // CTA
    'cta.tagline': 'A screener spots opportunities. An advisor helps you act on them.',

    // Legend
    'legend.title': 'Scoring System Reference',
    'legend.scoreRanges': 'Score Ranges',
    'legend.strongSignal': 'Strong / Bullish signal',
    'legend.moderateSignal': 'Moderate / Neutral signal',
    'legend.weakSignal': 'Weak / Bearish signal',
    'legend.ratingLabels': 'Rating Labels',
    'legend.trifectaPillars': 'Trifecta Pillars',
    'legend.fundamental': 'Fundamental (50%)',
    'legend.fundamentalDesc': 'Sector-relative value & quality metrics',
    'legend.sentiment': 'Sentiment (35%)',
    'legend.sentimentDesc': 'AI-analyzed fear vs. fundamentals mismatch',
    'legend.technical': 'Technical (15%)',
    'legend.technicalDesc': 'Price action floor signals & oversold conditions',
    'legend.badges': 'Badges & Tags',
    'legend.divergenceDesc': 'Two pillar scores differ by 30+ points (potential value trap)',
    'legend.earningsDesc': 'Earnings report upcoming, higher uncertainty',
    'legend.emotionalDesc': 'AI classifies selloff as irrational / sentiment-driven',
    'legend.cyclicalDesc': 'AI classifies selloff as tied to economic cycles',
    'legend.structuralDesc': 'AI classifies selloff as driven by business model concerns',
    'legend.highConfDesc': 'AI has high confidence in its analysis',
    'legend.lowConfDesc': 'AI has low confidence, use caution',
    'legend.technicalIndicators': 'Technical Indicators',
    'legend.oversoldDesc': 'Oversold territory (potential buying signal)',
    'legend.neutralDesc': 'Neutral range',
    'legend.overboughtDesc': 'Overbought territory (caution)',
    'legend.fundamentalArrows': 'Fundamental Arrows',
    'legend.betterThanSector': 'Better than sector',
    'legend.betterDesc': 'Green up-arrow: metric beats sector median',
    'legend.worseThanSector': 'Worse than sector',
    'legend.worseDesc': 'Red down-arrow: metric trails sector median',

    // Month selector
    'month.label': 'Select month',

    // Lang selector
    'lang.label': 'Language',
  },
  es: {
    // Toolbar
    'toolbar.title': 'Estaci\u00f3n Anal\u00edtica de Tres Pilares para Acciones Burs\u00e1tiles',
    'toolbar.subtitle': 'Contrarian Trifecta',
    'toolbar.allSectors': 'Todos los Sectores',
    'toolbar.searchPlaceholder': 'Buscar ticker o empresa...',
    'toolbar.legendLabel': 'Mostrar leyenda de puntuacion',
    'toolbar.legendTitle': 'Leyenda y referencia de puntuacion',
    'toolbar.themeLabel': 'Cambiar tema',
    'toolbar.themeTitle': 'Cambiar tema claro/oscuro',

    // Tabs
    'tab.trifecta': 'Selecciones Trifecta',
    'tab.technical': 'Vista Tecnica',
    'tab.fundamentals': 'Fundamentales',
    'tab.sentiment': 'Lab de Sentimiento',

    // Tab descriptions
    'tabDesc.trifecta': (count) => `<strong>Selecciones Trifecta</strong> — Top 9 de ${count} acciones analizadas, ordenadas por puntuacion combinada: Fundamental (50%), Sentimiento (35%), Tecnico (15%). <em>Emocional</em> = venta irracional impulsada por sentimiento. <em>Ciclico</em> = caida del ciclo economico. <em>Estructural</em> = preocupaciones del modelo de negocio.`,
    'tabDesc.technical': (count) => `<strong>Vista Tecnica</strong> — ${count} acciones del filtro inicial de sobreventa. RSI debajo de 30 indica condiciones de sobreventa. El rango de 52 semanas muestra la distancia desde los maximos anuales.`,
    'tabDesc.fundamentals': (fundCount, exclCount) => `<strong>Vista Fundamentales</strong> — ${fundCount} acciones pasaron el filtro de calidad (${exclCount} excluidas). Compara cada accion contra la mediana de su sector. Flechas verdes superan la mediana; flechas rojas estan por debajo.`,
    'tabDesc.sentiment': (count) => `<strong>Lab de Sentimiento</strong> — ${count} acciones recibieron analisis de miedo por IA. Cada tarjeta clasifica el tipo de venta y califica la confianza en la tesis contrarian.`,

    // Table common
    'table.noData': 'No hay datos disponibles',
    'table.noDataSub': 'Ejecute el pipeline para generar datos.',
    'table.stocks': (n) => `${n} accion${n !== 1 ? 'es' : ''}`,

    // Ratings
    'rating.highConviction': 'Alta Conviccion',
    'rating.moderate': 'Moderada',
    'rating.watchList': 'Lista de Espera',
    'rating.lowConviction': 'Baja Conviccion',
    'rating.fearJustified': 'Miedo Justificado',

    // Trifecta
    'trifecta.empty': 'Ninguna accion coincide con los filtros actuales.',
    'trifecta.remaining': (n) => `${n} acciones restantes`,
    'trifecta.catalyst': 'Catalizador:',
    'trifecta.col.rank': 'Rango',
    'trifecta.col.ticker': 'Ticker',
    'trifecta.col.company': 'Empresa',
    'trifecta.col.sector': 'Sector',
    'trifecta.col.trifecta': 'Trifecta',
    'trifecta.col.fund': 'Fund.',
    'trifecta.col.sent': 'Sent.',
    'trifecta.col.tech': 'Tec.',
    'trifecta.col.price': 'Precio',
    'trifecta.col.rating': 'Calificacion',
    'trifecta.col.flags': 'Alertas',
    'trifecta.pillar.fund': 'Fund',
    'trifecta.pillar.sent': 'Sent',
    'trifecta.pillar.tech': 'Tec',

    // Badges
    'badge.divergence': 'Divergencia',
    'badge.preEarnings': 'Pre-Resultados',

    // Technical
    'technical.col.ticker': 'Ticker',
    'technical.col.company': 'Empresa',
    'technical.col.price': 'Precio',
    'technical.col.dayChange': 'Cambio Diario',
    'technical.col.sma20': 'Dist. SMA 20',
    'technical.col.sma200': 'Dist. SMA 200',
    'technical.col.rsi': 'RSI (14)',
    'technical.col.high52w': 'Dist. Max 52S',
    'technical.col.range52w': 'Posicion Rango 52S',
    'technical.col.volume': 'Volumen',
    'technical.col.techScore': 'Puntuacion Tecnica',
    'technical.oversold': 'Sobrevendido',
    'technical.overbought': 'Sobrecomprado',

    // Fundamentals
    'fundamentals.col.ticker': 'Ticker',
    'fundamentals.col.company': 'Empresa',
    'fundamentals.col.sector': 'Sector',
    'fundamentals.col.eps': 'BPA (UDM)',
    'fundamentals.col.pe': 'Ratio P/G',
    'fundamentals.col.debtEq': 'Deuda / Patrimonio',
    'fundamentals.col.opMargin': 'Margen Operativo',
    'fundamentals.col.roe': 'Retorno s/ Patrimonio',
    'fundamentals.col.cashYield': 'Rend. Efectivo',
    'fundamentals.col.fundScore': 'Puntuacion Fundamental',

    // Sentiment
    'sentiment.empty': 'Sin datos de sentimiento',
    'sentiment.emptySub': 'Ejecute el pipeline para generar analisis de IA.',
    'sentiment.col.ticker': 'Ticker',
    'sentiment.col.company': 'Empresa',
    'sentiment.col.price': 'Precio',
    'sentiment.col.sentiment': 'Sentimiento',
    'sentiment.col.classification': 'Clasificacion',
    'sentiment.col.confidence': 'Confianza',
    'sentiment.col.reasoning': 'Razonamiento IA',
    'sentiment.col.catalyst': 'Catalizador',
    'sentiment.col.shortFloat': 'Short Float',
    'sentiment.col.target': 'Objetivo',
    'sentiment.excluded': (n) => `Acciones Excluidas (${n}) - no pasaron el filtro de calidad antes del analisis de IA`,

    // Footer
    'footer.disclaimer': 'Esta herramienta es informativa y educativa. No constituye asesoramiento financiero ni recomendaci\u00f3n de inversi\u00f3n. Consult\u00e1 a un profesional antes de tomar decisiones.',
    'footer.attribution': 'Dise\u00f1o y desarrollo: Federico Sapuppo',
    'footer.contact': 'fedesapuppo@hotmail.com',

    // CTA
    'cta.tagline': 'Un screener identifica oportunidades. Un asesor te ayuda a actuar sobre ellas.',

    // Legend
    'legend.title': 'Referencia del Sistema de Puntuacion',
    'legend.scoreRanges': 'Rangos de Puntuacion',
    'legend.strongSignal': 'Senal fuerte / alcista',
    'legend.moderateSignal': 'Senal moderada / neutral',
    'legend.weakSignal': 'Senal debil / bajista',
    'legend.ratingLabels': 'Etiquetas de Calificacion',
    'legend.trifectaPillars': 'Pilares Trifecta',
    'legend.fundamental': 'Fundamental (50%)',
    'legend.fundamentalDesc': 'Metricas de valor y calidad relativas al sector',
    'legend.sentiment': 'Sentimiento (35%)',
    'legend.sentimentDesc': 'Desajuste analizado por IA entre miedo y fundamentales',
    'legend.technical': 'Tecnico (15%)',
    'legend.technicalDesc': 'Senales de piso y condiciones de sobreventa',
    'legend.badges': 'Insignias y Etiquetas',
    'legend.divergenceDesc': 'Dos pilares difieren por 30+ puntos (posible trampa de valor)',
    'legend.earningsDesc': 'Reporte de resultados proximo, mayor incertidumbre',
    'legend.emotionalDesc': 'IA clasifica la venta como irracional / impulsada por sentimiento',
    'legend.cyclicalDesc': 'IA clasifica la venta como ligada a ciclos economicos',
    'legend.structuralDesc': 'IA clasifica la venta como impulsada por preocupaciones del modelo de negocio',
    'legend.highConfDesc': 'IA tiene alta confianza en su analisis',
    'legend.lowConfDesc': 'IA tiene baja confianza, proceder con cautela',
    'legend.technicalIndicators': 'Indicadores Tecnicos',
    'legend.oversoldDesc': 'Territorio de sobreventa (posible senal de compra)',
    'legend.neutralDesc': 'Rango neutral',
    'legend.overboughtDesc': 'Territorio de sobrecompra (cautela)',
    'legend.fundamentalArrows': 'Flechas Fundamentales',
    'legend.betterThanSector': 'Mejor que el sector',
    'legend.betterDesc': 'Flecha verde: metrica supera mediana del sector',
    'legend.worseThanSector': 'Peor que el sector',
    'legend.worseDesc': 'Flecha roja: metrica por debajo de mediana del sector',

    // Month selector
    'month.label': 'Seleccionar mes',

    // Lang selector
    'lang.label': 'Idioma',
  }
};

const STORAGE_KEY = 'trifecta-lang';
let currentLang = 'en';

export function t(key) {
  const val = translations[currentLang]?.[key] ?? translations.en[key] ?? key;
  return val;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (translations[lang]) {
    currentLang = lang;
    sessionStorage.setItem(STORAGE_KEY, lang);
  }
}

export function initLang() {
  const saved = sessionStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) {
    currentLang = saved;
  }
}
