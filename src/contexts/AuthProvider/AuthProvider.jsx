import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
export const authContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const ProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
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

    const authInfo = { user, ProviderLogin, logOut }
    return (
        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;