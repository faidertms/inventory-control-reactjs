import React from 'react';
import { FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';
import PaginationLink from './Link';

export default function PaginationLinks({ currentPage, numberOfPages, url, itemsPerPage }) {

    const generatePagesLinks = () => {
        const pages = [];
        const manyPages = 8 * currentPage;
        const toIndex = Math.min(manyPages, numberOfPages);
        const fromIndex = (toIndex - 8);
        console.log(toIndex)
        for (let index = fromIndex; index <= toIndex; index++) {
            pages.push(
                <PaginationLink
                    className="flex-auto p-2 flex justify-center"
                    url={url}
                    query={{
                        currentPage: index,
                        itemsPerPage
                    }}
                    key={index}
                >
                    {index}
                </PaginationLink>
            );
        }
        return pages;
    }

    return (
        <div>
            <ul className="flex justify-center flex-wrap max-w-xl my-4 mx-auto divide-paginate-links bg-white" >
                <PaginationLink
                    className="flex-auto p-2 flex justify-center rounded-l"
                    url={url}
                    query={{
                        currentPage: 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronsLeft size={'1.4rem'} />
                </PaginationLink>

                <PaginationLink
                    className="flex-auto p-2 flex justify-center"
                    url={url}
                    query={{
                        currentPage: 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronLeft size={'1.4rem'} />
                </PaginationLink>
                {generatePagesLinks()}
                <PaginationLink
                    className="flex-auto p-2 flex justify-center"
                    url={url}
                    query={{
                        currentPage: 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronRight size={'1.4rem'} />
                </PaginationLink>

                <PaginationLink
                    className="flex-auto p-2 flex justify-center rounded-r"
                    url={url}
                    query={{
                        currentPage: 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronsRight size={'1.4rem'} />
                </PaginationLink>
            </ul>
        </div>
    )
}