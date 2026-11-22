const BASE = '/api';

export async function fetchElectionAnalysis(year, party) {
  const res = await fetch(`${BASE}/election-analysis?year=${year}&party=${party}`);
  return res.json();
}

export async function fetchCompanyAnalysis(query) {
  const res = await fetch(`${BASE}/company-analysis?q=${encodeURIComponent(query)}`);
  return res.json();
}

export async function fetchHistoricalTrends() {
  const res = await fetch(`${BASE}/historical-trends`);
  return res.json();
}

export async function fetchPrediction(party, state) {
  const res = await fetch(`${BASE}/prediction?party=${party}&state=${encodeURIComponent(state)}`);
  return res.json();
}

export async function fetchMarketData(company, period = '6mo') {
  const res = await fetch(
    `${BASE}/market-data?company=${encodeURIComponent(company)}&period=${period}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Unable to fetch market data');
  }

  return data;
}

export async function fetchCompanyNews(company, limit = 10) {
  const res = await fetch(
    `${BASE}/company-news?company=${encodeURIComponent(company)}&limit=${limit}`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Unable to fetch company news');
  }

  return data;
}
