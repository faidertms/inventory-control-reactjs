import { useState, useEffect } from 'react';

type PaginationProps = {
    currentPage?: number,
    itemsPerPage?: number,
    numberOfPages?: number,
    isAsync?: boolean,
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
    numberOfPages = 1,
    isAsync,
    data
}: PaginationProps): PaginationReturn {

    const [pagination, setPagination] = useState<PaginationState>({
        itemsPerPage: itemsPerPage,
        currentPage: currentPage,
    });

    const paginateData = (): Array<any> => {
        const rows: Array<any> = [];
        const offset: number = (pagination.currentPage - 1) * pagination.itemsPerPage
        const toIndex: number = Math.min(offset + pagination.itemsPerPage, data.length);

        for (let index: number = offset; index < toIndex; index++) {
            rows.push(data[index] ?? null);
        }

        return rows;
    }

    const newNumberOfPages: number = isAsync ? numberOfPages : Math.ceil(data.length / itemsPerPage);
    const rows: Array<any> = isAsync ? data : paginateData();

    const canPrevPage: boolean = currentPage >= 1;
    const canNextPage: boolean = currentPage <= newNumberOfPages;

    const nextPage = (): void => {
        setPagination((prevPagination) => ({ ...prevPagination, currentPage: canNextPage ? currentPage + 1 : newNumberOfPages }));
    }

    const prevPage = (): void => {
        setPagination((prevPagination) => ({ ...prevPagination, currentPage: canPrevPage ? currentPage - 1 : 1 }));
    }

    const goToPage = (page: number): void => {
        const currentPage: number = (page >= 1 && page <= newNumberOfPages) ? page : pagination.currentPage;
        setPagination((prevPagination) => ({ ...prevPagination, currentPage }));
    }

    const updatePagination = ({
        itemsPerPage,
        currentPage
    }: PaginationState): void => {
        console.log([currentPage > newNumberOfPages && newNumberOfPages !== 0 ? newNumberOfPages : currentPage, newNumberOfPages, currentPage, itemsPerPage]);
        setPagination({
            itemsPerPage,
            currentPage: currentPage > newNumberOfPages && newNumberOfPages !== 0 ? newNumberOfPages : currentPage
        });
    };

    useEffect(() => {
        updatePagination({ itemsPerPage, currentPage });
    }, [currentPage, itemsPerPage]);

    return {
        rows,
        numberOfPages: newNumberOfPages,
        ...pagination,
        canPrevPage,
        canNextPage,
        goToPage,
        nextPage,
        prevPage,
        updatePagination
    }
}
