import React from 'react'

function NotFound() {
  return (
    <div>
     <div>
        <div className='lg:py-[80px] flex flex-col items-center gap-[40px]'>
          <img src="src/assets/Frame 109.png" alt="" />
          <div className='flex flex-col items-center lg:w-[644px] md:w-[644px]'>
            <h1 className='text-[24px] font-[700]'>Страница не найдена</h1>
            <p className='text-center'>Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
          </div>
          <button className=" text-white font-[700] bg-[#E07153] rounded-[4px]  py-[10px] px-[40px] ">На главную</button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
