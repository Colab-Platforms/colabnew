# Investor Relations Page - Setup Guide

## ✅ What's Been Created

1. **Investor Relations Page** (`src/pages/InvestorRelations.tsx`)
   - Professional tabbed interface
   - Search functionality
   - Document cards with download links
   - Responsive design with animations
   - Stats dashboard

2. **Data Structure** (`src/data/investorData.json`)
   - Currently contains 2 categories as sample
   - Ready to accept all 30 categories

3. **Routing** - Added to `src/App.tsx`
   - Route: `/investor-relations`

4. **Navigation** - Added to `src/components/Header.tsx`
   - Desktop menu: "Investors" link
   - Mobile menu: "Investors" link

## 📝 How to Add Complete Data

Your complete JSON data needs to be added to `src/data/investorData.json`. 

### Option 1: Manual Copy-Paste
1. Open `src/data/investorData.json`
2. Replace the entire content with your complete JSON array
3. Make sure it's valid JSON (use a JSON validator if needed)

### Option 2: Using PowerShell Script
Run this command in your project root:

```powershell
@'
[YOUR_COMPLETE_JSON_HERE]
'@ | Out-File -FilePath "src/data/investorData.json" -Encoding UTF8 -NoNewline
```

## 📊 Data Structure

Each category should follow this format:

```json
{
  "id": 1,
  "header": "Category Name",
  "text": [
    {
      "id": 1,
      "head": "Document Title",
      "link": "https://document-url.pdf",
      "quarter": "2024-25" // Optional
    }
  ]
}
```

## 🎨 Features

### Tabs System
- Horizontal scrollable tabs
- Active tab highlighting
- Smooth transitions

### Search
- Real-time filtering
- Searches document titles
- Works across all tabs

### Document Cards
- Hover effects
- Download icon
- Quarter badges (if provided)
- External link handling

### Stats Dashboard
- Market Cap
- Shareholders
- Years Listed
- Credit Rating

## 🔧 Customization

### Update Stats
Edit the `stats` array in `InvestorRelations.tsx`:

```typescript
const stats = [
  { icon: TrendingUp, label: 'Market Cap', value: '₹2,500 Cr', color: 'from-blue-500 to-cyan-500' },
  // Add more stats...
];
```

### Change Colors
The page uses Tailwind gradient classes. Update these in the component:
- `from-blue-600 to-purple-600` - Primary gradient
- `from-gray-900 via-black to-gray-900` - Background

### Add More Tabs
Simply add more categories to your JSON file. The component automatically generates tabs.

## 📱 Responsive Design

- **Desktop**: Full grid layout with 3 columns
- **Tablet**: 2 columns
- **Mobile**: Single column, horizontal scrolling tabs

## 🚀 Next Steps

1. Add your complete JSON data (all 30 categories)
2. Test the search functionality
3. Verify all document links work
4. Customize stats if needed
5. Adjust colors to match your brand

## 📄 All 30 Categories You Mentioned

1. Corporate Governance ✅
2. Shareholding Pattern ✅
3. Statement of Investor Complaints
4. Reconciliation of Share Capital Audit
5. Certificate From RTA
6. Compliance Certificate
7. Annual Report
8. Financial Results
9. Policies
10. Newspaper Intimation
11. Trading Window Closure
12. Voting Results
13. Press-Release
14. Appointment / Resignation Letter
15. BM Intimation
16. BM Outcome
17. Corporate Announcements
18. Notice to shareholders
19. Annual Return
20. Book Closure
21. Moa & Aoa
22. Proceeding to General Meeting
23. Secretarial Compliance Report
24. Integrated Governance
25. Dividend
26. Larger Corporate
27-30. (Add any remaining categories)

## ⚠️ Important Notes

- All document links should be HTTPS
- PDF links work best
- HTML links (like `/Share-Holding-Pattern-31.03.2025.html`) will open in same tab
- External links open in new tab with `target="_blank"`

## 🎯 Page URL

Access the page at: `http://localhost:8080/investor-relations`

---

**Need Help?** The page is fully functional with the sample data. Just replace the JSON file content with your complete data!
