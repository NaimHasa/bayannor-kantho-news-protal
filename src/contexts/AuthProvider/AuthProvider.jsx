import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const authContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const ProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('set inside ', currentUser)
            setUser(currentUser);

        })
        return () => {
            unsubcribe();
        }

    }, [])

    const authInfo = { user, ProviderLogin, logOut, createUser, userSignIn }
    return (
        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;