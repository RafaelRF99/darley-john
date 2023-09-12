import { createContext, useState, ReactNode } from 'react'

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    User,
} from 'firebase/auth'

import { auth } from '../../services/firebase'

interface authContextProps {
    login: (email: string, password: string) => void
    cadastrar?: (email: string, password: string) => Promise<void>
    handleGoogleSignIn: () => void
    user: User
    loading: boolean
}

export const AuthContext = createContext<authContextProps>(null!)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>({} as User)
    const [loading, setLoading] = useState(false)

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log('Sucesso!')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function login(email: string, password: string) {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    console.log(loading)

    async function cadastrar(email: string, password: string) {
        try {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{ handleGoogleSignIn, user, cadastrar, login, loading }}
        >
            {children}
        </AuthContext.Provider>
    )
}
