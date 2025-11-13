# Investor Relations CMS Setup Guide

## ✅ Files Created/Updated

### New Files:
1. **`public/investor-cms.js`** - Investor document management functionality
2. **`src/lib/investorFirebase.ts`** - Firebase integration for investor data

### Updated Files:
1. **`public/cms.html`** - Added investor management section with tabs
2. **`public/cms.js`** - Added tab switching functionality
3. **`src/pages/InvestorRelations.tsx`** - Updated to fetch from Firebase

## 🎯 Features

### CMS Features:
- ✅ **Tab Navigation** - Switch between Blog and Investor sections
- ✅ **Add Documents** - Upload investor documents with category
- ✅ **Edit Documents** - Modify existing documents
- ✅ **Delete Documents** - Remove documents
- ✅ **Category Management** - 8 predefined categories
- ✅ **Quarter/Year** - Optional field for financial documents

### Categories Available (26 Total):
1. Corporate Governance
2. Shareholding Pattern
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

## 🔧 Firebase Setup

### Step 1: Firestore Structure

The investor documents are stored in Firebase with this structure:

```
investorDocuments (collection)
├── Corporate Governance (document)
│   └── documents (subcollection)
│       ├── doc1 (document)
│       │   ├── head: "CGR_31.12.2019"
│       │   ├── link: "https://..."
│       │   ├── quarter: "2019-20"
│       │   ├── createdAt: timestamp
│       │   └── updatedAt: timestamp
│       └── doc2...
├── Financial Results (document)
│   └── documents (subcollection)
└── ... (other categories)
```

### Step 2: Firestore Rules

Add these rules to Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Blog Posts Collection
    match /blogPosts/{postId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
    
    // Investor Documents Collection
    match /investorDocuments/{category}/documents/{docId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

## 🚀 How to Use

### Access CMS:
```
http://localhost:5173/cms.html
```

### Login:
Use your Firebase authentication credentials

### Add Investor Document:
1. Click **"Investor Relations"** tab
2. Select **Category** from dropdown
3. Enter **Document Title** (e.g., "CGR_31.12.2019")
4. Enter **Quarter/Year** (optional, e.g., "2019-20")
5. Enter **Document Link** (PDF URL)
6. Click **"Add Document"**

### Edit Document:
1. Find document in the list
2. Click **"Edit"** button
3. Modify fields
4. Click **"Update Document"**

### Delete Document:
1. Find document in the list
2. Click **"Delete"** button
3. Confirm deletion

## 📊 Data Flow

### CMS → Firebase:
```
CMS Form → investor-cms.js → Firebase Firestore
```

### Investor Page → Display:
```
InvestorRelations.tsx → investorFirebase.ts → Firebase Firestore
↓
Merge with local data (investorData.json)
↓
Display on page
```

## 🎨 Document Structure

### Required Fields:
- **Category**: Select from dropdown
- **Document Title**: Name of the document
- **Document Link**: URL to PDF file

### Optional Fields:
- **Quarter/Year**: For financial documents (e.g., "2019-20", "Q1 2024")

### Example Document:
```json
{
  "head": "CGR_31.12.2019",
  "link": "https://cdn.shopify.com/s/files/.../CGR_31.12.2019.pdf",
  "quarter": "2019-20",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## ✅ Testing

### Test CMS:
1. Login to CMS
2. Switch to "Investor Relations" tab
3. Add a test document
4. Verify it appears in the list
5. Edit the document
6. Delete the document

### Test Investor Page:
1. Visit `/investor-relations`
2. Check if Firebase documents appear
3. Verify local documents still show
4. Test search functionality
5. Test tab switching

## 🔄 Data Merging

The system merges Firebase and local data:

1. **Firebase documents** appear first (newest)
2. **Local documents** (from investorData.json) appear after
3. If Firebase is empty, only local documents show
4. Both sources work together seamlessly

## 📝 Important Notes

1. **Firebase Configuration**: Ensure Firebase credentials are set in `public/firebase-init.js` and `src/lib/firebase.ts`

2. **Authentication**: Only authenticated users can add/edit/delete documents

3. **Public Reading**: Anyone can view investor documents (no auth required)

4. **PDF Links**: Use direct PDF URLs (preferably from CDN)

5. **Categories**: Categories are predefined - cannot add new ones from CMS (modify code to add more)

## 🎯 Future Enhancements

Possible improvements:
- [ ] Add custom categories from CMS
- [ ] Bulk upload documents
- [ ] Document preview in CMS
- [ ] Sort/filter documents in CMS
- [ ] Export data to JSON
- [ ] Document versioning
- [ ] Access analytics

## 🔒 Security

- ✅ Authentication required for CMS access
- ✅ Firestore rules protect write operations
- ✅ Public read access for investor documents
- ✅ Input validation on form submission
- ✅ XSS protection (no script tags allowed)

## 📞 Support

If you face any issues:
1. Check Firebase credentials
2. Verify Firestore rules
3. Check browser console for errors
4. Ensure user is authenticated
5. Verify document structure

---

**Ready to use!** 🎉

Access CMS: `http://localhost:5173/cms.html`
View Investor Page: `http://localhost:5173/investor-relations`
