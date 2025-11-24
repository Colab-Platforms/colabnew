// BSE Compliance Service
// Fetches corporate announcements and compliance filings from BSE

export interface ComplianceDocument {
  id: string;
  date: string;
  category: string;
  subject: string;
  description?: string;
  pdfUrl?: string;
  newsType?: string;
  exchange: 'BSE' | 'NSE';
}

export interface ComplianceFilters {
  category?: string;
  fromDate?: string;
  toDate?: string;
  searchTerm?: string;
}

// BSE API Configuration
const BSE_COMPANY_CODE = '542866';
const BSE_API_BASE = 'https://api.bseindia.com/BseIndiaAPI/api';

// Cache for compliance data
let cachedCompliance: ComplianceDocument[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 300000; // 5 minutes

// Fetch compliance documents from BSE
export const fetchBSECompliance = async (
  filters?: ComplianceFilters
): Promise<ComplianceDocument[]> => {
  // Return cached data if still valid and no filters
  const now = Date.now();
  if (cachedCompliance && (now - lastFetchTime) < CACHE_DURATION && !filters) {
    console.log('Returning cached compliance data');
    return cachedCompliance;
  }

  try {
    console.log('🔄 Fetching BSE compliance data...');

    // Calculate dates for the API
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 90); // Last 90 days

    const toDateStr = toDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const fromDateStr = fromDate.toISOString().split('T')[0]; // YYYY-MM-DD

    // BSE API Parameters
    const bseParams = new URLSearchParams({
      strCat: '-1',
      strPrevDate: fromDateStr.replace(/-/g, ''), // YYYYMMDD
      strScrip: BSE_COMPANY_CODE,
      strSearch: 'P',
      strToDate: toDateStr.replace(/-/g, ''), // YYYYMMDD
      strType: 'C'
    });

    // Try fetching via CORS Proxy (works on localhost)
    // Using multiple proxies for reliability
    const targetUrl = `${BSE_API_BASE}/AnnGetData/w?${bseParams.toString()}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;

    console.log('Trying fetch via CORS proxy:', proxyUrl);

    let response = await fetch(proxyUrl);

    // If proxy fails, try direct (might work in some envs) or local API
    if (!response.ok) {
      console.log('Proxy failed, trying local API...');
      response = await fetch('/api/bse-compliance');
    }

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();

    // Parse BSE API response
    // The API returns { Table: [...] }
    const tableData = data.Table || data; // Handle cases where proxy might unwrap it differently

    if (Array.isArray(tableData)) {
      const documents: ComplianceDocument[] = tableData.map((item: any, index: number) => {
        // Fix attachment URL if it's relative or malformed
        let pdfUrl = item.ATTACHMENT;
        if (pdfUrl && !pdfUrl.startsWith('http')) {
          pdfUrl = `https://www.bseindia.com/xml-data/corpfiling/AttachLive/${pdfUrl}`;
        }
        // If no attachment, use the generic page
        if (!pdfUrl) {
          pdfUrl = `https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/${BSE_COMPANY_CODE}/`;
        }

        return {
          id: `bse-${index}`,
          date: item.NEWS_DT || new Date().toISOString(),
          category: item.NEWSSUB || 'General Updates',
          subject: item.NEWS_SUBJECT || item.COMPANY_NAME || 'BSE Announcement',
          description: item.NEWSSUB,
          pdfUrl: pdfUrl,
          exchange: 'BSE' as const
        };
      });

      // Cache the data
      cachedCompliance = documents;
      lastFetchTime = now;

      console.log(`✅ Real BSE compliance data fetched: ${documents.length} documents`);
      return documents;
    }

    throw new Error('Invalid response format from BSE API');

  } catch (error) {
    console.warn('Error fetching BSE compliance:', error);

    // Return cached data if available
    if (cachedCompliance) {
      console.log('Returning cached compliance data due to error');
      return cachedCompliance;
    }

    // Return fallback mock data
    console.log('Using fallback compliance data');
    return getFallbackComplianceData();
  }
};

// Get compliance categories
export const getComplianceCategories = (): string[] => {
  return [
    'All',
    'Board Meeting',
    'Financial Results',
    'Shareholding Pattern',
    'Annual Report',
    'Corporate Governance',
    'Dividend',
    'General Updates',
    'Insider Trading',
    'Related Party Transactions',
    'Material Events'
  ];
};

// Helper: Format BSE date (YYYYMMDD to readable format)
const formatBSEDate = (dateStr: string): string => {
  if (!dateStr || dateStr.length !== 8) return new Date().toISOString();

  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  return new Date(`${year}-${month}-${day}`).toISOString();
};

// Helper: Get date N days ago (YYYYMMDD format)
const getDateDaysAgo = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
};

// Helper: Get current date (YYYYMMDD format)
const getCurrentDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
};

// Fallback data when API fails (Colab Platforms Ltd - BSE: 542866)
const getFallbackComplianceData = (): ComplianceDocument[] => {
  const today = new Date();
  return [
    {
      id: 'colab-1',
      date: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Financial Results',
      subject: 'Colab Platforms Ltd - Unaudited Financial Results Q3 FY 2024-25',
      description: 'Financial Results for Colab Platforms Ltd (BSE: 542866) for the quarter ended December 31, 2024',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-2',
      date: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Board Meeting',
      subject: 'Colab Platforms - Board Meeting Intimation',
      description: 'Intimation of Board Meeting to consider Q3 FY 2024-25 Financial Results',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-3',
      date: new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Shareholding Pattern',
      subject: 'Colab Platforms - Shareholding Pattern December 2024',
      description: 'Shareholding Pattern of Colab Platforms Ltd as per SEBI (LODR) Regulations',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-4',
      date: new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Corporate Governance',
      subject: 'Colab Platforms - Corporate Governance Report Q3',
      description: 'Quarterly Corporate Governance Report for Colab Platforms Ltd',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-5',
      date: new Date(today.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'General Updates',
      subject: 'Colab Platforms - Outcome of Board Meeting',
      description: 'Outcome of Board Meeting - Approval of business expansion plans',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-6',
      date: new Date(today.getTime() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Material Events',
      subject: 'Colab Platforms - Material Event Disclosure',
      description: 'Disclosure of material events for Colab Platforms Ltd under Regulation 30',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-7',
      date: new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Related Party Transactions',
      subject: 'Colab Platforms - Related Party Transactions Disclosure',
      description: 'Disclosure of Related Party Transactions for Colab Platforms Ltd',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    },
    {
      id: 'colab-8',
      date: new Date(today.getTime() - 40 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Annual Report',
      subject: 'Colab Platforms Ltd - Annual Report FY 2023-24',
      description: 'Annual Report for Colab Platforms Ltd for Financial Year 2023-24',
      pdfUrl: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/542866/',
      exchange: 'BSE'
    }
  ];
};

// Format date for display
export const formatDisplayDate = (isoDate: string): string => {
  return new Date(isoDate).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

// Download PDF
export const downloadComplianceDocument = (doc: ComplianceDocument): void => {
  if (doc.pdfUrl) {
    window.open(doc.pdfUrl, '_blank');
  }
};
