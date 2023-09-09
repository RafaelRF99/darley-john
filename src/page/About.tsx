import history from '../json/history.json'
import { Link } from 'react-router-dom'

export default function About() {

    return (
        <div className="min-h-screen h-full flex flex-col items-center justify-center px-14 py-8">
            <h1 className='text-center mb-8'>História da empresa</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <h2><strong>Fundada</strong></h2>
                    <p>{history.founded}</p>
                </div>
                <hr className='border-black' />
                <div className='flex flex-col gap-1'>
                    <h2><strong>Reputação</strong></h2>
                    <p>{history.reputation}</p>
                </div>
                <hr className='border-black' />
                <div className='flex flex-col gap-1'>
                    <h2><strong>Missao</strong></h2>
                    <p>{history.quest}</p>
                </div>
            </div>
            <Link to="/">
                <button className='bg-red-400 text-white w-32 mt-7 py-1'>Voltar</button>
            </Link>
        </div>
    );
}
