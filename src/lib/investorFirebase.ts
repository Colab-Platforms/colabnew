// Firebase integration for Investor Relations
import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export interface InvestorDocument {
  id?: string;
  head: string;
  link: string;
  quarter?: string;
}

export interface InvestorCategory {
  id: number;
  header: string;
  text: InvestorDocument[];
}

// Fetch investor documents from Firebase
export async function fetchInvestorDocuments(): Promise<InvestorCategory[]> {
  if (!db) {
    console.log('Firebase not configured, using local investor data');
    return [];
  }

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

    const result: InvestorCategory[] = [];
    let categoryId = 1;

    for (const categoryName of categories) {
      const docsRef = collection(db, 'investorDocuments', categoryName, 'documents');
      const q = query(docsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);

      const documents: InvestorDocument[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          ...doc.data() as Omit<InvestorDocument, 'id'>
        });
      });

      if (documents.length > 0) {
        result.push({
          id: categoryId++,
          header: categoryName,
          text: documents
        });
      }
    }

    return result;
  } catch (error) {
    console.error('Error fetching investor documents:', error);
    return [];
  }
}
