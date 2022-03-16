import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import "./buttons-styls/Btn.css"

function BtnHome(params) {
    return(
        <>
            <button className="btn-menu"><AiFillHome/></button>
        </>
    )
}
export default BtnHome