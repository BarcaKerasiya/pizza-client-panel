import { useState } from "react";
import Logo from "./assets/images/Logo.svg";
import pizzaimg from "./assets/images/Pizza Image.png";
import margheritaLogo from "./assets/images/Margherita-Traditional 1.png";
import pepperoni from "./assets/images/Pepperoni-Traditional 1.png";
import carbonara from "./assets/images/carbonara 2.jpg";
import Chicken from "./assets/images/Chicken BBQ.png";
import { IoMdBasket, IoMdCall, IoIosSearch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { GiChiliPepper } from "react-icons/gi";
import Select from "react-select";
import "./App.css";
import { FaHamburger, FaTimes } from "react-icons/fa";

const options = [
  { value: "bhuj", label: "Bhuj" },
  { value: "mumbai", label: "Mumbai" },
  { value: "gandhinagar", label: "Gandhinagar" },
];

const dietTypes = [
  { value: "vegan", label: "Vegan" },
  { value: "vegeterian", label: "Vegeterian" },
  { value: "non-vegeterian", label: "Non Vegeterian" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    // border: 'none', // Remove the border
    boxShadow: "none", // Remove the box-shadow
    // outline: 'none', // Remove the outline
  }),
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              <GoArrowRight className=" inline size-8 ml-2" />{" "}
            </button>
          </div>
        </div>
        <div className="w-[50%] mt-14  aspect-auto">
          <img
            src={pizzaimg}
            alt=""
            //  width={550} height={550}
          />
        </div>
      </section>

      <section className=" product-listing bg-[#FBF8F7] pt-8">
        <div className="container">
          <div id="search" className="flex justify-between pt-5 pb-5 w-full">
            <div className="bg-white flex justify-evenly p-2 rounded-lg w-[25%]">
              <button className="inline-flex items-center gap-2 rounded-md px-4 py-1 text-sm  border-x border-y !border-orange-500 font-bold hover:bg-[#FBF8F7]">
                Pizza
              </button>

              <button className="inline-flex items-center gap-2 rounded-md  px-4 py-1 text-sm  focus:relative">
                Softdrinks
              </button>

              <button className="inline-flex items-center gap-2 rounded-md  px-4 py-1 text-sm   focus:relative ">
                Sauces
              </button>
            </div>
            <div className="relative flex items-center w-[40%]">
              <IoIosSearch className="absolute left-5" />
              <input
                type="text"
                className="p-[10px] w-full rounded-lg focus:outline-none"
              />
            </div>

            <div className="w-[25%]">
              <Select
                classNamePrefix="react-select"
                options={dietTypes}
                style={customStyles}
              />
            </div>
          </div>
          <div className="product-listing ">
            <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
              <div className="h-[345px] w-[284px] rounded-lg bg-white flex justify-center ">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={margheritaLogo}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Margrita</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={pepperoni}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Pepperoni</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={carbonara}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Chicken</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={Chicken}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">BBQ Fresh</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={pepperoni}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Margarita</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={carbonara}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Margarita</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={margheritaLogo}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Margarita</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[345px] w-[284px] rounded-lg bg-white flex justify-center">
                <div className="w-[85%] ">
                  <div className="h-[65%]">
                    <GiChiliPepper
                      size={25}
                      className="ml-auto mt-3 mr-[-11px]"
                      color="red"
                    />
                    <img
                      src={Chicken}
                      alt=""
                      className="my-0 mx-auto mt-[10px]"
                    />
                    <div>
                      <h3 className="font-bold mb-2">Margarita</h3>
                      <p className="text-xs">
                        Juicy chicken fillet and crispy bacon combined with
                        signature tomato sauce, Mozzarella and onions
                      </p>
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
                      <p className="font-bold">$500</p>
                      <span className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-orange-500 mr-2 text-center text-white">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
