import React, {useEffect} from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../store/appSlice";
import Header from "./Header";

const Body = () => {
    const isNavOpen = useSelector((state) => state.navReducer.isNavOpen);
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(open())
    }, []);

    return (
        <>
            <Header />
            <div className="grid grid-cols-12">
                {
                    isNavOpen &&  <Sidebar />
                }
                <Outlet />
            </div>
        </> 
    )
}

export default Body;
