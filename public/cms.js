// CMS JavaScript for Blog Management

let currentEditId = null;

// DOM Elements
const authSection = document.getElementById('auth-section');
const blogSection = document.getElementById('blog-section');
const manageBlogsSection = document.getElementById('manage-blogs-section');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const submitBlogBtn = document.getElementById('submit-blog-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const authMessage = document.getElementById('auth-message');
const blogMessage = document.getElementById('blog-message');

// Input fields
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const blogTitleInput = document.getElementById('blog-title');
const blogAuthorInput = document.getElementById('blog-author');
const blogDateInput = document.getElementById('blog-date');
const blogImageUrlInput = document.getElementById('blog-image-url');
const blogContentInput = document.getElementById('blog-content');

// Formatting buttons
const formattingButtons = document.querySelectorAll('.formatting-buttons button');
formattingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tag = button.getAttribute('data-tag');
    insertTag(tag);
  });
});

function insertTag(tag) {
  const textarea = blogContentInput;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  
  let replacement = '';
  
  if (tag === 'ul' || tag === 'ol') {
    replacement = `<${tag}>\n  <li>${selectedText || 'List item'}</li>\n</${tag}>`;
  } else {
    replacement = `<${tag}>${selectedText || 'Text here'}</${tag}>`;
  }
  
  textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + replacement.length;
}

// Show message function
function showMessage(element, message, type) {
  element.textContent = message;
  element.className = `message ${type}`;
  element.classList.remove('hidden');
  setTimeout(() => {
    element.classList.add('hidden');
  }, 5000);
}

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Login
loginBtn.addEventListener('click', async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showMessage(authMessage, 'Please enter email and password', 'error');
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
    showMessage(authMessage, 'Login successful!', 'success');
    authSection.classList.add('hidden');
    blogSection.classList.remove('hidden');
    manageBlogsSection.classList.remove('hidden');
    loadBlogPosts();
  } catch (error) {
    showMessage(authMessage, `Login failed: ${error.message}`, 'error');
  }
});

// Logout
logoutBtn.addEventListener('click', async () => {
  try {
    await auth.signOut();
    authSection.classList.remove('hidden');
    blogSection.classList.add('hidden');
    manageBlogsSection.classList.add('hidden');
    clearForm();
  } catch (error) {
    showMessage(blogMessage, `Logout failed: ${error.message}`, 'error');
  }
});

// Submit blog post
submitBlogBtn.addEventListener('click', async () => {
  const title = blogTitleInput.value.trim();
  const author = blogAuthorInput.value.trim();
  const date = blogDateInput.value.trim();
  const imageUrl = blogImageUrlInput.value.trim();
  const content = blogContentInput.value.trim();

  if (!title || !author || !date || !imageUrl || !content) {
    showMessage(blogMessage, 'Please fill in all fields', 'error');
    return;
  }

  const slug = generateSlug(title);
  
  const blogPost = {
    title,
    author,
    date,
    slug,
    image: imageUrl,
    content,
    category: 'General',
    excerpt: content.substring(0, 150).replace(/<[^>]*>/g, '') + '...',
    tags: [],
    readTime: Math.ceil(content.split(' ').length / 200) + ' min read',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    if (currentEditId) {
      // Update existing post
      await db.collection('blogPosts').doc(currentEditId).update({
        ...blogPost,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showMessage(blogMessage, 'Blog post updated successfully!', 'success');
      currentEditId = null;
      cancelEditBtn.classList.add('hidden');
      submitBlogBtn.textContent = 'Submit Blog Post';
    } else {
      // Create new post
      await db.collection('blogPosts').add(blogPost);
      showMessage(blogMessage, 'Blog post created successfully!', 'success');
    }
    
    clearForm();
    loadBlogPosts();
  } catch (error) {
    showMessage(blogMessage, `Error: ${error.message}`, 'error');
  }
});

// Cancel edit
cancelEditBtn.addEventListener('click', () => {
  currentEditId = null;
  clearForm();
  cancelEditBtn.classList.add('hidden');
  submitBlogBtn.textContent = 'Submit Blog Post';
});

// Clear form
function clearForm() {
  blogTitleInput.value = '';
  blogAuthorInput.value = '';
  blogDateInput.value = '';
  blogImageUrlInput.value = '';
  blogContentInput.value = '';
}

// Load blog posts
async function loadBlogPosts() {
  const blogPostsList = document.getElementById('blog-posts-list');
  blogPostsList.innerHTML = '<p>Loading blog posts...</p>';

  try {
    const snapshot = await db.collection('blogPosts')
      .orderBy('createdAt', 'desc')
      .get();

    if (snapshot.empty) {
      blogPostsList.innerHTML = '<p>No blog posts found.</p>';
      return;
    }

    blogPostsList.innerHTML = '';
    
    snapshot.forEach(doc => {
      const post = doc.data();
      const postElement = createBlogPostElement(doc.id, post);
      blogPostsList.appendChild(postElement);
    });
  } catch (error) {
    blogPostsList.innerHTML = `<p class="error">Error loading posts: ${error.message}</p>`;
  }
}

// Create blog post element
function createBlogPostElement(id, post) {
  const div = document.createElement('div');
  div.className = 'blog-post-item';
  
  div.innerHTML = `
    <h3>${post.title}</h3>
    <p><strong>Author:</strong> ${post.author} | <strong>Date:</strong> ${post.date}</p>
    <p><strong>Slug:</strong> ${post.slug}</p>
    <div class="actions">
      <button class="edit-btn" onclick="editPost('${id}')">Edit</button>
      <button class="delete-btn" onclick="deletePost('${id}')">Delete</button>
    </div>
  `;
  
  return div;
}

// Edit post
window.editPost = async function(id) {
  try {
    const doc = await db.collection('blogPosts').doc(id).get();
    if (!doc.exists) {
      showMessage(blogMessage, 'Post not found', 'error');
      return;
    }

    const post = doc.data();
    currentEditId = id;
    
    blogTitleInput.value = post.title;
    blogAuthorInput.value = post.author;
    blogDateInput.value = post.date;
    blogImageUrlInput.value = post.image;
    blogContentInput.value = post.content;
    
    submitBlogBtn.textContent = 'Update Blog Post';
    cancelEditBtn.classList.remove('hidden');
    
    // Scroll to form
    blogSection.scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    showMessage(blogMessage, `Error loading post: ${error.message}`, 'error');
  }
};

// Delete post
window.deletePost = async function(id) {
  if (!confirm('Are you sure you want to delete this blog post?')) {
    return;
  }

  try {
    await db.collection('blogPosts').doc(id).delete();
    showMessage(blogMessage, 'Blog post deleted successfully!', 'success');
    loadBlogPosts();
  } catch (error) {
    showMessage(blogMessage, `Error deleting post: ${error.message}`, 'error');
  }
};

// Check auth state
auth.onAuthStateChanged(user => {
  if (user) {
    authSection.classList.add('hidden');
    blogSection.classList.remove('hidden');
    manageBlogsSection.classList.remove('hidden');
    loadBlogPosts();
  } else {
    authSection.classList.remove('hidden');
    blogSection.classList.add('hidden');
    manageBlogsSection.classList.add('hidden');
  }
});


// Tab Switching Functionality
const cmsTabs = document.getElementById('cms-tabs');
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');
    
    // Update active tab
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Get sections
    const investorSec = document.getElementById('investor-section');
    const manageInvestorSec = document.getElementById('manage-investor-section');
    
    // Show/hide sections
    if (tab === 'blog') {
      blogSection.classList.remove('hidden');
      manageBlogsSection.classList.remove('hidden');
      investorSec.classList.add('hidden');
      manageInvestorSec.classList.add('hidden');
    } else if (tab === 'investor') {
      blogSection.classList.add('hidden');
      manageBlogsSection.classList.add('hidden');
      investorSec.classList.remove('hidden');
      manageInvestorSec.classList.remove('hidden');
    }
  });
});

// Show tabs when logged in
auth.onAuthStateChanged(user => {
  if (user) {
    cmsTabs.classList.remove('hidden');
    cmsTabs.style.display = 'flex';
  } else {
    cmsTabs.classList.add('hidden');
  }
});
