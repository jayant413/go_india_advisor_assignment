import Image from "next/image";
import { logo, profile } from "../../public/assets";
import { stockInfo, clients } from "../constants/info";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = ({ selectedPage, setSelectedPage, setLeftBar }) => {
  return (
    <div className="">
      {/* Header */}
      <div className="bg-white h-[4rem] justify-between sm:justify-around pt-5 flex">
        <div className="nav-img mt-[-5px]">
          <Image
            src={logo}
            alt="go india logo"
            className="w-20 ml-3 md:w-28 h-12 md:h-14 md:translate-y-[-10px]"
          />
        </div>
        <div className="nav-search flex border-gray-600 outline-none bg-slate-200 border-solid border-[0px] rounded-md md:w-96 lg:w-[28rem] sm:w-[15rem] w-[13rem] p-[1px] text-black justify-center items-center h-8">
          <input
            type="text"
            className="bg-slate-200 w-[80%] outline-none md:w-[90%]"
            placeholder="Search here"
          />
          <HiOutlineSearch className="cursor-pointer" />
        </div>
        <div className="nav-menu mr-10 md:mr-0">
          <ul className=" justify-between text-black font-semibold mr-8  md:flex hidden">
            <li className="ml-6 mt-1">
              <a href="">Contact Us</a>
            </li>
            <li className="ml-6 border-gray-500 border-solid border-2 rounded-md p-1">
              <button>SIGN UP</button>
            </li>
            <li className="ml-6 border-gray-500 border-solid border-2 rounded-md p-1">
              <button>SIGN IN</button>
            </li>
          </ul>
          <a
            href="https://github.com/jayant413/go_india_advisor_assignment"
            target="_blank"
          >
            <Image
              src={profile}
              alt="user profile"
              className="text-black bg-red-500 rounded-2xl  md:hidden w-9 sm:w-8 translate-x-2 "
            />
          </a>
        </div>
      </div>
      {/* Info  */}
      <div className="flex bg-black h-15 cursor-default items-center overflow-scroll p-1 text-white  ">
        {stockInfo.map((i, inx) => {
          return (
            <div className="text-sm flex " key={inx}>
              <ul className="flex ml-3">
                <li className="ml-2 text-blue-200">{i.name}</li>
                <li className="ml-2">{i.price}</li>
                <li
                  className={`ml-4 ${
                    i.change == "+" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {i.change == "+" ? "+" : "-"}
                  {i.percentageChange}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      {/* Clients  */}
      <h6 className="pl-4 font-semibold text-red-500">FEATURED COMPANIES</h6>
      <div className="bg-blue-300 items-center h-12 flex pl-2  overflow-auto">
        <div className="flex md:hidden">
          {clients.map((c, inx) => {
            return (
              <Image
                src={c.image}
                alt="clients"
                key={inx}
                className="w-10 h-10 rounded-[50%] border-solid border-red-500 border-2 mr-3 "
              />
            );
          })}
        </div>
        <div className="hidden md:flex">
          {clients.map((c, inx) => {
            return (
              <Image
                src={c.image}
                alt="clients"
                key={inx}
                className="w-[5rem] h-10 ml-9 "
              />
            );
          })}
        </div>
      </div>
      {/* Mobile Switch option */}
      <div className="flex md:hidden text-white">
        <button
          className={`w-[50%] p-1 flex  justify-center ${
            selectedPage == "DF"
              ? "bg-blue-900 border-b-red-500 border-solid border-b-2"
              : "bg-blue-600"
          }`}
          onClick={() => {
            setSelectedPage("DF");
            setLeftBar(false);
          }}
        >
          Discussion Fourm
        </button>
        <button
          className={`w-[50%] p-1 flex  justify-center ${
            selectedPage == "MS"
              ? "bg-blue-900 border-b-red-500 border-solid border-b-2"
              : "bg-blue-600"
          }`}
          onClick={() => {
            setSelectedPage("MS");
            setLeftBar(false);
          }}
        >
          Market Stories
        </button>
      </div>
    </div>
  );
};

export default Navbar;
