import Header from '../components/Header';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main className="p-6" style={{ height: "calc(100vh - 4.875rem)"}} >
                <div className="flex justify-center items-center h-full">
                   <span> Sem Pagina HOME por enquanto, Usar pagina Loja/Filiais</span>
                </div>
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}

