import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 font-bold
            			   bg-orange-400 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">FarmaDelivery</Link>

                    <div className='flex gap-4'>
                         Produtos
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        Cadastrar Categoria
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar