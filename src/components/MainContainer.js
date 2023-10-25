import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {

    return  (
        <div className="col-span-10 px-5 max-h-[700px] overflow-y-scroll relative">
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;