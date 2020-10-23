import React from 'react'
import NavItem from './NavItem';
import { Functionality } from '../../helpers/types';

type Props = {
    className?: string,
    functionalities: Array<Functionality>
    sidebarIsOpen: boolean,
    setSidebarIsOpen: (value: boolean) => void,
    logout?: () => void
}

function Sidebar({
    className = "transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto z-30",
    functionalities,
    sidebarIsOpen,
    setSidebarIsOpen,
    logout
}: Props) {
    return (
        // flex columns
        <aside className={className}>
            <ul>
                {functionalities.map((element: Functionality) => (
                    <NavItem
                        {...element}
                        setSidebarIsOpen={setSidebarIsOpen}
                        sidebarIsOpen={sidebarIsOpen}
                        key={element.url}
                    />
                ))}
                <NavItem
                    url={"/sair"}
                    name={"Sair"}
                    submenu={false}
                    setSidebarIsOpen={setSidebarIsOpen}
                    sidebarIsOpen={sidebarIsOpen}
                    logout={logout}
                />
            </ul>
        </aside>
    );
}

export default Sidebar;

