import { useState } from "react";
import Logo from "./assets/images/Logo.svg";
import pizzaimg from "./assets/images/Pizza Image.png";
import { IoMdBasket, IoMdCall, IoIosSearch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { GiChiliPepper } from "react-icons/gi";
import Select from "react-select";
import "./App.css";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { dietCategories, dietTypes, options, pizzaList } from "./data";

const customStyles = {
  control: (provided) => ({
    ...provided,
    // border: 'none', // Remove the border
    boxShadow: "none", // Remove the box-shadow
    // outline: 'none', // Remove the outline
  }),
};

function App() {
  const [data, setData] = useState(pizzaList);
  const [isOpen, setIsOpen] = useState(false);
  const [dietCategory, setDietCategory] = useState(dietCategories[0].value);
  console.log("diet", dietCategory);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDietCategory = (item) => {
    setDietCategory(item.value);
    console.log("item", item);
  };
  return (
    <div className="font-manrope font-medium">
      <header>
        <div className="container flex  justify-between items-center h-16 ">
          <div className="w-full md:w-[50%] flex items-center justify-between ">
            <img src={Logo} alt="" className="cursor-pointer" />
            <Select
              className="pl-1"
              classNamePrefix="react-select"
              options={options}
            />
            <FaHamburger
              size={36}
              className="text-orange-500 md:hidden"
              onClick={() => toggleMenu()}
            />
          </div>
          <div
            className={`hidden  w-full sm:hidden md:flex  justify-end  bg-white  z-50`}
          >
            <div className="h-[80%] w-[80%] md:w-[100%] lg:w-[80%]  flex  justify-between items-center">
              <div className="flex  h-[50%] justify-between items-center">
                <a href="#">Menu</a>
                <a href="#">Orders</a>
                <a href="#">Login</a>
                <IoMdBasket
                  size={24}
                  className="basket cursor-pointer text-orange-500 !pt-0"
                />
              </div>
              <div className="flex">
                <IoMdCall
                  size={96}
                  className="call cursor-pointer text-orange-500 !pt-0"
                />
                <span className="">+91 8780410278</span>
              </div>
            </div>
          </div>

          {/* mobile menu  */}
          <div
            className={`fixed top-0 left-0 h-screen w-full flex flex-col bg-white transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden z-50`}
          >
            <div className="flex justify-end">
              {" "}
              <FaTimes
                size={24}
                onClick={() => toggleMenu()}
                className="block md:hidden top-0 right-0 mr-8 mt-8 text-orange-500"
              />
            </div>
            <div className="h-[80%] flex flex-col justify-evenly items-center">
              <div className="flex flex-col h-[50%] justify-around items-center">
                <a href="#">Menu</a>
                <a href="#">Orders</a>
                <a href="#">Login</a>
                <IoMdBasket
                  size={96}
                  className="basket cursor-pointer text-orange-500"
                />
              </div>
              <div className="flex">
                <IoMdCall
                  size={96}
                  className="call cursor-pointer text-orange-500"
                />
                <span className="">+91 8780410278</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        id="hero"
        className="flex flex-col-reverse items-center container md:flex-row"
      >
        <div className="flex flex-col w-[50%] p-4 mt-8">
          <h1 className="text-4xl font-bold mt-0 font-manrope leading-10 text-gray-700  lg:text-5xl">
            Get yummy pizza <br /> in
            <p className="text-4xl font-bold  font-manrope leading-10 inline ml-3 text-orange-500">
              30 min
            </p>
          </h1>
          <p className="mt-3 text-xl font-manrope font-8 md:text-2xl ">
            No need to pay if, order took <br /> more than 30 min
          </p>
          <div className="mt-2">
            <button className="border-4  font-manrope text-white pr-2 pl-2   h-10 bg-orange-500 font-semibold text-xs mt-1 rounded-2xl border-orange-500 ">
              Order Now
              <GoArrowRight className=" inline size-3 md:size-4 " />{" "}
            </button>
          </div>
        </div>
        <div className="w-[50%] mt-9 aspect-square">
          <img
            src={pizzaimg}
            alt=""
            //  width={200} height={200}
          />
        </div>
      </section>

      <section className=" product-listing bg-[#FBF8F7] py-16">
        <div className="container">
          <div
            id="search"
            className="flex justify-between items-center w-full flex-col-reverse gap-4 md:flex-row"
          >
            <div className="bg-white flex justify-evenly rounded-lg w-[100%]">
              {dietCategories.map((item, index) => {
                // console.log(item.value);
                return (
                  <button
                    onClick={() => handleDietCategory(item)}
                    key={item + index}
                    className={`${
                      item.value === dietCategory
                        ? "border-x border-y !border-orange-500"
                        : ""
                    } inline-flex items-center gap-3 rounded-md px-4 py-1 text-sm  font-bold hover:bg-[#FBF8F7]`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="relative flex items-center w-[100%]">
              <IoIosSearch className="absolute left-5" />
              <input
                type="text"
                className="p-[10px] w-full rounded-lg focus:outline-none"
              />
            </div>
            <div className="w-[100%] ">
              <Select
                classNamePrefix="react-select"
                options={dietTypes}
                style={customStyles}
              />
            </div>
          </div>
          <div className="product-listing pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4   gap-8 items-center place-items-center">
              {data.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      className="h-[345px] w-[284px] rounded-lg bg-white flex justify-center "
                    >
                      <div className="w-[85%] ">
                        <div className="h-[65%]">
                          <GiChiliPepper
                            size={25}
                            className="ml-auto mt-3 mr-[-11px]"
                            color="red"
                          />
                          <img
                            src={item.image}
                            alt=""
                            className="my-0 mx-auto mt-[10px]"
                          />
                          <div>
                            <h3 className="font-bold mb-2">{item.name}</h3>
                            <p className="text-xs">{item.description}</p>
                          </div>
                        </div>
                        <div className="h-[35%] flex justify-evenly flex-col">
                          <div className="flex">
                            <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 !mr-2 text-center text-white !text-sm">
                              S
                            </span>
                            <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#EDEDED] !mr-2 text-center !text-sm">
                              M
                            </span>
                            <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#EDEDED] !mr-2 text-center !text-sm">
                              L
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold">{item.price}</p>
                            <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <footer className="h-16 bg-[#361904]">
        <div className="container flex items-center h-full">
          <p className="text-white">All rights reserved @Pizza by Barca 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
