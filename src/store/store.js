import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
    reducer: {
        navReducer: appReducer,
        searchReducer
    }
});


export default appStore;