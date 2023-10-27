import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'cacheSearch',
    initialState: {},
    reducers: {
        cacheSearch: (state, action) => {
            return {...state, ...action.payload}
        },
        releaseTopCache: (state) => {
            delete state[Object.keys(state)[0]];
        }
    }
});

export const { cacheSearch, releaseTopCache } = searchSlice.actions;
export default searchSlice.reducer;