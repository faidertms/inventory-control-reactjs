import React from 'react';
import Link from 'next/link'
import { convertToSlug } from '../../../helpers/funcoes';
convertToSlug
function ItemIcon({ descricao }) {
    // console.log(convertToSlug(descricao))
    switch (convertToSlug(descricao)) {
        default:
            return null
    }
}


export default function NavItem({ descricao, url, logout, sidebarAtivo, submenu, subfuncionalidades }) {
    const [submenuAtivo, setSubmenuAtivo] = useState(false);

    const ativarSubMenu = (event) => {
        event.preventDefault();
        setSubmenuAtivo(!submenuAtivo);
    };

    useEffect(() => {
        setSubmenuAtivo(false);
    }, [sidebarAtivo]);

    return (
        <li>
            <Link href={url}>
                <a>{descricao}</a>
            </Link>
        </li>
    )
}



