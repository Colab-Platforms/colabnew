// Vercel Serverless Function for BSE Compliance Data
// BSE API se compliance announcements fetch karta hai

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // BSE API endpoint (public data)
    const bseUrl = 'https://api.bseindia.com/BseIndiaAPI/api/AnnGetData/w';
    
    const params = new URLSearchParams({
      strCat: '-1',
      strPrevDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      strScrip: '539528', // Colab Platforms BSE code
      strSearch: 'P',
      strToDate: new Date().toISOString().split('T')[0],
      strType: 'C'
    });

    console.log('📋 Fetching BSE compliance data...');
    
    const response = await fetch(`${bseUrl}?${params}`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) {
      throw new Error(`BSE API error: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('✅ BSE compliance data received');
    
    return res.status(200).json(data);
    
  } catch (error: any) {
    console.error('❌ BSE API Error:', error.message);
    
    // Fallback mock data
    return res.status(200).json({
      Table: [
        {
          SCRIP_CD: '539528',
          COMPANY_NAME: 'Colab Platforms Ltd',
          NEWS_SUBJECT: 'Financial Results',
          NEWSSUB: 'Quarterly Results - Q2 FY2024',
          NEWS_DT: new Date().toISOString(),
          ATTACHMENT: 'https://www.bseindia.com/stock-share-price/colab-platforms-ltd/colab/539528/'
        }
      ],
      error: error.message
    });
  }
}
