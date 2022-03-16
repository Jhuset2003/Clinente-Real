import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa';
import "./buttons-styls/Btn.css"
import {NavLink} from "react-router-dom";

function BtnMapa(params) {
    return(
        <>
        
            <button className="btn-menu"><FaMapMarkedAlt/></button>
        </>
    )
}
export default BtnMapa