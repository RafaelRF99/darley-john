import { createContext, useState, ReactNode } from 'react'

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase'

interface authContextProps {
    handleGoogleSignIn: () => void
    user: User
}

export const AuthContext = createContext<authContextProps>(null!)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>({} as User)

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <AuthContext.Provider value={{ handleGoogleSignIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}
