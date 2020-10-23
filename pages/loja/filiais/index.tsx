import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { filiais as filiaisExp } from '../../../helpers/exp.json'
import PaginationLinks from '../../../components/PaginationLinks';
import { useRouter } from "next/router";
import { usePagination } from '../../../Hooks/pagination';
import FilialCard from './FilialCard'
import { Filial } from '../../../helpers/types';


export default function Home() {

    const [data, setData] = useState<Array<Filial>>(Array(250).fill(filiaisExp[0]));

    const { query } = useRouter();

    const getCurrentPageNumeric = (): number => {
        return Number.isInteger(Number(query.currentPage)) ? Number(query.currentPage) : undefined;
    }

    const removeFilial = (id: number) => console.log(id);

    const {
        rows,
        itemsPerPage,
        numberOfPages,
        currentPage,
        canPrevPage,
        canNextPage,
        goToPage,
        nextPage,
        prevPage,
    } = usePagination({
        data: data,
        currentPage: getCurrentPageNumeric(),
        itemsPerPage: 25
    });

    return (
        <Fragment>
            <Header />
            <main className="p-6" >

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" >
                    {rows.map((element: Filial, index: number) => {
                        return <FilialCard {...element} removeFilial={removeFilial} key={index} />
                    })}

                </div>

                <PaginationLinks
                    itemsPerPage={itemsPerPage}
                    numberOfPages={numberOfPages}
                    currentPage={currentPage}
                />
            </main>

            <footer>

            </footer>
        </Fragment>
    )
}

