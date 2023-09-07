import { MotoModel } from '../model/MotoModel'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useMoto } from '../data/hooks/useMoto'

export default function Sell() {
    const [selectedImg, setSelectedImg] = useState('')
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<MotoModel>()
    const { addMoto } = useMoto()
    const navigate = useNavigate()

    function handleSave(data: MotoModel) {
        const { marca, model, color, km, documentation, licensing } = data

        addMoto(
            new MotoModel(
                marca,
                model,
                color,
                km,
                documentation,
                licensing,
                selectedImg,
            ),
        )
        resetField('marca')
        resetField('model')
        resetField('km')
        resetField('documentation')
        resetField('licensing')
        navigate('/')
    }

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setSelectedImg(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleSave)}
            className=" w-full min-h-screen h-full
         flex justify-center items-center flex-wrap-reverse py-10"
        >
            <img
                className="w-96 rotate-90 max-sm:hidden hover:-rotate-90 mix-blend-multiply duration-200"
                src="./venda.png"
                alt=""
            />
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-3 font-semibold">
                    Venda de moto
                    <hr />
                </h1>
                <div className="flex flex-col w-60">
                    <label>Marca</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="text"
                        {...register('marca', { required: true })}
                    />
                    {errors.marca?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Modelo/Ano</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="text"
                        {...register('model', { required: true })}
                    />
                    {errors.model?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Cor</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="text"
                        {...register('color', { required: true })}
                    />
                    {errors.documentation?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Km rodado</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="number"
                        {...register('km', { required: true })}
                    />
                    {errors.km?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Documentação</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="text"
                        {...register('documentation', { required: true })}
                    />
                    {errors.documentation?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Licenciamento</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="text"
                        {...register('licensing', { required: true })}
                    />
                    {errors.licensing?.type === 'required' ? (
                        <span className="text-red-700">*Campo obrigatório</span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex flex-col w-60">
                    <label>Imagem</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="file"
                        {...register('img', {
                            required: 'Imagem é obrigatória',
                        })}
                        onChange={handleImageUpload}
                    />
                    {errors.img?.message && (
                        <span className="text-red-700">
                            {errors.img.message}
                        </span>
                    )}
                </div>
                <div className="flex w-full justify-between">
                    <Link to="/">
                        <button
                            type="button"
                            className="bg-white hover:bg-gray-400/10 border-2 border-black rounded-md px-8 py-2 mt-5"
                        >
                            Voltar
                        </button>
                    </Link>
                    <button
                        className="bg-green-400 hover:bg-green-500 px-8 py-2 rounded-md text-white 
                mt-5 "
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
