# How to Add Your Complete Investor Data

## Quick Method

Since your JSON data is very large (30 categories with hundreds of documents), here's the easiest way:

### Step 1: Create a text file
1. Create a new file called `investor-data-complete.txt` in your project root
2. Paste your COMPLETE JSON array (the one you provided in the message)

### Step 2: Run this PowerShell command

```powershell
Get-Content "investor-data-complete.txt" | Out-File -FilePath "src/data/investorData.json" -Encoding UTF8 -NoNewline
```

## Alternative: Direct PowerShell Command

Run this in PowerShell (replace the `...` with your complete JSON):

```powershell
@'
[{"id": 1,"header": "Corporate Governance","text": [...]},{"id": 2,"header": "Shareholding Pattern","text": [...]}, ... ALL YOUR DATA HERE ...]
'@ | Out-File -FilePath "src/data/investorData.json" -Encoding UTF8 -NoNewline
```

## Verify the Data

After adding, check if the file is valid:

```powershell
Get-Content "src/data/investorData.json" | ConvertFrom-Json | ConvertTo-Json -Depth 10
```

If no errors, your data is valid!

## Test the Page

1. Start your dev server: `npm run dev`
2. Navigate to: `http://localhost:8080/investor-relations`
3. You should see all 30 tabs with your documents

---

**Your data structure is perfect!** The page is already built to handle all 30 categories automatically.
