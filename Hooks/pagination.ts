
import { useState, useEffect } from 'react';

type PaginationProps = {
    currentPage?: number,
    itemsPerPage?: number,
    data: Array<any>
}

interface PaginationState {
    currentPage: number,
    itemsPerPage: number,
}

type PaginationReturn = {
    rows: Array<any>,
    currentPage: number,
    itemsPerPage: number,
    numberOfPages: number,
    canPrevPage: boolean,
    canNextPage: boolean,
    goToPage: (page: number) => void,
    nextPage: () => void,
    prevPage: () => void,
    updatePagination: ({ itemsPerPage, currentPage }: PaginationState) => void
}

export function usePagination({
    currentPage = 1,
    itemsPerPage = 10,
    data
}: PaginationProps): PaginationReturn {

    const [pagination, setPagination] = useState<PaginationState>({
        itemsPerPage: itemsPerPage,
        currentPage: currentPage,
    });

    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const paginateData = (): Array<any> => {
        const rows: Array<any> = [];
        const offset: number = (pagination.currentPage - 1) * pagination.itemsPerPage
        const toIndex: number = Math.min(offset + pagination.itemsPerPage, data.length);

        for (let index: number = offset; index < toIndex; index++) {
            rows.push(data[index] ?? null);
        }

        return rows;
    }

    const canPrevPage: boolean = currentPage >= 1;
    const canNextPage: boolean = currentPage <= numberOfPages;

    const nextPage = () => {
        setPagination((prevPagination) => ({ ...prevPagination, currentPage: canNextPage ? currentPage + 1 : numberOfPages }));
    }

    const prevPage = () => {
        setPagination((prevPagination) => ({ ...prevPagination, currentPage: canPrevPage ? currentPage - 1 : 1 }));
    }

    const goToPage = (page: number) => {
        const currentPage: number = (page >= 1 && page <= numberOfPages) ? page : pagination.currentPage;
        setPagination((prevPagination) => ({ ...prevPagination, currentPage }));
    }

    const updatePagination = ({
        itemsPerPage,
        currentPage
    }: PaginationState) => {
        const numberOfPages = Math.ceil(data.length / itemsPerPage);
        setPagination({
            itemsPerPage,
            currentPage: currentPage > numberOfPages ? numberOfPages : currentPage
        });
    };

    useEffect(() => {
        updatePagination({ itemsPerPage, currentPage });
    }, [currentPage, itemsPerPage]);

    const rows: Array<any> = paginateData();

    return {
        rows,
        numberOfPages,
        ...pagination,
        canPrevPage,
        canNextPage,
        goToPage,
        nextPage,
        prevPage,
        updatePagination
    }
}
