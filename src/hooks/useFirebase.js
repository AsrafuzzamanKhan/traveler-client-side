import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Home/Login/Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})


            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }
    return {
        signInUsingGoogle,
        user,
        logOut,
        setIsLoading,
        isLoading
    }
}
export default useFirebase;