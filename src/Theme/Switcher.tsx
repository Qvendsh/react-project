"use client"
import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/Theme/store";
import {switchTheme} from "@/Theme/slice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Switcher:FC = () => {
    const dispatch = useDispatch()
    const theme = useAppSelector((state) => state.theme.theme)

    const handleToggle = () =>{
        dispatch(switchTheme())
        document.body.className = theme === 'light' ? 'dark' : 'light'
    }
    return (
        <div>
            <button onClick={handleToggle} className="theme-switcher-button">
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon}/>
            </button>
        </div>
);
};

export default Switcher;