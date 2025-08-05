function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 font-bold
            			   bg-orange-400 text-white'>
            
                <div className="container flex justify-between text-lg">
                    FarmaDelivery

                    <div className='flex gap-4'>
                        Produtos
                        Categoria
                        Cadastrar Categoria
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar