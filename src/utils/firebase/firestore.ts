import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  DocumentData,
  collection,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp);

export async function setDocument(
  collectionName: string,
  document: any,
  pathSegments: string[] = []
) {
  return await setDoc(doc(db, collectionName, ...pathSegments), {
    ...document,
  });
}

export async function getDocument(
  collectionName: string,
  documentId: string,
  pathSegments: string[] = []
): Promise<DocumentData | undefined> {
  const docRef = doc(db, collectionName, documentId, ...pathSegments);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function getDocuments(
  collectionName: string,
  pathSegments: string[] = []
): Promise<any[]> {
  const querySnapshot = await getDocs(
    collection(db, collectionName, ...pathSegments)
  );

  return querySnapshot.docs.map((doc) => doc.data());
}

export async function deleteDocument(
  collectionName: string,
  pathSegments: string[] = []
): Promise<void> {
  return await deleteDoc(doc(db, collectionName, ...pathSegments));
}
