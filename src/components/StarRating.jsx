import React, { useState } from 'react'

import Star from './Star';


function starRating({totalStars}) {
    const createArray = length => [...Array(length)];
    
    const [selected, setselected] = useState(3);

    return (
        <div>
           {
           createArray(totalStars).map((n, i) => <Star key={i} selected={selected>i} onSelect={()=>setselected(i+1)}/>)
           }
           <h3>{selected} out of {totalStars}</h3>
        </div>
    )
}

export default starRating
