"use client"
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import themeReducer from "./slice"
export const store = configureStore({
    reducer:{
        theme:  themeReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector