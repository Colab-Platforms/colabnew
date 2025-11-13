// Investor CMS JavaScript

let currentInvestorEditId = null;
let currentInvestorCategory = null;

// DOM Elements
const investorSection = document.getElementById('investor-section');
const manageInvestorSection = document.getElementById('manage-investor-section');
const submitInvestorBtn = document.getElementById('submit-investor-btn');
const cancelInvestorEditBtn = document.getElementById('cancel-investor-edit-btn');
const investorMessage = document.getElementById('investor-message');

const investorCategorySelect = document.getElementById('investor-category');
const docTitleInput = document.getElementById('doc-title');
const docQuarterInput = document.getElementById('doc-quarter');
const docLinkInput = document.getElementById('doc-link');

// Show message function
function showInvestorMessage(message, type) {
  investorMessage.textContent = message;
  investorMessage.className = `message ${type}`;
  investorMessage.classList.remove('hidden');
  setTimeout(() => {
    investorMessage.classList.add('hidden');
  }, 5000);
}

// Submit investor document
submitInvestorBtn.addEventListener('click', async () => {
  const category = investorCategorySelect.value.trim();
  const title = docTitleInput.value.trim();
  const quarter = docQuarterInput.value.trim();
  const link = docLinkInput.value.trim();

  if (!category || !title || !link) {
    showInvestorMessage('Please fill in all required fields', 'error');
    return;
  }

  const document = {
    head: title,
    link: link,
    quarter: quarter || null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    if (currentInvestorEditId && currentInvestorCategory) {
      // Update existing document
      await db.collection('investorDocuments')
        .doc(currentInvestorCategory)
        .collection('documents')
        .doc(currentInvestorEditId)
        .update({
          ...document,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      showInvestorMessage('Document updated successfully!', 'success');
      currentInvestorEditId = null;
      currentInvestorCategory = null;
      cancelInvestorEditBtn.classList.add('hidden');
      submitInvestorBtn.textContent = 'Add Document';
    } else {
      // Add new document
      await db.collection('investorDocuments')
        .doc(category)
        .collection('documents')
        .add(document);
      showInvestorMessage('Document added successfully!', 'success');
    }
    
    clearInvestorForm();
    loadInvestorDocuments();
  } catch (error) {
    showInvestorMessage(`Error: ${error.message}`, 'error');
  }
});

// Cancel edit
cancelInvestorEditBtn.addEventListener('click', () => {
  currentInvestorEditId = null;
  currentInvestorCategory = null;
  clearInvestorForm();
  cancelInvestorEditBtn.classList.add('hidden');
  submitInvestorBtn.textContent = 'Add Document';
});

// Clear form
function clearInvestorForm() {
  investorCategorySelect.value = '';
  docTitleInput.value = '';
  docQuarterInput.value = '';
  docLinkInput.value = '';
}

// Load investor documents
async function loadInvestorDocuments() {
  const investorDocsList = document.getElementById('investor-docs-list');
  investorDocsList.innerHTML = '<p>Loading documents...</p>';

  try {
    const categories = [
      'Corporate Governance',
      'Shareholding Pattern',
      'Statement of Investor Complaints',
      'Reconciliation of Share Capital Audit',
      'Certificate From RTA',
      'Compliance Certificate',
      'Annual Report',
      'Financial Results',
      'Policies',
      'Newspaper Intimation',
      'Trading Window Closure',
      'Voting Results',
      'Press-Release',
      'Appointment / Resignation Letter',
      'BM Intimation',
      'BM Outcome',
      'Corporate Announcements',
      'Notice to shareholders',
      'Annual Return',
      'Book Closure',
      'Moa & Aoa',
      'Proceeding to General Meeting',
      'Secretarial Compliance Report',
      'Integrated Governance',
      'Dividend',
      'Larger Corporate'
    ];

    investorDocsList.innerHTML = '';
    
    for (const category of categories) {
      const snapshot = await db.collection('investorDocuments')
        .doc(category)
        .collection('documents')
        .orderBy('createdAt', 'desc')
        .get();

      if (!snapshot.empty) {
        const categoryDiv = document.createElement('div');
        categoryDiv.style.marginBottom = '30px';
        
        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;
        categoryHeader.style.color = '#D04713';
        categoryHeader.style.marginBottom = '15px';
        categoryDiv.appendChild(categoryHeader);

        snapshot.forEach(doc => {
          const docData = doc.data();
          const docElement = createInvestorDocElement(doc.id, category, docData);
          categoryDiv.appendChild(docElement);
        });

        investorDocsList.appendChild(categoryDiv);
      }
    }

    if (investorDocsList.innerHTML === '') {
      investorDocsList.innerHTML = '<p>No documents found.</p>';
    }
  } catch (error) {
    investorDocsList.innerHTML = `<p class="error">Error loading documents: ${error.message}</p>`;
  }
}

// Create investor document element
function createInvestorDocElement(id, category, docData) {
  const div = document.createElement('div');
  div.className = 'blog-post-item';
  
  div.innerHTML = `
    <h3>${docData.head}</h3>
    <p><strong>Category:</strong> ${category}</p>
    ${docData.quarter ? `<p><strong>Quarter:</strong> ${docData.quarter}</p>` : ''}
    <p><strong>Link:</strong> <a href="${docData.link}" target="_blank" style="color: #D04713;">View Document</a></p>
    <div class="actions">
      <button class="edit-btn" onclick="editInvestorDoc('${id}', '${category}')">Edit</button>
      <button class="delete-btn" onclick="deleteInvestorDoc('${id}', '${category}')">Delete</button>
    </div>
  `;
  
  return div;
}

// Edit investor document
window.editInvestorDoc = async function(id, category) {
  try {
    const doc = await db.collection('investorDocuments')
      .doc(category)
      .collection('documents')
      .doc(id)
      .get();
      
    if (!doc.exists) {
      showInvestorMessage('Document not found', 'error');
      return;
    }

    const docData = doc.data();
    currentInvestorEditId = id;
    currentInvestorCategory = category;
    
    investorCategorySelect.value = category;
    docTitleInput.value = docData.head;
    docQuarterInput.value = docData.quarter || '';
    docLinkInput.value = docData.link;
    
    submitInvestorBtn.textContent = 'Update Document';
    cancelInvestorEditBtn.classList.remove('hidden');
    
    // Scroll to form
    investorSection.scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    showInvestorMessage(`Error loading document: ${error.message}`, 'error');
  }
};

// Delete investor document
window.deleteInvestorDoc = async function(id, category) {
  if (!confirm('Are you sure you want to delete this document?')) {
    return;
  }

  try {
    await db.collection('investorDocuments')
      .doc(category)
      .collection('documents')
      .doc(id)
      .delete();
    showInvestorMessage('Document deleted successfully!', 'success');
    loadInvestorDocuments();
  } catch (error) {
    showInvestorMessage(`Error deleting document: ${error.message}`, 'error');
  }
};

// Initialize investor section when authenticated
function initializeInvestorSection() {
  if (auth.currentUser) {
    loadInvestorDocuments();
  }
}

// Call this when user logs in
auth.onAuthStateChanged(user => {
  if (user) {
    initializeInvestorSection();
  }
});
