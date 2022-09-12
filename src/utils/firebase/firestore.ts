import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  DocumentData,
} from 'firebase/firestore';

import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp);

export async function addDocument(
  collectionName: string,
  document: any,
  ownerId: string
) {
  await setDoc(doc(db, collectionName, ownerId), { ...document });
}

export async function getDocument(
  collectionName: string,
  documentId: string
): Promise<DocumentData | undefined> {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}
