import {createSlice} from "@reduxjs/toolkit";

type ThemeState = {
    theme: 'light' | 'dark'
};

const initialState:  ThemeState ={
    theme:'light'
}
export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        switchTheme: (state) =>{
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})
export const { switchTheme} = themeSlice.actions
export default themeSlice.reducer


