import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { colors as colorsExp } from '../../../helpers/exp.json'
import PaginationLinks from '../../../components/PaginationLinks';
import { useRouter } from "next/router";
import { usePagination } from '../../../hooks/pagination';
import ColorCard from './ColorCard'
import { Color } from '../../../helpers/types';


export default function ColorPage() {

    const [data, setData] = useState<Array<Color>>(Array(250).fill(colorsExp[0]));

    const { query } = useRouter();

    const getCurrentPageNumeric = (): number => {
        return Number.isInteger(Number(query.currentPage)) ? Number(query.currentPage) : 1;
    }

    const getItemsPerPageNumeric = (): number => {
        return Number.isInteger(Number(query.itemsPerPage)) && Number(query.itemsPerPage) <= 100 ? Number(query.itemsPerPage) : 25;
    }

    const removeColor = (id: number) => console.log(id);

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
        itemsPerPage: getItemsPerPageNumeric(),
    });

    return (
        <Fragment>
            <Header />
            <main className="p-6" >

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" >
                    {rows.map((element: Color, index: number) => {
                        return <ColorCard {...element} remove={removeColor} key={index} />
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

