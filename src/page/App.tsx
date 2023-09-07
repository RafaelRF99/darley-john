import Banner from '../components/Banner'
import Moto from '../components/Moto'
import { useMoto } from '../data/hooks/useMoto'

export default function App() {
    const { motos } = useMoto()

    return (
        <main>
            <Banner />
            {motos.map((moto, i) => {
                return <Moto key={i} moto={moto} />
            })}
        </main>
    )
}
