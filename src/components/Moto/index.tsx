import { MotoModel } from '../../model/MotoModel'

interface MotoProps {
    moto: MotoModel
}

export default function Moto(props: MotoProps) {
    const moto = props.moto
    return (
        <div className="flex cursor-pointer">
            <div
                className="flex flex-col p-5 
              bg-white rounded-md shadow-lg"
            >
                <h1 className="text-4xl text-center mb-2 font-semibold">
                    {moto.model}
                </h1>
                <img className="w-72 h-40 rounded-md" src={moto.img} alt="FOTO" />
                <div className="mt-4">
                    <p className="text-center">
                        <strong>Informações</strong>
                    </p>
                    <div>
                        <p>Marca: {moto.marca}</p>
                        <p>Cor: {moto.color}</p>
                        <p>Km rodado: {moto.km}Km</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
