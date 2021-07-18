import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link'
import { convertToSlug } from '../../../helpers/functions';
import { FiLogOut, FiShoppingBag, FiPackage, FiGrid } from 'react-icons/fi';
import { BiStoreAlt, BiStore, BiRuler } from "react-icons/bi";
import { AiOutlineGroup } from "react-icons/ai";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Subfunctionality } from '../../../helpers/types';

type Props = {
    name: string,
    url: string,
    sidebarIsOpen: boolean,
    setSidebarIsOpen: (value: boolean) => void,
    submenu: boolean,
    subfunctionalities?: Array<Subfunctionality>,
    logout?: () => void
};

type ItemIconProps = {
    iconName: string,
};

function ItemIcon({ iconName }: ItemIconProps) {
    switch (convertToSlug(iconName)) {
        case 'loja':
            return <BiStoreAlt className="mr-2 w-6 h-6" />
        case 'products':
            return <FiLogOut className="mr-2 w-4 h-4" />
        case 'estoque':
            return <FiPackage className="mr-2 w-4 h-4" />
        case 'filiais':
            return <BiStore className="mr-2 w-4 h-4" />
        case 'categorias':
            return <AiOutlineGroup className="mr-2 w-4 h-4" />
        case 'sizes':
            return <BiRuler className="mr-2 w-4 h-4" />
        case 'colors':
            return <HiOutlineColorSwatch className="mr-2 w-4 h-4" />
        case 'gride':
            return <FiGrid className="mr-2 w-4 h-4" />
        case 'pedidos':
            return <FiShoppingBag className="mr-2 w-6 h-6" />
        case 'sair':
            return <FiLogOut className="mr-2 w-6 h-6" />
        default:
            return null;
    }
};

export default function NavItem({
    name,
    url,
    sidebarIsOpen,
    submenu,
    subfunctionalities
}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(false);
    }, [sidebarIsOpen]);

    return submenu ? (
        <Fragment>
            <li className="flex w-full items-center p-4 border-b hover:bg-blue-200 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <ItemIcon iconName={name} />
                <a>{name} </a>
                <IoMdArrowDropdown size="1.3rem" className={`ml-auto transition duration-300 ease-in-out ${isOpen ? "transform rotate-180" : ""}`} />
            </li>
            {isOpen && subfunctionalities.map((element: Subfunctionality) => (
                <Link href={url + element.url} key={element.url} shallow>
                    <li className="flex w-full items-center py-2 px-8 border-b text-sm bg-gray-200 hover:bg-gray-400 cursor-pointer">
                        <ItemIcon iconName={element.name} />
                        <a>{element.name}</a>
                    </li>
                </Link>
            ))}
        </Fragment>
    ) : (
        <Link href={url}>
            <li className="flex w-full items-center p-4 border-b hover:bg-blue-200 cursor-pointer">
                <ItemIcon iconName={name} />
                <a>{name}</a>
            </li>
        </Link>
    );
}


