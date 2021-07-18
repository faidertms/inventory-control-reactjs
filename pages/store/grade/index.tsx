import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { products as productsExp } from '../../../helpers/exp.json'
import PaginationLinks from '../../../components/PaginationLinks';
import { useRouter } from "next/router";
import { usePagination } from '../../../hooks/pagination';
import ProductCard from './ProductCard'
import { Product } from '../../../helpers/types';


export default function Home() {

    const [data, setData] = useState<Array<Product>>(Array(250).fill(productsExp[0]));

    const { query } = useRouter();

    const getCurrentPageNumeric = (): number => {
        return Number.isInteger(Number(query.currentPage)) ? Number(query.currentPage) : undefined;
    }

    const getItemsPerPageNumeric = (): number => {
        return Number.isInteger(Number(query.itemsPerPage)) && Number(query.itemsPerPage) <= 100 ? Number(query.itemsPerPage) : 25;
    }

    const removeProduct = (id: number) => console.log(id);

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
                    {rows.map((element: Product, index: number) => {
                        return <ProdutoCard {...element} remove={removeProduct} key={index} />
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

