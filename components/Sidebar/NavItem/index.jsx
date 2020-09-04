import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link'
import { convertToSlug } from '../../../helpers/funcoes';
import { FiLogOut } from 'react-icons/fi';
import Collapse from '../../Collapse';

function ItemIcon({ descricao }) {
    // console.log(convertToSlug(descricao))
    switch (convertToSlug(descricao)) {
        default:
            return null
    }
}


export default function NavItem({
    name,
    url,
    sidebarIsOpen,
    setSidebarOn,
    submenu = false,
    subfunctionalities
}) {
    const [isOpen, setIsOpen] = useState(false);

    const ativarSubMenu = (event) => {
        event.preventDefault();
        setSubmenuAtivo(!submenuAtivo);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [sidebarIsOpen]);

    return submenu ? (
        <Fragment>
            <li className="flex w-full items-center p-4 border-b" onClick={() => setIsOpen(!isOpen)}>
                <FiLogOut className="mr-2 w-6 h-6" />
                <a>{name}</a>
            </li>
            {isOpen && subfunctionalities.map((element, index) => (
                <Link href={element.url}>
                    <li className="flex w-full items-center py-2 px-8 border-b text-sm bg-gray-200">
                        <FiLogOut className="mr-2 w-4 h-4" />
                        <a>{element.name}</a>
                    </li>
                </Link>
            ))}
        </Fragment>
    ) : (
            <Link href={url}>
                <li className="flex w-full items-center p-4 border-b">
                    <FiLogOut className="mr-2 w-6 h-6" />
                    <a>{name}</a>
                </li>
            </Link>
        )
}


