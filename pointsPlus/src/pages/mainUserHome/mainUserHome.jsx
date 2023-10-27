import React from "react";
import TopBar from "../../Components/TopBar/TopBar.jsx";
import "./mainUserHome.css"
import MainCircularButton from "../../Components/MainCircularButton/MainCircularButton.jsx";
const mainUserHome = ()=>{
    return(<div className={'mainUserHomeMainContainer'}>
        <TopBar></TopBar>
        <div className={"mainButtonsContainer"}>
            <MainCircularButton>


            </MainCircularButton>
            <MainCircularButton></MainCircularButton>

        </div>
    </div>)
};
export default mainUserHome;