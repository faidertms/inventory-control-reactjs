import React, { Fragment, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { filiais as filiaisExp } from '../../../helpers/exp.json'
import PaginationLinks from '../../../components/PaginationLinks';
import { useRouter } from "next/router";

function FilialCard({ trade_name, company_name, address, address_number, area, zip_code, city, state, phone }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-xs bg-white h-32">
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-1 truncate">{trade_name}</div>
                <p className="text-gray-700 text-sm truncate">{company_name}</p>
                <p className="text-gray-700 text-xs truncate">{`${address}, ${address_number} - ${area}, ${city} - ${state}, ${zip_code}`}</p>
                <p className="text-gray-700 text-xs truncate">{phone}</p>
            </div>
        </div>
    )
}

function usePagination({
    currentPage = 1,
    itemsPerPage = 10,
    numberOfPages,
    data
}) {

    const [pagination, setPagination] = useState({
        itemsPerPage: itemsPerPage, // talvez nao precise ser state
        numberOfPages: numberOfPages ?? Math.ceil(data.length / itemsPerPage), // talvez não precise ser state
        currentPage: currentPage,
    });

    const paginateData = () => {
        const rows = [];
        const offset = (pagination.currentPage - 1) * pagination.itemsPerPage
        const toIndex = Math.min(offset + pagination.itemsPerPage, data.length);
        console.log(toIndex)
        for (let index = offset; index < toIndex; index++) {
            rows.push(data[index] ?? null);
        }
        return rows;
    }

    const canPrevPage = currentPage >= 1;
    const canNextPage = currentPage <= pagination.numberOfPages;

    const nextPage = (page) => {
        const currentPage = page ?? currentPage + 1;
        setPagination({ ...pagination, currentPage: canNextPage ? currentPage : pagination.numberOfPages });
    }

    const prevPage = (page) => {
        const currentPage = page ?? currentPage - 1;
        setPagination({ ...pagination, currentPage: canPrevPage ? currentPage : 1 });
    }

    const goToPage = (page) => {
        const currentPage = (page >= 1 && page <= pagination.numberOfPages) ? page : pagination.currentPage;
        setPagination({ ...pagination, currentPage });
    }

    const updatePagination = ({
        itemsPerPage = itemsPerPage, // talvez nao precise ser state
        numberOfPages = numberOfPages ?? Math.ceil(data.length / itemsPerPage), // talvez não precise ser state
        currentPage = currentPage
    }) => {
        setPagination({
            itemsPerPage,
            numberOfPages,
            currentPage
        });
    };

    const rows = paginateData();

    useEffect(() => {
        goToPage(currentPage)
    }, [currentPage]);

    return {
        rows,
        ...pagination,
        canPrevPage,
        canNextPage,
        goToPage,
        nextPage,
        prevPage,
        updatePagination
    }
}

export default function Home() {

    const [filter, setFilter] = useState({ column: "", searchFor: "" });

    const [data, setData] = useState(Array(25).fill(filiaisExp).flat());

    const { query } = useRouter();

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
        currentPage: query.currentPage
    })

    console.log(currentPage)
    return (
        <Fragment>
            <Header />
            <main className="p-6" >

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" >
                    {rows.map((element, index) => {
                        return <FilialCard {...element} trade_name={index+currentPage} key={index} />
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

