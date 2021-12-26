import React from 'react'
import { FaStar } from "react-icons/fa";

function Star({selected,onSelect}) {
    return (
        <>
        <FaStar color={selected?"red":"grey"} onClick={onSelect} className='star'/>
        </>
        
    )
}

export default Star
