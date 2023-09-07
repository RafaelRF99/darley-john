import { createContext, useState, useEffect, ReactNode } from 'react'
import { MotoModel } from '../../model/MotoModel'

interface motoContextProps {
    motos: MotoModel[]
    addMoto: (moto: MotoModel) => void
}

export const MotoContext = createContext<motoContextProps>(null!)

export default function MotoProvider({ children }: { children: ReactNode }) {
    const [motos, setMotos] = useState<MotoModel[]>([])

    useEffect(() => {
        const savedMotosJSON = localStorage.getItem('motos')
        if (savedMotosJSON) {
            const savedMotosArray = JSON.parse(savedMotosJSON)
            const newMotos = savedMotosArray.map((json: MotoModel) =>
                MotoModel.fromJSON(json),
            )
            setMotos((prevMotos) => [...prevMotos, ...newMotos])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(
            'motos',
            JSON.stringify(motos.map((moto) => moto.toJSON())),
        )
    }, [motos])

    function addMoto(newMoto: MotoModel) {
        setMotos([...motos, newMoto])
    }

    return (
        <MotoContext.Provider value={{ motos, addMoto }}>
            {children}
        </MotoContext.Provider>
    )
}
