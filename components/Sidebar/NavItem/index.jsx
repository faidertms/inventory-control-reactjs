import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { convertToSlug } from '../../../helpers/funcoes';
import { FiLogOut } from 'react-icons/fi';
import './style.css';
convertToSlug
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
    logout,
    submenu = true,
    subfuncionalidades
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
        <li className="flex w-full items-center p-4 border-b">
            <FiLogOut className="mr-2 w-6 h-6" />
            <span>{name}</span>
            <Collapse isOpen={isOpen}>
                <Link href={url}>
                    <span className="flex w-full items-center p-4 border-b">
                        <FiLogOut className="mr-2 w-6 h-6" />
                        <a>{name}</a>
                    </span>
                </Link>
            </Collapse>
        </li>
    ) : (
            <Link href={url}>
                <li className="flex w-full items-center p-4 border-b">
                    <FiLogOut className="mr-2 w-6 h-6" />
                    <a>{name}</a>
                </li>
            </Link>
        )
}


function Collapse({
    isOpen,
    className = '',
    style,
    children
}) {

    return (
        <div className={`collapse ${isOpen ? 'active' : ''} ${className}`} style={style}>
            {children}
        </div>
    )
}


