
export interface StockData {
  symbol: string;
  companyName: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  lastUpdated: string;
  status: 'open' | 'closed';
  high?: number;
  low?: number;
  open?: number;
  previousClose?: number;
}

// TwelveData API Configuration
const TWELVEDATA_API_KEY = '4049c8eebfd744959155f76559bb50a4';
const NSE_CODE = '542866';
const BSE_CODE = '542866';

// Cache to optimize API usage (800 calls/day limit)
let cachedData: StockData | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 300000; // 5 minutes cache

// Fetch BSE stock data using TwelveData API
export const fetchBSEStockData = async (): Promise<StockData> => {
  // Return cached data if still valid
  const now = Date.now();
  if (cachedData && (now - lastFetchTime) < CACHE_DURATION) {
    console.log('Returning cached stock data');
    return cachedData;
  }

  try {
    // Call Vercel serverless function
    const url = '/api/stock-data';
    
    console.log('🔄 Fetching from Vercel API...');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Function error: ${response.status}`);
    }
    
    const stockData: StockData = await response.json();
    
    console.log('✅ Real data from TwelveData (via Vercel):', stockData);
    
    // Cache the data
    cachedData = stockData;
    lastFetchTime = now;
    
    return stockData;
  } catch (error) {
    console.warn('Error fetching live stock data:', error);
    
    // Return cached data if available, even if expired
    if (cachedData) {
      console.log('Returning cached data due to API error');
      return cachedData;
    }
    
    // Always return fallback data (better than showing 0)
    console.log('Using fallback stock data - API unavailable');
    return await getFallbackStockData();
  }
};

// Fallback stock data (manually updated from BSE)
const getFallbackStockData = async (): Promise<StockData> => {
  try {
    // Try to load from JSON file (manually updated)
    const response = await fetch('/src/data/stockData.json');
    if (response.ok) {
      const data = await response.json();
      console.log('📄 Using manually updated stock data from JSON');
      return data;
    }
  } catch (err) {
    console.warn('Could not load stock data JSON');
  }
  
  // Final fallback with BSE real data (update manually)
  return {
    symbol: `BSE: ${BSE_CODE}`,
    companyName: 'Colab Platforms Ltd',
    currentPrice: 200.60,
    change: -2.00,
    changePercent: -0.99,
    lastUpdated: new Date().toISOString(),
    status: 'closed',
    high: 200.60,
    low: 200.60,
    open: 200.60,
    previousClose: 202.60
  };
};

// Format number with Indian numbering system
export const formatIndianNumber = (num: number): string => {
  return num.toLocaleString('en-IN');
};

// Format currency
export const formatCurrency = (num: number): string => {
  return `₹${num.toFixed(2)}`;
};
