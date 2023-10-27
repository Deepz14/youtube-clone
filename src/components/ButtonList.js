import React from "react";
import { BUTTON_FILTER_LIST } from "../utils/Constants";
import ButtonFilter from "./ButtonFilter";

const ButtonList = () => {
    return (
        <div className="fixed bg-white w-full pt-3 z-1">
            {
                BUTTON_FILTER_LIST.map((button, i) => <ButtonFilter key={i} name={button} />)
            }
        </div>
    )
}

export default ButtonList;