import MenuBar from '../menuBar'

export default function Banner() {
    return (
        <div
            className=" relative
        w-full h-64 flex flex-col items-center justify-center gap-4
        bg-[url('/background.png')] bg-center bg-no-repeat bg-zinc-950 
        text-indigo-50/50 select-none"
        >
            <h1 className="text-6xl">Darley John</h1>
            <p className="text-xl">Venda sua moto custom aqui!</p>
            <div className="absolute bottom-0 w-full">
                <MenuBar />
            </div>
        </div>
    )
}
