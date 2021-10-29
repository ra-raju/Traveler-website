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
  const [success, setSuccess] = useState('');

  const auth = getAuth();

  //provider
  const googleProvider = new GoogleAuthProvider();

  //registration using email password
  /* const signUpUsingPassword = (name, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          updateUserName(name);
          setError('');
          setSuccess('You Registared Successfully');
        })
        .catch((error) => {
          setError(error.message);
        });
    }; */

  // update user
  /*  const updateUserName = (name) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };
   */
  //  login using password

  /*    const loginUsingPassword = (email, password) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          setSuccess('You Login Successfully');
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
   */
  // login using google

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        setSuccess('You Login Successfully');
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
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
        // An error happened.
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
    success,
  };
};

export default useFirebase;
