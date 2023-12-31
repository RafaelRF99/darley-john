import { MotoModel } from '../model/MotoModel'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useMoto } from '../data/hooks/useMoto'
import { useAlert } from '../data/hooks/useAlert'

export default function Sell() {
    const { addMoto } = useMoto()
    const { handleAlert } = useAlert()

    const [selectedImg, setSelectedImg] = useState('')
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<MotoModel>()
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
        handleAlert(true)
        resetField('marca')
        resetField('model')
        resetField('color')
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
         flex justify-center gap-20 items-center flex-wrap py-10"
        >
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl mb-3 font-semibold">
                    Venda de moto
                    <hr />
                </h1>
                <div className="sm:flex gap-4">
                    <div className="flex flex-col w-60">
                        <label>Marca</label>
                        <input
                            className="px-3 py-1 mt-1 rounded-md"
                            type="text"
                            {...register('marca', { required: true })}
                        />
                        {errors.marca?.type === 'required' ? (
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
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
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="sm:flex gap-4">
                    <div className="flex flex-col w-60">
                        <label>Cor</label>
                        <input
                            className="px-3 py-1 mt-1 rounded-md"
                            type="text"
                            {...register('color', { required: true })}
                        />
                        {errors.documentation?.type === 'required' ? (
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
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
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="sm:flex gap-4">
                    <div className="flex flex-col w-60">
                        <label>Documentação</label>
                        <input
                            className="px-3 py-1 mt-1 rounded-md"
                            type="text"
                            {...register('documentation', { required: true })}
                        />
                        {errors.documentation?.type === 'required' ? (
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
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
                            <span className="text-red-700">
                                *Campo obrigatório
                            </span>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:w-full w-60">
                    <label>Imagem</label>
                    <input
                        className="px-3 py-1 mt-1 rounded-md"
                        type="file"
                        placeholder=""
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
                <div className="flex w-full sm:justify-end sm:gap-8 justify-between">
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
            <img
                className="max-w-xs md:rotate-90 rotate-0 max-lg:hidden hover:-rotate-0
                 mix-blend-multiply duration-700 hover:scale-125"
                src="./venda.png"
                alt=""
            />
        </form>
    )
}
