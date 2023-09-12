import QRCode from 'react-qr-code'

export default function Pix() {
    const pixData = {
        key: '46125341828',
        name: 'Rafael Ferreira',
        city: 'Indaiatuba',
        amount: '',
        description: 'x-x',
    }

    const pixString = `PIX:br.gov.bcb.pix/${
        pixData.key
    }?name=${encodeURIComponent(pixData.name)}&city=${encodeURIComponent(
        pixData.city,
    )}&amount=${encodeURIComponent(pixData.amount)}&txid=${Math.random()
        .toString(36)
        .substr(2, 10)}&description=${encodeURIComponent(pixData.description)}`

    return (
        <div className="flex flex-col items-center pt-7">
            <div className="p-5 border-dashed border-2 border-gray-300 rounded-md">
                <QRCode value={pixString} size={250} />
            </div>
            <div className="mt-5">
                <p>Chave Pix: {pixData.key}</p>
                <p>Nome: {pixData.name}</p>
                <p>Tipo: CPF</p>
                <p className="text-red-600 pt-7">***Pix auxilio***</p>
            </div>
        </div>
    )
}
