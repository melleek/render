import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Card1 from '../components/Card1'


function Layout() {
    const { pathname } = useLocation()
    return (
        <>
            <div>
                <header className='relative lg:pt-[20px]'>
                    <div className='flex justify-between sm:p-[20px] lg:p-[0]'>
                        <img src="src/assets/logo (4).png" className="lg:absolute z-1 lg:px-[80px]" />
                    </div>
                    <nav className='flex lg:pl-[280px] lg:pr-[80px] lg:py-[16px] items-center justify-between sm:p-[12px] '>
                        <aside className='flex items-center lg:gap-[50px] sm:flex-wrap sm:gap-[10px]'>
                        <Link to="/">
                                <p style={{color: pathname == "/" ? "red" : "black"}}>Home</p>
                            </Link>
                            <Link to="/about">
                                <p style={{color: pathname == "/about" ? "red" : "black"}}>О нас</p>
                            </Link>
                            <Link to="/menu">
                                <p style={{color: pathname == "/menu" ? "red" : "black"}}>Меню</p>
                            </Link>
                            <Link to="/orderBonus">
                                <p style={{color: pathname == "/orderBonus" ? "red" : "black"}}>Заказ и бонусы</p>
                            </Link>
                            <Link to="/order">
                                <p style={{color: pathname == "/order" ? "red" : "black"}}>Заказать</p>
                            </Link>
                            <Link to="/bonus">
                                <p style={{color: pathname == "/bonus" ? "red" : "black"}}>Доставка</p>
                            </Link>
                        </aside>

                        <aside className='lg:flex items-center gap-[56px] sm:hidden'>
                            <div>
                                <h1 className='flex gap-[8px] items-center'> <img src="src/assets/header/phone-fill.png" alt="" />+7 (495) 617-14-24</h1>
                                <p className='text-[12px] text-[#B7B7B7] text-end'>c 10:00 до 23:00</p>
                            </div>
                            <div className='flex item-center gap-[20px]'>
                                <img src="src/assets/header/cart (1).png" alt="" />
                                <img src="src/assets/header/profilie.png" alt="" />
                            </div>
                        </aside>

                    </nav>

                    <nav className='bg-[rgb(245,245,245)] flex items-center lg:justify-between lg:pl-[280px] lg:pr-[80px] lg:py-[15px] sm:flex-wrap sm:gap-[20px] sm:p-[12px]'>
                        <Card1 img={"src/assets/card/pizza.png"} p={"Пицца"} />
                        <Card1 img={"src/assets/card/sushi.png"} p={"Суши"} />
                        <Card1 img={"src/assets/card/rolle.png"} p={"Роллы"} />
                        <Card1 img={"src/assets/card/set.png"} p={"Сеты"} />
                        <Card1 img={"src/assets/card/wok.png"} p={"Wok"} />
                        <Card1 img={"src/assets/card/soup.png"} p={"Супы"} />
                        <Card1 img={"src/assets/card/Frame 12 (5).png"} p={"Салаты"} />
                        <Card1 img={"src/assets/card/dessert.png"} p={"Десерты"} />
                        <Card1 img={"src/assets/card/drink.png"} p={"Напитки"} />
                        <Card1 img={"src/assets/card/sale.png"} p={"Акции"} />
                    </nav>
                </header>

                <div>
                    <Outlet />
                </div>
            </div>

            {/* footer */}
            <footer className='relative bg-[#1B1B1B] text-white lg:p-[0] sm:p-[12px]'>
                <img src="src/assets/header/logo (5).png" className="lg:absolute lg:block z-1 lg:px-[80px] lg:mt-[-40px] sm:hidden" />
                <div className='lg:pl-[260px] lg:pr-[80px] lg:pt-[35px]'>
                    <div className='flex justify-between lg:items-start sm:flex-wrap sm:items-center'>
                        <img src="src/assets/header/logo (5).png" className="lg:hidden sm:block" />
                        <aside className='flex flex-col items-start gap-[12px]'>
                            <ul className='flex items-center lg:gap-[40px] sm:gap-[10px]'>
                                <li>О нас</li>
                                <li>Меню</li>
                                <li>Заказ и бонусы</li>
                            </ul>
                            <div className='flex items-center gap-[12px]'>
                                <img src="src/assets/footer/facebook-box-fill.png" alt="" />
                                <img src="src/assets/footer/instagram-fill.png" alt="" />
                                <img src="src/assets/footer/vk-social-logotype.png" alt="" />
                            </div>
                        </aside>

                        <aside className='flex flex-col items-start gap-[15px] sm:py-[30px]'>
                            <ul className='flex items-center gap-[40px] sm:flex-wrap'>
                                <li>Пицца</li>
                                <li>Суши</li>
                                <li>Роллы</li>
                                <li>Сеты</li>
                                <li>Wok</li>
                            </ul>
                            <ul className='flex items-center gap-[40px] sm:flex-wrap'>
                                <li>Супы</li>
                                <li>Салаты</li>
                                <li>Десерты</li>
                                <li>Напитки</li>
                                <li>Акции</li>
                            </ul>
                        </aside>

                        <aside>
                            <h1 className='text-[20px] font-[700] flex flex-col items-end'>+7 (495) 617-14-24  <p className='text-[12px]'>c 10:00 до 23:00</p></h1>
                        </aside>
                    </div>
                    <h1 className='lg:text-end sm:text-start sm:py-[10px] text-[12px] lg:py-[20px] text-[#7a7979]'>© Рикша. Все права защищены.</h1>
                </div>
            </footer>
        </>
    )
}

export default Layout
