
import Link from 'next/link';
import React from 'react';
import { Color } from '../../../../helpers/types';



type Props = Color & {
    remove: (id: number) => void
};

export default function ColorCard({
    id,
    name,
    abbreviation,
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
                <p className="text-gray-700 text-sm truncate">{abbreviation}</p>

                <p className="flex justify-end text-gray-700 text-xs truncate">
                    <Link href="/store/colors/[id]/edit" as={`/loja/colors/${id}/edit`} >
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