export default function Error() {
    return (
        <div
            className=" w-screen h-screen
        flex justify-center items-center "
        >
            <div
                className="flex flex-col items-center gap-4
             justify-center text-center text-2xl"
            >
                <img className="w-80" src="./error.png" alt="Error 404" />
                <p className="font-semibold">
                    Ops, parece que nada foi encontrado...
                </p>
            </div>
        </div>
    )
}
