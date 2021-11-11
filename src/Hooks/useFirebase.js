// import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
// import initializeAuthentication from "../Components/Login/Firebase/Firebase.init";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   updateProfile,
//   getIdToken,
// } from "firebase/auth";
// import { useEffect, useState } from "react";

// // initialize Firebase App
// initializeAuthentication();

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [authError, setAuthError] = useState("");
//   const [admin, setAdmin] = useState(false);
//   const [token, setToken] = useState("");

//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();

//   const registerUser = (email, password, name, history) => {
//     setIsLoading(true);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setAuthError("");
//         const newUser = { email, displayName: name };
//         setUser(newUser);
//         // save user to database
//         saveUser(email, name, "POST");
//         // send name to firebase after creation
//         updateProfile(auth.currentUser, {
//           displayName: name,
//         })
//           .then(() => {})
//           .catch((error) => {});
//         history.replace("/");
//       })

//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const loginUser = (email, password, location, history) => {
//     setIsLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const destination = location?.state?.from || "/";
//         history.replace(destination);
//         setAuthError("");
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const signInWithGoogle = (location, history) => {
//     setIsLoading(true);

//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         saveUser(user.email, user.displayName, "PUT");
//         setAuthError("");
//         const destination = location?.state?.from || "/";
//         history.replace(destination);
//       })
//       .catch((error) => {
//         setAuthError(error.message);
//       })
//       .finally(() => setIsLoading(false));
//   };
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         getIdToken(user).then((idToken) => {
//           setToken(idToken);
//         });
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribe;
//   }, [auth]);

//   useEffect(() => {
//     fetch(`https://afternoon-wave-02236.herokuapp.com/users/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setAdmin(data.admin));
//   }, [user.email]);

//   const logOut = () => {
//     setIsLoading(true);
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       })
//       .finally(() => setIsLoading(false));
//   };

//   const saveUser = (email, displayName, method) => {
//     const user = { email, displayName };
//     fetch("https://afternoon-wave-02236.herokuapp.com/users", {
//       method: method,
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     }).then();
//   };
//   return {
//     user,
//     admin,
//     token,
//     registerUser,
//     loginUser,
//     isLoading,
//     authError,
//     signInWithGoogle,
//     logOut,
//   };
// };
// export default useFirebase;

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // create user with email and password
  const registerUserEmailAndPassword = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      setSuccess("Email verification sent!");
      setError("");
    });
  };

  // login user email and password
  const loginUserEmailAndPassword = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const password reset
  const passwordResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        //
        setSuccess("Password reset email sent!");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  useEffect(() => {
    fetch(`https://afternoon-wave-02236.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    success,
    error,
    setError,
    setSuccess,
    signInUsingGoogle,
    setName,
    setEmail,
    setPassword,
    setUser,
    registerUserEmailAndPassword,
    updateUser,
    verifyEmail,
    loginUserEmailAndPassword,
    passwordResetEmail,
    isLoading,
    setIsLoading,
    logout,
  };
};

export default useFirebase;
