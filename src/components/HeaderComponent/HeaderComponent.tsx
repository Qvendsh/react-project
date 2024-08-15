import React from 'react';

import './Header.css'
import NLHComponent from "@/components/HeaderComponent/NavLinkHeaderComponent/NLHComponent";
import Link from "next/link";
const HeaderComponent = () => {
    return (
        <div className='header'>
            <NLHComponent path={'/'}>Home </NLHComponent>
            <NLHComponent path={`/movies`}>Movies</NLHComponent>
            <NLHComponent path={'/genres'}>Genres</NLHComponent>
            <NLHComponent path={'/search'}>Search</NLHComponent>

        </div>
    );
};

export default HeaderComponent;