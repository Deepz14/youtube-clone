import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const appStore = configureStore({
    reducer: {
        navReducer: appReducer
    }
});


export default appStore;