
import React from 'react';

type Props = {
    trade_name: string,
    company_name: string,
    address: string,
    address_number: string,
    area: string,
    zip_code: string,
    city: string,
    state: string,
    phone: string
}

export default function FilialCard({ trade_name, company_name, address, address_number, area, zip_code, city, state, phone }: Props): JSX.Element {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xs bg-white h-32">
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-1 truncate">{trade_name}</div>
                <p className="text-gray-700 text-sm truncate">{company_name}</p>
                <p className="text-gray-700 text-xs truncate">{`${address}, ${address_number} - ${area}, ${city} - ${state}, ${zip_code}`}</p>
                <p className="text-gray-700 text-xs truncate">{phone}</p>
            </div>
        </div>
    )
}