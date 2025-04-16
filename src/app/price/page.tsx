
import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'
import Switcher from '../components/switcher'
import { FiChevronRight } from 'react-icons/fi'

export default function Page() {
  const priceData = [
    {
      category: "Спорт",
      courses: [
        { name: "Волейбол", price: "50 BYN" },
        { name: "Футбол", price: "45 BYN" },
        { name: "Художественная гимнастика", price: "60 BYN" },
        { name: "Хореография", price: "55 BYN" },
        { name: "Настольный теннис", price: "40 BYN" }
      ]
    },
    {
      category: "Образование",
      courses: [
        { name: "Программирование", price: "65 BYN" },
        { name: "Робототехника", price: "70 BYN" },
        { name: "Английский язык", price: "55 BYN" },
        { name: "Подготовка к школе", price: "50 BYN" },
        { name: "Каллиграфия", price: "40 BYN" },
        { name: "Скорочтение", price: "45 BYN" },
        { name: "Дизайн и проектирование", price: "По запросу" }
      ]
    },
    {
      category: "Творчество",
      courses: [
        { name: "Изобразительное искусство", price: "45 BYN" },
        { name: "Декоративно-прикладное искусство", price: "50 BYN" },
        { name: "Авторское мастерство", price: "По запросу" },
        { name: "Клуб веселых и находчивых", price: "40 BYN" },
        { name: "Блогер-студия", price: "60 BYN" }
      ]
    },
    {
      category: "Другие направления",
      courses: [
        { name: "Подготовка к ЦТ", price: "65 BYN" },
        { name: "Логопед", price: "70 BYN" },
        { name: "Мастер-классы", price: "По запросу" }
      ]
    }
  ]

  return (
    <>
      <Navbar navlight={false} tagline={false}/>

      <section className="relative py-5 bg-slate-50 dark:bg-slate-800 mt-[74px]">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-2 items-center">
            <div className="lg:col-span-5 md:col-span-4">
              <h3 className="text-2xl md:leading-normal leading-normal font-semibold">Прейскурант</h3>
            </div>

            <div className="lg:col-span-7 md:col-span-8 md:text-end">
              <ul className="tracking-[0.5px] mb-0 inline-flex items-center">
                <li className="inline-block text-slate-400 dark:text-white/60 duration-500 ease-in-out hover:text-violet-600 dark:hover:text-white">
                  <Link href="/">МАКСИМУМ</Link>
                </li>
                <li className="inline-block text-slate-500 dark:text-white/60 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                  <FiChevronRight className="align-middle"/>
                </li>
                <li className="inline-block text-violet-600 dark:text-white" aria-current="page">Прейскурант</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Стоимость занятий</h3>
            <p className="text-slate-400 max-w-xl mx-auto">Ознакомьтесь с нашими ценами на все программы обучения</p>
          </div>

          {priceData.map((category, idx) => (
            <div className="mb-10" key={idx}>
              <h4 className="mb-6 text-xl font-semibold">{category.category}</h4>
              <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow shadow-slate-200 dark:shadow-slate-800 rounded-md">
                <table className="w-full text-start">
                  <thead>
                    <tr>
                      <th className="px-4 py-5 text-start">Название курса</th>
                      <th className="px-4 py-5 text-end">Стоимость за занятие</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.courses.map((course, i) => (
                      <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                        <td className="p-4">{course.name}</td>
                        <td className="p-4 text-end">{course.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 text-center mt-10">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-md">
              <h5 className="text-lg font-semibold mb-2">Способы оплаты:</h5>
              <p className="text-slate-400">ЕРИП, Наличные, Банковская карта</p>
              <p className="text-slate-400 mt-2">Для получения подробной информации о реквизитах для оплаты обращайтесь к администратору</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <ScrollToTop/>
      <Switcher/>
    </>
  )
}
