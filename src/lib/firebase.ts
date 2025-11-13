// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmrjFbHD_h93pastwaDwtVvNyX27EiaIU",
  authDomain: "colab-blog.firebaseapp.com",
  projectId: "colab-blog",
  storageBucket: "colab-blog.firebasestorage.app",
  messagingSenderId: "943366440260",
  appId: "1:943366440260:web:6ec4473cf983962897c311",
  measurementId: "G-2PQ00WE24B"
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
