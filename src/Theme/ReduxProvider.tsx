"use client"

import React, {FC} from 'react';
import {Provider} from "react-redux";
import {store} from "@/Theme/store";


const ReduxProvider:FC = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default ReduxProvider;