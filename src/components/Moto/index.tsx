export default function Moto() {
    return (
        <div className="flex">
            <div
                className="flex flex-col p-5 
              bg-white rounded-md shadow-lg"
            >
                <h1 className="text-4xl text-center mb-2 font-semibold">
                    XXXXXX
                </h1>
                <img
                    className="w-80 rounded-md"
                    src="https://www.motorede.com.br/wp-content/uploads/2013/11/HarleyDavidson-Street-500-e-Street-750-01.jpg"
                    alt="FOTO"
                />
                <div className="mt-4">
                    <p className="text-center">
                        <strong>Informações</strong>
                    </p>
                    <div>
                        <p>Cor: XXXX</p>
                        <p>Km rodado: XXXXKm</p>
                        <p>Documentação: XXXX</p>
                        <p>Licenciamento: XXXX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
