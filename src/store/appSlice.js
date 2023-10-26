import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNavOpen: true
}

const appSlice = createSlice({
    name: "navBar",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isNavOpen = !state.isNavOpen
        },
        close: (state) => {
            state.isNavOpen = false
        },
        open: (state) => {
            state.isNavOpen = true
        }
    }

});

export const { toggle, close, open } = appSlice.actions;
export default appSlice.reducer;