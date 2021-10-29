import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const auth = getAuth();

  // provider
  const googleProvider = new GoogleAuthProvider();

  const singInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .then((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch((error) => setError(error.message));
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    error,
    singInUsingGoogle,
    logOut,
  };
};
export default useFirebase;
