
function Home() {
    return (
        <>
            <div className="bg-orange-500 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            peça seus medicamentos sem sair de casa!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                               Medicamentos
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://blog.farmadelivery.com.br/wp-content/uploads/2021/11/farmadelivery-farmacia-online-1024x576.jpg.webp"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home