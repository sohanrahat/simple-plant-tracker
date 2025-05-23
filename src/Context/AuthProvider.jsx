import { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // local storage to manage flash logout 
    useEffect(() => {
        const storedUser = localStorage.getItem('plantPlanetUser');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                // console.error('Error parsing stored user:', error);
            }
        }
    }, []);

    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Update profile after creating user
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                }).then(() => {
                    return result;
                });
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                if (!result.user.photoURL) {
                    return updateProfile(result.user, {
                        photoURL: "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }).then(() => result);
                }
                return result;
            });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const userObj = {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || '',
                    photoURL: currentUser.photoURL || 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                };

                localStorage.setItem('plantPlanetUser', JSON.stringify(userObj));
                setUser(userObj);
            } else {
                localStorage.removeItem('plantPlanetUser');
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;