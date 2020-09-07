import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link'
import { convertToSlug } from '../../../helpers/funcoes';
import { FiLogOut, FiShoppingBag, FiPackage } from 'react-icons/fi';
import { BiStoreAlt, BiStore } from "react-icons/bi";
import { AiOutlineGroup } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

function ItemIcon({ iconName }) {
    switch (convertToSlug(iconName)) {
        case 'loja':
            return <BiStoreAlt className="mr-2 w-6 h-6" />
        case 'produtos':
            return <FiLogOut className="mr-2 w-4 h-4" />
        case 'estoque':
            return <FiPackage className="mr-2 w-4 h-4" />
        case 'filiais':
            return <BiStore className="mr-2 w-4 h-4" />
        case 'categorias':
            return <AiOutlineGroup className="mr-2 w-4 h-4" />
        case 'pedidos':
            return <FiShoppingBag className="mr-2 w-6 h-6" />
        case 'sair':
            return <FiLogOut className="mr-2 w-6 h-6" />
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

    useEffect(() => {
        setIsOpen(false);
    }, [sidebarIsOpen]);

    return submenu ? (
        <Fragment>
            <li className="flex w-full items-center p-4 border-b hover:bg-blue-200" onClick={() => setIsOpen(!isOpen)}>
                <ItemIcon iconName={name} />
                <a>{name} </a>
                <IoMdArrowDropdown size="1.3rem" className={`ml-auto transition duration-300 ease-in-out ${isOpen ? "transform rotate-180" : ""}`} />
            </li>
            {isOpen && subfunctionalities.map((element, index) => (
                <Link href={url + element.url} key={element.url}>
                    <li className="flex w-full items-center py-2 px-8 border-b text-sm bg-gray-200 hover:bg-gray-400">
                        <ItemIcon iconName={element.name} />
                        <a>{element.name}</a>
                    </li>
                </Link>
            ))}
        </Fragment>
    ) : (
            <Link href={url}>
                <li className="flex w-full items-center p-4 border-b hover:bg-blue-200">
                    <ItemIcon iconName={name} />
                    <a>{name}</a>
                </li>
            </Link>
        )
}


