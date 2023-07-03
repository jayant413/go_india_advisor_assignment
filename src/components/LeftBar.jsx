import { options, other_options } from "@/constants/leftbar_items";
import { BiSolidUser, BiSolidBell, BiNews } from "react-icons/bi";
import { MdMessage } from "react-icons/md";

const LeftBar = ({ selectedPage, setLeftBar, setSelectedPage }) => {
  return (
    <div className="bg-blue-800 z-20 text-white w-[15rem] absolute h-[72vh] md:h-[78vh] top-[10vh] md:top-[23vh]">
      <div className="flex justify-around items-center mt-5 mb-5">
        <span className="flex items-center cursor-default ">
          <BiSolidUser className="rounded-2xl mr-1 text-2xl" /> Hello, User
        </span>
        <span>
          <BiSolidBell className="text-2xl" />
        </span>
      </div>
      <hr />
      <div className="">
        <ul>
          {options.map((o, i) => {
            return (
              <li
                key={i}
                className={`cursor-pointer flex mb-2 mt-2 items-center w-[100%]  hover:bg-blue-600 pt-1 pb-1 pl-2 ${
                  selectedPage == o.select ? "bg-blue-900" : ""
                }`}
                onClick={() => {
                  setLeftBar(false);
                  setSelectedPage(o.select);
                }}
              >
                <span className="text-xl">
                  {i == 0 ? <MdMessage /> : ""}
                  {i == 1 ? <BiNews /> : ""}
                </span>
                <span className=" ml-2">{o.title}</span>
              </li>
            );
          })}
        </ul>
        <ul className="">
          {other_options.map((o, i) => {
            return (
              <li
                key={i}
                className="cursor-pointer flex mb-2 mt-2 items-center w-[100%]  hover:bg-blue-600 pt-1 pb-1 pl-7 "
              >
                <span className=" ml-2">{o.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
