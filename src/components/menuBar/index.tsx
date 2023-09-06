export default function MenuBar() {
    return (
        <menu className="bg-black/50 w-full h-14 flex items-center">
            <ul className="w-full flex justify-center gap-4 items-center sm:text-xl text-xs ">
                <li className="cursor-pointer text-white hover:text-yellow-200/80">
                    Lançamentos
                </li>
                <p className="select-none">|</p>
                <li className="cursor-pointer text-white hover:text-yellow-200/80">
                    Mais vendidas
                </li>
                <p className="select-none">|</p>
                <li className="cursor-pointer text-white hover:text-yellow-200/80">
                    Geral
                </li>
                <p className="select-none">|</p>
                <li className="cursor-pointer text-white hover:text-yellow-200/80">
                    Suporte
                </li>
            </ul>
        </menu>
    )
}
