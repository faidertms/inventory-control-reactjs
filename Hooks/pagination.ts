
import { useState, useEffect } from 'react';

type PaginationProps = {
    currentPage?: number,
    itemsPerPage?: number,
    numberOfPages?: number,
    data: Array<any>
}

interface PaginationState {
    currentPage: number,
    itemsPerPage: number,
    numberOfPages: number,
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
    updatePagination: ({ itemsPerPage, currentPage, numberOfPages }: PaginationState) => void
}

export function usePagination({
    currentPage = 1,
    itemsPerPage = 10,
    numberOfPages,
    data
}: PaginationProps): PaginationReturn {

    const [pagination, setPagination] = useState<PaginationState>({
        itemsPerPage: itemsPerPage, // talvez nao precise ser state
        numberOfPages: numberOfPages ?? Math.ceil(data.length / itemsPerPage), // talvez não precise ser state
        currentPage: currentPage,
    });

    const paginateData = (): Array<any> => {
        const rows: Array<any> = [];
        const offset: number = (pagination.currentPage - 1) * pagination.itemsPerPage
        const toIndex: number = Math.min(offset + pagination.itemsPerPage, data.length);
        console.log(toIndex)
        for (let index: number = offset; index < toIndex; index++) {
            rows.push(data[index] ?? null);
        }
        return rows;
    }

    const canPrevPage: boolean = currentPage >= 1;
    const canNextPage: boolean = currentPage <= pagination.numberOfPages;

    const nextPage = () => {
        setPagination({ ...pagination, currentPage: canNextPage ? currentPage + 1 : pagination.numberOfPages });
    }

    const prevPage = () => {
        setPagination({ ...pagination, currentPage: canPrevPage ? currentPage - 1 : 1 });
    }

    const goToPage = (page: number) => {
        const currentPage: number = (page >= 1 && page <= pagination.numberOfPages) ? page : pagination.currentPage;
        setPagination({ ...pagination, currentPage });
    }

    const updatePagination = ({
        itemsPerPage = this.itemsPerPage, // talvez nao precise ser state
        numberOfPages = this.numberOfPages ?? Math.ceil(this.data.length / this.itemsPerPage), // talvez não precise ser state
        currentPage = this.currentPage
    }: PaginationState) => {
        setPagination({
            itemsPerPage,
            numberOfPages,
            currentPage
        });
    };

    const rows: Array<any> = paginateData();

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
