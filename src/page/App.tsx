import { useMoto } from '../data/hooks/useMoto'

import { useState } from 'react'

import Banner from '../components/Banner'
import Moto from '../components/Moto'
import BuyModal from '../components/BuyModal'
import { MotoModel } from '../model/MotoModel'

export default function App() {
    const { motos } = useMoto()

    const [open, setOpen] = useState(false);
    const [handleMoto, setHandleMoto] = useState<MotoModel | null>(null)

    const handleOpen = (moto: MotoModel) => {
        setOpen(true);
        setHandleMoto(moto)
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main className="min-h-screen h-full">
            <Banner />
            <div
                className="flex flex-wrap justify-center
            gap-6 p-5"
            >
                {motos.map((moto, i) => {
                    return (
                        <div key={i} onClick={() => handleOpen(moto)}>
                            <Moto moto={moto} />
                        </div>
                    )
                })}
            </div>
            <BuyModal moto={handleMoto} status={open} handleClose={handleClose} />
        </main>
    )
}
