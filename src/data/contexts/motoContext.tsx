import { createContext, useState, ReactNode } from 'react'
import { MotoModel } from '../../model/MotoModel'

interface motoContextProps {
    motos: MotoModel[]
    addMoto: (moto: MotoModel) => void
}

export const MotoContext = createContext<motoContextProps>(null!)

export default function MotoProvider({ children }: { children: ReactNode }) {
    const [motos, setMotos] = useState<MotoModel[]>([])

    function addMoto(newMoto: MotoModel) {
        setMotos([...motos, newMoto])
    }

    return (
        <MotoContext.Provider value={{ motos, addMoto }}>
            {children}
        </MotoContext.Provider>
    )
}
