# Stock Data API Setup Guide - TwelveData

## TwelveData API (FREE Plan) ✅

### Why TwelveData?
- ✅ **FREE tier** with 800 calls/day
- ✅ **Official API** with documentation
- ✅ **BSE & NSE** support
- ✅ **Easy integration** with REST API
- ✅ **Reliable** and well-maintained
- ✅ **Real-time data** (15-min delay on free plan)

### Quick Setup (5 minutes)

#### Step 1: Get Free API Key
1. Go to: https://twelvedata.com
2. Click "Get Free API Key"
3. Sign up with email
4. Verify your email
5. Copy your API key from dashboard

#### Step 2: Add to Project
1. Open `.env` file in project root
2. Replace `your_api_key_here` with your actual key:
   ```
   VITE_TWELVEDATA_API_KEY=your_actual_api_key_here
   ```
3. Save the file

#### Step 3: Restart Server
```bash
# Stop current server (Ctrl+C)
# Start again
npm run dev
```

### Free Plan Limits

| Feature | Free Plan |
|---------|-----------|
| **API Credits/Minute** | 8 |
| **API Credits/Day** | 800 |
| **Data Delay** | 15 minutes |
| **Exchanges** | BSE, NSE, Global |
| **Cost** | FREE forever |
| **API Key** | Required |
| **Caching** | 5 minutes automatic |

### API Response Format

TwelveData returns data in this format:
```json
{
  "symbol": "539528.BSE",
  "name": "Colab Platforms Ltd",
  "exchange": "BSE",
  "currency": "INR",
  "datetime": "2025-01-15 15:30:00",
  "open": "99.00",
  "high": "102.00",
  "low": "98.50",
  "close": "100.50",
  "volume": "125000",
  "previous_close": "98.20"
}
```

### Stock Card Features

The investor relations page displays:
- ✅ **Current Price** - Live BSE price
- ✅ **Change & %** - Daily change with trend indicator
- ✅ **Open/High/Low** - Day's trading range
- ✅ **Volume** - Trading volume in Indian format
- ✅ **Market Status** - Live/Closed indicator
- ✅ **Last Updated** - Timestamp of last update
- ✅ **Quick Links** - BSE India, Screener links

### Smart Caching

**1-minute cache** to optimize API usage:
- First request: Fetches from API
- Subsequent requests (within 1 min): Returns cached data
- After 1 min: Fetches fresh data
- Auto-refresh: Every 60 seconds when page is open

### Testing

After setup, check browser console:
```
✅ "Stock data fetched successfully from StonkData"
✅ "Returning cached stock data" (subsequent calls)
```

### Troubleshooting

**Error: "TwelveData API key not configured"**
- Check `.env` file exists
- Verify `VITE_TWELVEDATA_API_KEY` is set
- Restart dev server
- Clear browser cache

**Error: "HTTP error! status: 401"**
- Invalid API key
- Check key is correct in `.env`
- Verify email is confirmed
- Check API key is active on TwelveData dashboard

**Error: "API limit reached"**
- Free plan: 800 calls/day limit reached
- Wait 24 hours for reset
- Or upgrade to paid plan
- Cached data will be used if available

**Error: "Invalid response format"**
- Symbol might not be available
- Try format: `539528.BSE` or `COLAB.NSE`
- Check TwelveData status page
- Cached data will be used if available

**No data showing**
- Check browser console for errors
- Verify API key is valid
- Check network tab for API calls
- Ensure BSE symbol format is correct (539528.BSE)

### Production Deployment

**Netlify/Vercel:**
1. Go to your project dashboard
2. Navigate to Environment Variables
3. Add new variable:
   - Key: `VITE_STONKDATA_API_KEY`
   - Value: Your API key
4. Redeploy your site

**Security:**
- ✅ API key in `.env` (not in git)
- ✅ `.env` in `.gitignore`
- ✅ Use `.env.example` for team
- ✅ Never commit actual keys

### Alternative: Manual Update

If you prefer not to use API:
```typescript
// In src/data/investorData.json
{
  "stockPrice": {
    "current": 100.50,
    "change": 2.30,
    "changePercent": 2.34,
    "volume": 125000,
    "high": 102.00,
    "low": 98.50,
    "open": 99.00,
    "lastUpdated": "2025-01-15"
  }
}
```

Update manually via CMS daily.

### Support

- TwelveData Docs: https://twelvedata.com/docs
- Support: support@twelvedata.com
- API Status: https://status.twelvedata.com
- Community: https://twelvedata.com/community

### Comparison with Other APIs

| API | Free Tier | Real-time | Indian Stocks | Setup |
|-----|-----------|-----------|---------------|-------|
| **TwelveData** | ✅ 800/day | ⚠️ 15-min delay | ✅ Yes | Easy |
| Yahoo Finance | ✅ Unlimited | ⚠️ 15-min delay | ✅ Yes | Easy (Unofficial) |
| Alpha Vantage | ✅ 25/day | ⚠️ 15-min delay | ✅ Yes | Easy |
| Finnhub | ✅ 60/min | ⚠️ 15-min delay | ⚠️ Limited | Medium |

---

**Ready to go!** 🚀 Your investor relations page will now show real BSE stock data with live updates.
