import { useForm } from 'react-hook-form'
import { useAuth } from '../../data/hooks/useAuth'
import { useState } from 'react'
import { useAlert } from '../../data/hooks/useAlert'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
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
    const { handleGoogleSignIn, login, cadastrar, user, loading } = useAuth()

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

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
                                {loading ? (
                                    <button className="w-full bg-slate-200 hover:bg-slate-300 py-1 mt-3">
                                        <Spin indicator={antIcon} />
                                    </button>
                                ) : (
                                    <button className="w-full bg-slate-200 hover:bg-slate-300 py-1 mt-3">
                                        Logar
                                    </button>
                                )}
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
                className="absolute top-0 max-sm:right-7 right-3
                w-7 h-7 flex justify-center items-center
                bg-red-400 hover:bg-red-500 text-white 
                rounded-sm py-1 mt-3"
                onClick={props.close}
            >
                X
            </button>
        </>
    )
}
