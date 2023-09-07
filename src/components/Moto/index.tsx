import { MotoModel } from '../../model/MotoModel'

interface MotoProps {
    moto: MotoModel
}

export default function Moto(props: MotoProps) {
    const moto = props.moto
    return (
        <div className="flex">
            <div
                className="flex flex-col p-5 
              bg-white rounded-md shadow-lg"
            >
                <h1 className="text-4xl text-center mb-2 font-semibold">
                    {moto.marca}
                </h1>
                <img className="w-72 rounded-md" src={moto.img} alt="FOTO" />
                <div className="mt-4">
                    <p className="text-center">
                        <strong>Informações</strong>
                    </p>
                    <div>
                        <p>Cor: {moto.color}</p>
                        <p>Modelo/Ano: {moto.model}</p>
                        <p>Km rodado: {moto.km}Km</p>
                        <p>Documentação: {moto.documentation}</p>
                        <p>Licenciamento: {moto.licensing}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
