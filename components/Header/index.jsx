import React, { useState } from 'react'
import Sidebar from '../Sidebar';

export default function Header() {

    const [sidebarOn, setSidebarOn] = useState(false);

    return (
        <header className="sticky top-0 z-10">
            <nav className="shadow-sm shadow-md flex items-center justify-between flex-wrap p-6 bg-white text-gray-700">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <span className="font-semibold text-xl tracking-tight">Controle de Estoque</span>
                </div>
                <div className="block">
                    <button className="flex items-center px-3 py-2 border rounded border-gray-400 hover:text-gray-600 hover:border-gray-600" onClick={() => setSidebarOn(!sidebarOn)}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`z-10 fixed inset-0 transition-opacity ${sidebarOn ? "" : "hidden"}`} onClick={() => setSidebarOn(false)}>
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <Sidebar
                    sidebarIsOpen={sidebarOn}
                    setSidebarIsOpen={setSidebarOn}
                    className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${sidebarOn ? "translate-x-0" : "-translate-x-full"}`}
                />
            </nav>
        </header>
    );
}
