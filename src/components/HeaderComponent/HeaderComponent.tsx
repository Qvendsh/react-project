import React, {useContext} from 'react';

import './Header.css'
import NLHComponent from "@/components/HeaderComponent/NavLinkHeaderComponent/NLHComponent";
import ReduxProvider from "@/Theme/ReduxProvider";
import Switcher from "@/Theme/Switcher";



const HeaderComponent = () => {
    return (
        <div className='header'>
            <div>
                <ReduxProvider>
                    <Switcher/>
                </ReduxProvider>
            </div>
            <NLHComponent path={`/movies`}>Movies</NLHComponent>
            <NLHComponent path={'/genres'}>Genres</NLHComponent>
            <NLHComponent path={'/search'}>Search</NLHComponent>
            <button className='img'><img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"  alt=""/></button>
        </div>
    );
};

export default HeaderComponent;