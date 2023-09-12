import { useForm } from 'react-hook-form'
import { useAuth } from '../../data/hooks/useAuth'
import { useState } from 'react'
import { useAlert } from '../../data/hooks/useAlert'

import GoogleIcon from '@mui/icons-material/Google'

import Pix from '../Pix'
import Alerts from '../Alerts'

interface FormProps {
    close: () => void
}

interface userAuth {
    email: string
    password: string
}

export default function Form(props: FormProps) {
    const { handleAlert } = useAlert()
    const { register, handleSubmit, resetField } = useForm<userAuth>()
    const { handleGoogleSignIn, login, cadastrar, user } = useAuth()

    const [handleUser, setHandleUser] = useState(true)

    function handleSave(data: userAuth) {
        const { email, password } = data
        if (handleUser) {
            login?.(email, password)
        } else {
            cadastrar?.(email, password)
            setHandleUser(true)
            handleAlert(true)
        }
        resetField('email')
        resetField('password')
    }

    return (
        <>
            {!user.uid ? (
                <>
                    <form onSubmit={handleSubmit(handleSave)}>
                        <h1 className="text-center text-2xl">Faça login</h1>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                className="px-2 py-1"
                                placeholder="darley@gmail.com"
                                type="email"
                                autoComplete="username"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Senha</label>
                            <input
                                className="px-2 py-1"
                                placeholder="teste@#123"
                                type="password"
                                autoComplete="current-password"
                                {...register('password')}
                            />
                        </div>
                        {handleUser ? (
                            <>
                                <button className="w-full bg-slate-200 hover:bg-slate-300 py-1 mt-3">
                                    Logar
                                </button>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-full flex justify-center items-center gap-1
                 bg-red-500 hover:bg-red-600 text-white
             py-1 mt-1"
                                >
                                    <GoogleIcon fontSize="small" /> Google
                                </button>
                            </>
                        ) : (
                            <button className="w-full bg-slate-200 hover:bg-slate-300 py-1 mt-3">
                                Cadastrar-se
                            </button>
                        )}
                        {handleUser ? (
                            <span
                                className="text-blue-700 text-sm cursor-pointer"
                                onClick={() => setHandleUser(!handleUser)}
                            >
                                Ainda não tem conta...
                            </span>
                        ) : (
                            <span
                                className="text-blue-700 text-sm cursor-pointer"
                                onClick={() => setHandleUser(!handleUser)}
                            >
                                Já tem conta?
                            </span>
                        )}
                    </form>
                </>
            ) : (
                <Pix />
            )}
            <Alerts msg="Conta cadastrada!" severity="success" />
            <button
                className="w-full bg-red-200 hover:bg-red-300 py-1 mt-3"
                onClick={props.close}
            >
                Voltar
            </button>
        </>
    )
}
