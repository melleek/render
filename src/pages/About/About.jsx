import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card2 from '../../components/Card2'
import Card3 from '../../components/Card3'
import Card4 from '../../components/Card4'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card5 from '../../components/Card5'


//Tabs
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function About() {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <main className='bg-[rgb(251,251,251)] lg:py-[80px]'>

                {/* section 1 */}
                <section className='bg-[#F5F9FA] lg:mx-[120px] lg:rounded-[30px] sm:my-[40px] '>
                    <div className='flex items-center justify-between sm:flex-wrap'>
                        <img src="src/assets/footer/arr 1.png" className="lg:ml-[-60px] sm:hidden lg:block" />
                        <aside className='lg:pl-[60px] sm:p-[12px] '>
                            <h1 className='lg:text-[40px] sm:text-[32px] font-[700] lg:w-[491px]'>Калифорния <span className='text-[#E07153]'>в подарок</span> при первом заказе</h1>
                            <p>от 1500 ₽ </p>
                        </aside>
                        <aside>
                            <img src="src/assets/section1/IMG.png" alt="" />
                        </aside>
                        <img src="src/assets/footer/arr 2.png" className="lg:mr-[-60px] lg:block sm:hidden" />
                    </div>
                </section>

                {/* section 2 */}
                <section className='lg:pr-[40px] lg:py-[80px] '>
                    <img src="src/assets/section2/bg clock.png" className="sm:block lg:hidden" />
                    <div className='flex items-center lg:justify-between sm:flex-wrap sm:justify-center'>
                        <aside>
                            <img src="src/assets/section2/bg clock.png" className="lg:block sm:hidden" />
                        </aside>
                        <aside className='flex items-center gap-[60px] lg:ml-[-150px] sm:flex-wrap sm:justify-center'>
                            <Card2 ig={"src/assets/section2/card2/Linked Path Group (3).png"} img={"src/assets/section2/card2/ic.png"} h2={"доставка"} p={"при заказе от 600 ₽ "} />
                            <Card2 ig={"src/assets/section2/card2/Linked Path Group (2).png"} img={"src/assets/section2/card2/ic (1).png"} h2={"за 60 мин"} p={"или проморол за опоздание"} />
                            <Card2 ig={"src/assets/section2/card2/Linked Path Group (1).png"} img={"src/assets/section2/card2/ic (2).png"} h2={"бонусы"} p={"бонусная система 1 ₽ = 1 бонус"} />
                            <Card2 ig={"src/assets/section2/card2/Linked Path Group.png"} img={"src/assets/section2/card2/ic (3).png"} h2={"продукты"} p={"Никаких заготовок!"} />
                        </aside>
                        <aside className='lg:p-[0] sm:py-[60px]'>
                            <button className="w-[132px] h-[132px] rounded-[50%] text-white font-[700] bg-[#E07153] flex flex-col items-center py-[40px] gap-[5px]"><img src="src/assets/section2/arr.png" />Наверх</button>
                        </aside>
                    </div>
                </section>

                {/* secion 3 */}
                <section >
                    <div className='flex items-start gap-[15px] lg:px-[280px] sm:p-[12px]'>
                        <img src="src/assets/section3/ill roll 1.png" className="mt-[-30px]" />
                        <div className='flex items-center lg:gap-[42px] sm:flex-wrap '>
                            <h1 className='lg:text-[48px] sm:text-[42px] font-[600]'>Топ позиции</h1>
                            <h1 className='uppercase text-[48px] text-[#B7B7B7]'>Новинки</h1>
                        </div>
                    </div>

                    <aside className='flex lg:px-[80px] lg:py-[60px] justify-between sm:flex-wrap sm:p-[12px] sm:gap-[40px]'>
                        <Card3
                            img={"src/assets/section3/card3/img (1).png"}
                            role={"src/assets/section3/card3/Frame 56.png"}
                            sushi={"src/assets/section3/card3/Group 15.png"}
                            p1={"Острое"}
                            p2={"Горячий ролл"}
                            as={"src/assets/section3/card3/top.png"}
                            t1={"200 грамм 🔴 130 Ккал"}
                            t2={"Ролл Филадельфия"}
                            t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
                            t4={"269 ₽"}
                            btn={"Заказать"}
                        />
                        <Card3
                            img={"src/assets/section3/card3/img (2).png"}
                            sushi={"src/assets/section3/card3/Group 15.png"}
                            p2={"Горячий ролл"}
                            as={"src/assets/section3/card3/top.png"}
                            t1={"200 грамм 🔴 130 Ккал"}
                            t2={"Ролл Филадельфия"}
                            t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
                            t4={"269 ₽"}
                            btn={"Заказать"}
                        />
                        <Card3
                            img={"src/assets/section3/card3/img (1).png"}
                            role={"src/assets/section3/card3/Frame 56.png"}
                            sushi={"src/assets/section3/card3/Group 15.png"}
                            p1={"Острое"}
                            p2={"Горячий ролл"}
                            as={"src/assets/section3/card3/top.png"}
                            t1={"200 грамм 🔴 130 Ккал"}
                            t2={"Ролл Филадельфия"}
                            t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
                            t4={"269 ₽"}
                            btn={"Заказать"}
                        />
                    </aside>
                </section>

                {/* section 4 */}
                <section className='bg-[#F5F9FA]'>
                    <main className='flex items-start lg:py-[80px] sm:flex-wrap sm:py-[50px]'>
                        <aside>
                            <img src="src/assets/section 4/bg (7).png" alt="" />
                        </aside>
                        <aside className='flex items-center flex-col gap-[10px] sm:p-[5px]'>
                            <div className='flex items-center gap-[10px]'>
                                <h1 className='font-[700] text-[48px]'>Комбо меню</h1>
                                <img src="src/assets/section 4/iil roll 2.png" alt="" />
                            </div>
                            <aside>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:w-[400px] sm:w-[390px]">

                                    <SwiperSlide>
                                        <Card4
                                            img={"src/assets/section 4/card5/img (4).png"}
                                            t5={"200 грамм 🔸 130 Ккал"}
                                            t6={"Комбо микс"}
                                            t7={"Пицца Баварская; Сет Фирменный;"}
                                            t8={"1 319 ₽ "}
                                            btn={"Заказать"}
                                            t9={"+150 ₽  "}
                                            t10={"30 см"}
                                            t11={"50 см"}
                                            t12={"1 499 ₽"}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card4

                                            img={"src/assets/section 4/card5/img (5).png"}
                                            t5={"200 грамм 🔸 130 Ккал"}
                                            t6={"Дабл пицца"}
                                            t7={"Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)"}
                                            t8={"899 ₽"}
                                            btn={"Заказать"}
                                            t9={"+150 ₽"}
                                            t10={"30 см"}
                                            t11={"50 см"}
                                            t12={"999 ₽"}
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card4
                                            img={"src/assets/section 4/card5/img (6).png"}
                                            t5={"200 грамм 🔸 130 Ккал"}
                                            t6={"Комбо Small party"}
                                            t7={"Лосось, сыр Филадельфия, огурец, авокадо"}
                                            t8={"2 111 ₽"}
                                            btn={"Заказать"}
                                            t9={"+150 ₽ "}
                                            t10={"30 см"}
                                            t11={"50 см"}
                                            t12={"1 799 ₽ "}
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </aside>
                        </aside>
                    </main>
                </section>

                {/* section 5 */}
                <section className='lg:py-[120px] lg:px-[80px] sm:py-[60px]'>
                    <div className='flex items-center gap-[16px] sm:justify-center lg:justify-start'>
                        <h1 className='text-[48px] font-[700]'>Акции</h1>
                        <img src="src/assets/section5/ill roll 3.png" alt="" />
                    </div>
                    <aside className='flex item-center justify-between py-[60px] sm:flex-wrap sm:p-[3px] sm:gap-[40px]'>
                        <div className='bg-[#D2F6FF] w-[392px] rounded-[8px]'>
                            <Card5
                                h1={"Празднуй день рождения вместе с нами"}
                                p={"Ролл в подарок при заказе в день рождения"}
                                img={"src/assets/section5/card5/img (7).png"} />
                        </div>
                        <div className='bg-[#FFD8DA] w-[392px] rounded-[8px]'>
                            <Card5
                                h1={"Доставим заказ за 60 мин"}
                                p={"или проморол за опоздание"}
                                img={"src/assets/section5/card5/img (8).png"} />
                        </div>
                        <div className='bg-[#DBFFCF] w-[392px] rounded-[8px]'>
                            <Card5
                                h1={"Приведи друга "}
                                p={"и получи 250 ₽ на бонусный счет"}
                                img={"src/assets/section5/card5/img (9).png"} />
                        </div>
                    </aside>
                </section>

                {/* section 6 */}
                <section className='lg:py-[60px] lg:px-[80px] sm:py-[60px] sm:p-[8px]'>
                    <div className='flex items-center gap-[16px] sm:justify-center lg:justify-start'>
                        <h1 className='text-[48px] font-[700]'>Категории</h1>
                        <img src="src/assets/section6/ill roll 4.png" alt="" />
                    </div>

                    <Box>
                        <TabContext value={value}>
                            <TabList
                                className="py-[40px]"
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab label="Пицца" value="1" icon={<img src="src/assets/card/pizza.png" alt="pizza icon" />} />
                                <Tab label="Суши" value="2" icon={<img src="src/assets/card/sushi.png" alt="pizza icon" />} />
                                <Tab label="Роллы" value="3" icon={<img src="src/assets/card/rolle.png" alt="pizza icon" />} />
                                <Tab label="Wok" value="4" icon={<img src="src/assets/card/wok.png" alt="pizza icon" />} />
                                <Tab label="Супы" value="5" icon={<img src="src/assets/card/soup.png" alt="pizza icon" />} />
                                <Tab label="Салаты" value="6" icon={<img src="src/assets/card/Frame 12 (5).png" alt="pizza icon" />} />
                                <Tab label="Десерты" value="7" icon={<img src="src/assets/card/dessert.png" alt="pizza icon" />} />
                                <Tab label="Напитки" value="8" icon={<img src="src/assets/card/drink.png" alt="pizza icon" />} />
                                <Tab label="Акции" value="9" icon={<img src="src/assets/card/sale.png" alt="pizza icon" />} />
                            </TabList>

                            <TabPanel value="1" className='flex flex-wrap gap-[30px]'>
                                <Card4
                                    img={"src/assets/section6/img (11).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Рикша”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                                <Card4
                                    img={"src/assets/section6/img (13).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Парма”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                                <Card4
                                    img={"src/assets/section6/img (14).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Парма”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                                <Card4
                                    img={"src/assets/section6/img (15).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Парма”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                                <Card4
                                    img={"src/assets/section6/img (16).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Парма”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                                <Card4
                                    img={"src/assets/section6/img (17).png"}
                                    t5={"450 грамм 🔸 130 Ккал"}
                                    t6={"Пицца “Парма”"}
                                    t7={"соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто."}
                                    t8={"590 ₽ "}
                                    btn={"Заказать"}
                                    t9={"+150 ₽  "}
                                    t10={"30 см"}
                                    t11={"50 см"}
                                    t12={"510 ₽ "}
                                />
                            </TabPanel>

                            <TabPanel value="2">
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                            <TabPanel value="4">Item Three</TabPanel>
                            <TabPanel value="5">Item Three</TabPanel>
                            <TabPanel value="6">Item Three</TabPanel>
                            <TabPanel value="7">Item Three</TabPanel>
                            <TabPanel value="8">Item Three</TabPanel>
                            <TabPanel value="9">Item Three</TabPanel>

                        </TabContext>
                    </Box>
                </section>

                {/* section 7 */}
                <section className='lg:py-[60px] lg:px-[80px] sm:py-[60px] sm:p-[8px]'>
                    <main className='flex justify-between gap-[46px] sm:flex-wrap'>
                        <aside className='flex flex-col gap-[30px]'>
                            <div className='flex items-center gap-[16px] sm:justify-center lg:justify-start'>
                                <h1 className='text-[48px] font-[700]'>О компании</h1>
                                <img src="src/assets/section7/ill roll 5.png" alt="" />
                            </div>
                            <div className="lg:w-[553px] md:w-[553px] flex flex-col gap-[0px]">
                                <p>Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов  и по оригинальным рецептам Нашего шеф-повара. </p>
                                <p>Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! вас есть возможность сделать предварительный заказ на определенный день и время. </p>
                            </div>
                        </aside>

                        <aside>
                            <img src="src/assets/section7/img 1.png" />
                        </aside>
                    </main>
                </section>

                {/* section 8 */}
                <section className='lg:py-[60px] lg:px-[150px] sm:py-[60px] sm:p-[8px]'>
                    <aside>
                        <div className='flex items-center gap-[16px] sm:justify-center lg:justify-between  sm:flex-wrap'>
                            <h1 className='text-[40px] font-[700] lg:w-[468px] lg:text-start sm:text-center'>А вы уже подписались на наш <span className='text-[#E07153]'>Instagram?</span></h1>
                            <button className='flex items-center bg-[#E07153] text-white p-[10px] gap-[15px] rounded-[5px] px-[40px]'><img src="src/assets/section7/instagram-line.png" />@riksha_sushi</button>
                        </div>
                    </aside>

                    <aside className='flex items-center gap-[10px] py-[30px]  sm:flex-wrap sm:justify-center lg:justify-start'>
                        <aside className='flex flex-col items-start gap-[10px] sm:flex-wrap '>
                            <div className='flex items-center gap-[10px] sm:flex-wrap sm:justify-center lg:justify-start'>
                                <img src="src/assets/section7/grid/1.png" alt="" />
                                <img src="src/assets/section7/grid/2.png" alt="" />
                                <img src="src/assets/section7/grid/3 (1).png" alt="" />
                            </div>
                            <div className='flex items-center gap-[10px]  sm:flex-wrap lg:justify-start sm:justify-center'>
                                <img src="src/assets/section7/grid/4.png" alt="" />
                                <img src="src/assets/section7/grid/5.png" alt="" />
                            </div>
                        </aside>
                        <img src="src/assets/section7/grid/6.png" alt="" />

                    </aside>
                </section>
            </main>
        </>
    )
}

export default About
