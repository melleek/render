import React from 'react'

function Card2({ ig, h1, img, h2, p }) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={ig} alt="" />
                <img src={img} alt="" />
                <h2 className='mt-[10px] font-[700]'>{h2}</h2>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default Card2

