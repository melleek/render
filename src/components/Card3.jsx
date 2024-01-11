import React from 'react'

function Card3({ img, p1, p2, role, sushi, as, t1, t2, t3, t4, btn }) {
    return (
        <div>
            <div className='lg:w-[392px] bg-[#e4e3e337] rounded-[15px]'>
                <main className='flex items-start py-[20px]'>
                    <aside className='flex flex-col gap-[10px] lg:p-[8px]'>
                        <p className='text-[12px] flex flex-col items-center'><img src={role} alt="" />{p1}</p>
                        <p className='text-[12px] flex flex-col items-center text-center'><img src={sushi} alt="" />{p2}</p>
                    </aside>
                    <img src={img} className="lg:w-[280px] md:w-[280px] sm:w-[240px]" />
                    <img src={as}/>
                </main>

                <main className='p-[24px]'>
                    <div className='flex flex-col items-start gap-[5px]'>
                        <p className='text-[14px] text-[#B7B7B7]'>{t1}</p>
                        <h1 className='lg:text-[24px] font-[700]'>{t2}</h1>
                        <p className='text-[14px]'>{t3}</p>
                    </div>
                    <div className='flex justify-between items-center pt-[40px]'>
                        <h1 className='text-[32px] font-[700] flex flex-col '><p className='text-[14px] font-[400] text-[#B7B7B7]'>{t4}</p>{t4}</h1>
                        <button className='p-[10px] px-[50px] text-white rounded-[4px] bg-[rgba(201,92,63,1)]'>{btn}</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Card3
