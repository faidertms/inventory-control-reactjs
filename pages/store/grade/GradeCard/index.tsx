
import Link from 'next/link';
import React from 'react';
import { Product } from '../../../../helpers/types';



type Props = Product & {
    remove: (id: number) => void
};

export default function ProdutoCard({
    id,
    code,
    name,
    description,
    remove
}: Props): JSX.Element {
    /**
     * children no conteudo
     * href e as
     * remove
     */
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xs bg-white max-h-60 max">
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-1 truncate">{name}</div>
                <p className="text-gray-700 text-sm truncate">{code}</p>
                <p className="text-gray-700 text-xs truncate">{description}</p>

                <p className="flex justify-end text-gray-700 text-xs truncate">
                    <Link href="/loja/produtos/[id]/edit" as={`/loja/produtos/${id}/edit`} >
                        <a className="hover:bg-blue-100 font-semibold px-4 border border-gray-400 rounded shadow mr-2">
                            Editar
                        </a>
                    </Link>

                    <button className="hover:bg-blue-100 font-semibold px-4 border border-gray-400 rounded shadow mr-2" onClick={() => remove(id)}>
                        Deletar
                    </button>
                </p>
            </div>
        </div>
    )
}