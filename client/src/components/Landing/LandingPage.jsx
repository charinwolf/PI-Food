import React from "redux";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"


function LandingPage(){
return (
<div className = {style.landingpage}>
<div className = {style.container}>
    <h1 className = {style.h1}>Your Recipe!</h1>
    <Link to = {"/home"}>
    <button className = {style.btn}>Enter!</button>
    </Link>
</div>
</div>
)
}

export default LandingPage