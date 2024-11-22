'use client';
import React, { FC } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const Pagination: FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const currentPage = searchParams.get('page') || '1'; // Поточна сторінка


    const onclickPrevHandler = () => {
        if (+currentPage > 1) {
            const newPage = +currentPage - 1;
            if (pathname === '/') {
                router.push(`/?page=${newPage}`);
            } else {
                router.push(`${pathname}?page=${newPage}`);
            }
        }
    };

    const onclickNextHandler = () => {
        const newPage = +currentPage + 1;
        if (pathname === '/') {
            router.push(`/?page=${newPage}`);
        } else {
            router.push(`${pathname}?page=${newPage}`);
        }
    };

    return (
        <div>
            <button className= "pageButton" onClick={onclickPrevHandler} disabled={+currentPage <= 1}>
                Prev
            </button>
            <span>Page {+currentPage}</span>
            <button className= "pageButton" onClick={onclickNextHandler}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
