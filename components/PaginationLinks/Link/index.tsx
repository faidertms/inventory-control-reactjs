import React, { ReactElement, ReactNode, } from 'react'
import Link from 'next/link';

type Props = {
    url: string,
    className: string,
    query: {
        currentPage: number,
        itemsPerPage: number
    },
    shallow?: boolean,
    children: ReactNode
}

export default function PaginationLink({
    url,
    className,
    query,
    shallow,
    children
}: Props): JSX.Element {
    return (
        <li className={className} style={{ minWidth: "3rem" }}>
            <Link href={{ pathname: url, query: query }} shallow={shallow} >
                <a className="w-full text-center block p-2 ">
                    {children}
                </a>
            </Link>
        </li>
    );
}
