import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { firebaseApp } from './firebase';

const auth = getAuth(firebaseApp);

export async function signInWithGoogle(): Promise<UserCredential> {
  const provider = new GoogleAuthProvider();

  return await signInWithPopup(auth, provider);
}

export async function signOutFromApp(): Promise<void> {
  return await signOut(auth);
}
