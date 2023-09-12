import { useForm } from 'react-hook-form'
import { useAuth } from '../../data/hooks/useAuth'
import { useState } from 'react'

import GoogleIcon from '@mui/icons-material/Google'

export default function Form() {
    const { register, handleSubmit, resetField } = useForm()
    const { handleGoogleSignIn, login, cadastrar, user } = useAuth()

    const [handleUser, setHandleUser] = useState(true)

    function handleSave(data: any) {
        const { email, password } = data
        if (handleUser) {
            login?.(email, password)
        } else {
            cadastrar?.(email, password)
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
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Senha</label>
                            <input
                                className="px-2 py-1"
                                placeholder="teste@#123"
                                type="password"
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
                <div className="text-center">
                    <h2 className="bg-yellow-400 text-white py-1">
                        Você está logado!
                    </h2>
                    <br />
                    <p>Volte e continue!</p>
                </div>
            )}
        </>
    )
}
