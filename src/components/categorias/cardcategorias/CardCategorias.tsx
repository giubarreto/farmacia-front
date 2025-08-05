import { Link } from 'react-router-dom'
import type Categoria from '../../../model/Categoria'


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-orange-600 text-white font-bold text-2xl'>
                Categorias
            </header>
            <p className='p-8 text-3xl bg-slate-100 h-full'>{categoria.descricao}</p>

             <p className='p-8 text-3xl bg-slate-100 h-full'>{categoria.nome}</p>
            
            <div className="flex">
                <Link to=''
                    className='w-full text-slate-950  border-orange-500 hover:bg-orange-500 bg-orange-300
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-slate-950 bg-orange-600 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias