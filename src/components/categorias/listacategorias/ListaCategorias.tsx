import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categoria from "../../../model/Categoria";
import { buscar } from "../../../services/Services";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from "react-loader-spinner";

function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])



    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias
            )
        } catch (error: any) {
            if (error.toString().includes('403')) {
            }
        }
    }
    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;