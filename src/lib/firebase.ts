// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKfB9TSMBEoZwI21kiZocJhiH8k3OCP7M",
  authDomain: "colabnew-48621.firebaseapp.com",
  projectId: "colabnew-48621",
  storageBucket: "colabnew-48621.firebasestorage.app",
  messagingSenderId: "3293920304",
  appId: "1:3293920304:web:f7d10f6830ea0db22401f5",
  measurementId: "G-9XV6RMRD66"
};

// Check if Firebase is configured
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

// Initialize Firebase only if configured
let app;
let db;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
  }
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  slug?: string;
  content: string;
  image: string;
  category?: string;
  excerpt?: string;
  tags?: string[];
  readTime?: string;
}

// Fetch all blog posts from Firebase
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // If Firebase is not configured, return empty array (will use local fallback)
  if (!isFirebaseConfigured || !db) {
    console.log('Firebase not configured, using local blog posts');
    return [];
  }

  try {
    const blogPostsRef = collection(db, 'blogPosts');
    const q = query(blogPostsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts: BlogPost[] = [];
    querySnapshot.forEach((doc) => {
      posts.push(doc.data() as BlogPost);
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export { db };
