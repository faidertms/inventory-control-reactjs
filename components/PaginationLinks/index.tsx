import React from 'react';
import { FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';
import PaginationLink from './Link';

type Props = {
    currentPage: number,
    numberOfPages: number,
    url?: string,
    itemsPerPage: number
}


export default function PaginationLinks({ currentPage, numberOfPages, url, itemsPerPage }: Props): JSX.Element {

    const generatePagesLinks = (): JSX.Element[] => {
        const pages: JSX.Element[] = [];
        const range: number = 3;
        let toIndex: number = numberOfPages > (range * 2) ? currentPage + range : numberOfPages;
        let fromIndex: number = numberOfPages > (range * 2) ? currentPage - range : 1;

        if (toIndex > numberOfPages) {
            fromIndex = numberOfPages - (range * 2);
            toIndex = numberOfPages;
        } else if (fromIndex < 1) {
            fromIndex = 1;
            toIndex = 1 + (range * 2);
        }

        for (let index: number = fromIndex; index <= toIndex; index++) {
            pages.push(
                <PaginationLink
                    className={`border border-l-0 hover:bg-blue-200 ${index === currentPage ? 'bg-blue-200' : ''}`}
                    url={url}
                    query={{
                        currentPage: index,
                        itemsPerPage: itemsPerPage
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
            <ul className="flex justify-center flex-wrap max-w-xl my-4 mx-auto bg-white text-gray-700" >
                <PaginationLink
                    className="flex-auto flex justify-center rounded-l border hover:bg-blue-200"
                    url={url}
                    query={{
                        currentPage: 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronsLeft size={'1.5rem'} className="w-full" />
                </PaginationLink>

                <PaginationLink
                    className=" flex-auto flex justify-center border border-l-0 hover:bg-blue-200"
                    url={url}
                    query={{
                        currentPage: currentPage - 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronLeft size={'1.5rem'} className="w-full" />
                </PaginationLink>
                {generatePagesLinks()}
                <PaginationLink
                    className="flex-auto flex justify-center border border-l-0 hover:bg-blue-200"
                    url={url}
                    query={{
                        currentPage: currentPage + 1,
                        itemsPerPage
                    }}
                >
                    <FiChevronRight size={'1.5rem'} className="w-full" />
                </PaginationLink>

                <PaginationLink
                    className="flex-auto flex justify-center  rounded-r border border-l-0 hover:bg-blue-200"
                    url={url}
                    query={{
                        currentPage: numberOfPages,
                        itemsPerPage
                    }}
                >
                    <FiChevronsRight size={'1.5rem'} className="w-full" />
                </PaginationLink>
            </ul>
        </div>
    )
}