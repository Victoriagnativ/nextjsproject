import React from 'react';
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'MoviesLayout metadata'
}
type Props = { children: React.ReactNode }
const MoviesLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MoviesLayout;