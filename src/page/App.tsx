import { useMoto } from '../data/hooks/useMoto'

import Banner from '../components/Banner'
import Moto from '../components/Moto'

export default function App() {
    const { motos } = useMoto()

    return (
        <main className="min-h-screen h-full">
            <Banner />
            <div
                className="flex flex-wrap justify-center
            gap-6 p-5"
            >
                {motos.map((moto, i) => {
                    return <Moto key={i} moto={moto} />
                })}
            </div>
        </main>
    )
}
