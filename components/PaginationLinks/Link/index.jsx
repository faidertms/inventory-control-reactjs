import React from 'react';
import Link from 'next/link';

export default function PaginationLink({
    url,
    className,
    query,
    shallow,
    children
}) {
    return (
        <li className={className} style={{ minWidth: "3rem" }}>
            <Link href={{ pathname: url, query: query }} shallow={shallow}>
                <a>
                    {children}
                </a>
            </Link>
        </li>
    );
}

