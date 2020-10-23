
import Link from 'next/link';
import React from 'react';
import { Filial } from '../../../../helpers/types';



type Props = Filial & {
    removeFilial: (id: number) => void
};

export default function FilialCard({
    id,
    trade_name,
    company_name,
    address,
    address_number,
    area,
    zip_code,
    city,
    state,
    phone,
    removeFilial
}: Props): JSX.Element {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xs bg-white h-40">
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-1 truncate">{trade_name}</div>
                <p className="text-gray-700 text-sm truncate">{company_name}</p>
                <p className="text-gray-700 text-xs truncate">{`${address}, ${address_number} - ${area}`}</p>
                <p className="text-gray-700 text-xs truncate">{`${city} - ${state}, ${zip_code}`}</p>
                <p className="text-gray-700 text-xs truncate">{phone}</p>

                <p className="flex justify-end text-gray-700 text-xs truncate">
                    <Link href="/loja/filiais/[id]/edit" as={`/loja/filiais/${id}/edit`} >
                        <a className="hover:bg-blue-100 font-semibold px-4 border border-gray-400 rounded shadow mr-2">
                            Editar
                        </a>
                    </Link>

                    <button className="hover:bg-blue-100 font-semibold px-4 border border-gray-400 rounded shadow mr-2" onClick={() => removeFilial(id)}>
                        Deletar
                    </button>
                </p>
            </div>
        </div>
    )
}