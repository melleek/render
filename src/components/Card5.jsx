import React from 'react'

function Card5({ h1, img, p }) {
    return (
        <div>
            <div>
                <div className='p-[24px]'>
                    <h1 className='text-[24px] font-[600]'>{h1}</h1>
                    <p className='text-[14px]'>{p}</p>
                </div>
                <div className='flex flex-col items-end'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card5
