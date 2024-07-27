import { useState } from 'react'
import Logo from './assets/images/Logo.svg'
import pizzaimg from './assets/images/Pizza Image.png'
import { IoMdBasket, IoMdCall, IoIosSearch } from 'react-icons/io'
import { GoArrowRight } from 'react-icons/go'
import Select from 'react-select'
import chroma from 'chroma-js'
import './App.css'

const options = [
  { value: 'bhuj', label: 'Bhuj' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'gandhinagar', label: 'Gandhinagar' },
]

const dietTypes = [
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegeterian', label: 'Vegeterian' },
  { value: 'non-vegeterian', label: 'Non Vegeterian' },
]

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    // border: 'none', // Remove the border
    boxShadow: 'none', // Remove the box-shadow
    // outline: 'none', // Remove the outline
  }),
}
function App() {
  return (
    <div className="font-manrope font-medium">
      <header>
        <div className="containe flex justify-between items-center h-16 ">
          <div className="w-[50%] flex ">
            <img src={Logo} alt="" className="cursor-pointer" />
            <Select
              className="pl-10"
              classNamePrefix="react-select"
              options={options}
            />
          </div>
          <div className="w-[50%] flex justify-between ">
            <div className="flex">
              <a href="#">Menu</a>
              <a href="#">Orders</a>
              <a href="#">Login</a>
              <IoMdBasket className="basket cursor-pointer" />
            </div>
            <div className="flex">
              <IoMdCall className="call cursor-pointer" />
              <span className="">+91 8780410278</span>
            </div>
          </div>
        </div>
      </header>
      <section id="hero" className="flex container">
        <div className="flex flex-col w-[50%] p-4 mt-20">
          <h1 className="text-6xl font-bold mt-20 font-manrope leading-tight text-gray-700">
            Get yummy pizza <br /> in
            <p className="text-5xl font-bold  font-manrope leading-tight inline ml-3 text-orange-500">
              30 min
            </p>
          </h1>
          <p className="mt-3 text-2xl font-manrope font-light">
            No need to pay if, order took <br /> more than 30 min
          </p>
          <div className="mt-2">
            <button className="border-4 font-manrope text-white pr-6 pl-3  h-16 bg-orange-500 font-semibold text-2xl mt-3 rounded-2xl border-orange-500 ">
              Order Now
              <GoArrowRight className=" inline size-8 ml-2" />{' '}
            </button>
          </div>
        </div>
        <div className="w-[50%] mt-14">
          <img src={pizzaimg} alt="" width={550} height={550} />
        </div>
      </section>

     
    </div>
  )
}

export default App
