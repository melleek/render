import React from 'react'

function Card4({ img, t5, t6, t7, t8, t9, t10, t11, t12, btn }) {
    return (
        <div>
            <div className='lg:w-[392px] bg-[#fff]'>
                <img src={img} />
                <main className='p-[24px]'>
                    <div className='flex flex-col items-start gap-[20px]'>
                        <div className='flex  items-end gap-[50px]'>
                            <p className='text-[14px] text-[#B7B7B7]'>{t5} </p>
                            <div className='flex flex-col items-end'>
                                <p className='text-[#B7B7B7]'>{t9}</p>
                                <div className='flex items-center gap-[8px]'>
                                    <button className='py-[4px] px-[8px] bg-[#E07153] rounded-[4px] text-[white] '>{t10}</button>
                                    <img src="src/assets/section 4/card5/Ellipse 8.png" alt="" />
                                    <button className='py-[4px] px-[8px] bg-[#F5F5F5] rounded-[4px] text-[#B7B7B7] '>{t11}</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='lg:text-[24px] font-[700]'>{t6}</h1>
                            <p className='text-[14px]'>{t7}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-end pt-[40px]'>
                        <h1 className='text-[32px] font-[700] flex flex-col '><p className='text-[14px] font-[400] text-[#B7B7B7]'>{t12}</p>{t8}</h1>
                        <button className='p-[10px] px-[50px] text-white rounded-[4px] bg-[rgba(201,92,63,1)]'>{btn}</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Card4
