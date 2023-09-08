import { Link } from 'react-router-dom'

export default function Suporte() {
    return (
        <div className="py-5">
            <h1 className="text-center">Contate-nos</h1>
            <form className="flex justify-center">
                <div className="w-full mx-10 sm:max-w-lg flex flex-col gap-3 py-6">
                    <div className="flex flex-col">
                        <label className="font-semibold">Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome..."
                            className="px-2 py-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold">Descrição</label>
                        <textarea
                            style={{ resize: 'none' }}
                            className="shadow-md px-3 py-2 h-56"
                            placeholder="Digite aqui..."
                        />
                    </div>
                    <button
                        className="w-full
                    bg-green-300 hover:bg-green-400 
                    py-2 cursor-pointer"
                    >
                        Enviar
                    </button>
                    <Link to="/">
                        <button
                            className="w-full
                      bg-red-200 hover:bg-red-400 
                        py-2 cursor-pointer"
                            type="button"
                        >
                            Voltar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
