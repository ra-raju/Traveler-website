import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  // signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //provider
  const googleProvider = new GoogleAuthProvider();

  // login using google

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    // signUpUsingPassword,
    user,
    signInUsingGoogle,
    error,
    // loginUsingPassword,
    logOut,
    isLoading,
  };
};

export default useFirebase;
