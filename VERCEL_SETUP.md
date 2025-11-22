# 🚀 Vercel Deployment - Quick Setup

## ✅ Backend Ready!

Tumhare project me **Vercel serverless functions** setup ho gaye hain:

### 📁 Structure:
```
api/
├── stock-data.ts         # Real-time stock prices (TwelveData API)
└── bse-compliance.ts     # BSE compliance announcements

src/services/
├── bseService.ts         # Frontend service (calls /api/stock-data)
└── bseComplianceService.ts # Frontend service (calls /api/bse-compliance)
```

---

## 🚀 Deploy Kaise Kare (3 Steps)

### Step 1: Vercel Account
1. [vercel.com](https://vercel.com) pe jao
2. GitHub se sign up karo (FREE)

### Step 2: Project Connect
1. Dashboard → "New Project"
2. Apna GitHub repo select karo
3. "Deploy" button dabao

### Step 3: Environment Variable
Settings → Environment Variables me add karo:
```
TWELVEDATA_API_KEY=4049c8eebfd744959155f76559bb50a4
```

**Done! 🎉**

---

## 🧪 Testing

Deploy hone ke baad test karo:

```bash
# Stock data
curl https://your-app.vercel.app/api/stock-data

# BSE compliance
curl https://your-app.vercel.app/api/bse-compliance
```

---

## 💡 Features

✅ **CORS Bypass** - Server-side API calls
✅ **API Key Security** - Keys safe on server
✅ **Auto-scaling** - Vercel handles traffic
✅ **5-min Cache** - Optimizes API usage (800/day limit)
✅ **Fallback Data** - Works even if API fails
✅ **Free Tier** - 100GB bandwidth

---

## 🔧 Local Development

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Run locally
vercel dev

# Test endpoints
curl http://localhost:3000/api/stock-data
```

---

## 📊 API Response Examples

### Stock Data (`/api/stock-data`):
```json
{
  "symbol": "BSE: 539528",
  "companyName": "Colab Platforms Ltd",
  "currentPrice": 200.60,
  "change": -2.00,
  "changePercent": -0.99,
  "volume": 52000,
  "status": "closed"
}
```

### BSE Compliance (`/api/bse-compliance`):
```json
{
  "Table": [
    {
      "SCRIP_CD": "539528",
      "COMPANY_NAME": "Colab Platforms Ltd",
      "NEWS_SUBJECT": "Financial Results",
      "NEWS_DT": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

## 🐛 Troubleshooting

**404 Error?**
- Check `vercel.json` configuration
- Ensure `api/` folder exists
- Redeploy

**CORS Error?**
- Headers already set in functions
- Check browser console

**API Key Not Working?**
- Add in Vercel dashboard → Settings → Environment Variables
- Redeploy after adding

---

## 📝 Next Steps

1. ✅ Code ready
2. 🚀 Deploy to Vercel
3. 🧪 Test endpoints
4. 📊 Monitor usage

**Bas itna hi! Simple aur clean! 🎉**
