// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHyQvjjHK5L7M_eeRzCIl8KnSFWBZUyyE",
  authDomain: "colabnew-8d474.firebaseapp.com",
  projectId: "colabnew-8d474",
  storageBucket: "colabnew-8d474.firebasestorage.app",
  messagingSenderId: "1061842493012",
  appId: "1:1061842493012:web:551e3fd12d228ae4b6d7c1",
  measurementId: "G-42MXHKXMMQ"
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

// Fetch all blog posts from Firebase (one-time fetch)
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

// Subscribe to real-time blog post updates
export function subscribeToBlogPosts(callback: (posts: BlogPost[]) => void): () => void {
  if (!isFirebaseConfigured || !db) {
    console.log('Firebase not configured, cannot subscribe to real-time updates');
    return () => {};
  }

  try {
    const blogPostsRef = collection(db, 'blogPosts');
    const q = query(blogPostsRef, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data() as BlogPost);
      });
      callback(posts);
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error subscribing to blog posts:', error);
    return () => {};
  }
}

export { db };
