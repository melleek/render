import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card3 from '../../components/Card3';

const currencies = [
  {
    value: 'All Food',
    label: 'Food',
  },
  {
    value: '1',
    label: 'Лосось',
  },
  {
    value: '2',
    label: 'Тунец',
  },
  {
    value: '3',
    label: 'Угорь',
  },
  {
    value: '4',
    label: 'Креветка',
  },
  {
    value: '5',
    label: 'Краб',
  },
  {
    value: '6',
    label: 'Мидии',
  },
  {
    value: '7',
    label: 'Острое',
  },

  {
    value: '8',
    label: 'Vegan',
  },
  {
    value: '9',
    label: 'ТОП-позиции',
  },
  {
    value: '10',
    label: 'Новинки',
  },
  {
    value: '11',
    label: 'Скидки',
  },
];


function Menu() {
  return (
    <div>
      <main>
        {/* section 1*/}
        <section className='bg-[rgb(251,251,251) lg:px-[80px] lg:py-[80px] sm:p-[12px] flex flex-col itemsstart gap-[24px]'>
          <div className='flex items-center gap-[8px]'>
            <h1>Главная</h1>
            <p>//</p>
            <p>Суши</p>
          </div>
          <h1 className='text-[40px] font-[700]'>Суши</h1>
          <div className='flex items-end'>
            <aside className='flex flex-wrap items-center gap-[10px]'>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E07153] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/Rectangle 8.png" alt="" />Лосось</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (1).png" alt="" />Тунец</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (2).png" alt="" />Угорь</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (3).png" alt="" />Креветка</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (4).png" alt="" />Краб</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (5).png" alt="" />Мидии</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/sushi (6).png" alt="" />Острое</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/Frame 39.png" alt="" />Vegan</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/top (1).png" alt="" />ТОП-позиции</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/new.png" alt="" />Новинки</button>
              <button className='border-[1px] flex items-center gap-[8px] border-[#E8E8E8] py-[10px] rounded-[8px] px-[20px]'><img src="src/assets/Menu/btn/new (1).png" alt="" />Скидки</button>
            </aside>
            <aside>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  defaultValue="All Food"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </aside>
          </div>

          <main className='lg:py-[60px] flex flex-wrap gap-[20px]'>
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/Frame 39.png"}
              p2={"Vegan"}
              as={"src/assets/section3/card3/top.png"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Филадельфия"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"219 ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (2).png"}
              sushi={"src/assets/Menu/btn/sushi (2).png"}
              p2={"Угорь"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Сливочная креветка"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"219 ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/sushi (6).png"}
              p2={"Острое"}
              as={"src/assets/Menu/btn/new (2).png"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Чикен энд Чиз"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"199  ₽ "}
              btn={"Заказать"}
            />

            {/* // */}
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/sushi (7).png"}
              p2={"Горячий ролл"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Филадельфия"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"219 ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (2).png"}
              sushi={"src/assets/Menu/btn/sushi (3).png"}
              p2={" Креветка"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Сливочная креветка"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"219 ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/sushi (5).png"}
              p2={"Мидии"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Чикен энд Чиз"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"199  ₽ "}
              btn={"Заказать"}
            />

            {/* /// */}
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/sushi (5).png"}
              p2={"Мидии"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Чикен энд Чиз"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"199  ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (2).png"}
              sushi={"src/assets/Menu/btn/sushi (3).png"}
              p2={" Креветка"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Сливочная креветка"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"219 ₽ "}
              btn={"Заказать"}
            />
            <Card3
              img={"src/assets/section3/card3/img (1).png"}
              sushi={"src/assets/Menu/btn/sushi (6).png"}
              p2={"Острое"}
              as={"src/assets/Menu/btn/new (2).png"}
              t1={"200 грамм 🔸 130 Ккал"}
              t2={"Ролл Чикен энд Чиз"}
              t3={"Лосось, сыр Филадельфия, огурец, авокадо"}
              t4={"199  ₽ "}
              btn={"Заказать"}
            />
          </main>
        </section>

        {/* section 2 */}
        <section className='lg:py-[60px] lg:px-[80px] sm:py-[60px] sm:p-[8px]'>
          <main className='flex justify-between items-center gap-[46px] sm:flex-wrap'>
            <aside className='flex flex-col gap-[30px]'>
              <div className='flex items-center gap-[16px] sm:justify-center lg:justify-start'>
                <h1 className='text-[32px] font-[700] lg:text-start sm:text-center'>Доставка суши и роллов в Краснодаре</h1>
              </div>
              <div className="lg:w-[553px] md:w-[553px] flex flex-col gap-[15px]">
                <p>Почему роллы с океанической рыбой, овощами и японскими деликаттесами стали любимым блюдом многих россиян? Во-первых, это очень полезно. Суши – это идеально сбалансированная пища, многое на полезные жиры, белки и витамины. Во-вторых, суше хорошо утоляют голод.</p>
                <p>Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара. </p>
                <p>Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время. </p>
              </div>
            </aside>

            <aside>
              <img src="src/assets/section7/img 1.png" />
            </aside>
          </main>
        </section>
      </main>
    </div>
  )
}

export default Menu
