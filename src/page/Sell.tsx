import { useForm } from 'react-hook-form'
import { MotoModel } from '../model/MotoModel'

export default function Sell() {
    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<MotoModel>()

    function handleSave(data: MotoModel) {
        console.log(data)
        resetField('marca')
        resetField('modelo')
        resetField('km')
        resetField('documentation')
        resetField('licensing')
    }

    return (
        <form
            onSubmit={handleSubmit(handleSave)}
            className=" w-full min-h-screen h-full
         flex justify-center items-center flex-wrap-reverse py-10"
        >
            <img
                className="w-96 rotate-90 max-sm:hidden"
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
                        {...register('modelo', { required: true })}
                    />
                    {errors.modelo?.type === 'required' ? (
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
                <button
                    className="bg-green-400 hover:bg-green-500 px-8 py-2 rounded-md text-white 
                mt-5 "
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}