import React from 'react'
import NavItem from './NavItem';
// import { connect } from 'react-redux'
// import * as actionsRedux from '../Store/Actions/index'
function Sidebar({
    className = "transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto z-30",
    funcionalidades = [],
    sidebarIsOpen,
    setSidebarIsOpen,
    logout
}) {
    return (
        // flex columns
        <aside className={className}>
            <ul>
                {funcionalidades.map(elemento => (
                    <NavItem
                        {...elemento}
                        setSidebarIsOpen={setSidebarIsOpen}
                        sidebarIsOpen={sidebarIsOpen}
                        key={elemento.descricao}
                    />
                ))}

                <NavItem
                    url={"/sair"}
                    name={"Sair"}
                    setSidebarIsOpen={setSidebarIsOpen}
                    sidebarIsOpen={sidebarIsOpen}
                    logout={logout}
                />
            </ul>
        </aside>
    );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout: () => dispatch(actionsRedux.logout()),
//         ativarSidebar: (evento) => dispatch(actionsRedux.ativarSidebar(evento)),
//     }
// };

// const mapStateToProps = (state) => ({
//     modoMobile: state.core.modoMobile,
//     sidebarAtivo: state.core.sidebarAtivo,
// });

export default Sidebar;

