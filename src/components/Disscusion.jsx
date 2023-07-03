import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
import { logo, profile } from "../../public/assets";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { MdOutlineMyLocation } from "react-icons/md";
import { discussionForum } from "@/constants/feed";

const Disscusion = ({}) => {
  return (
    <div className="df-scroll pl-8 h-[59vh] md:h-[77vh] bg-gray-200 md:pl-14 overflow-scroll mt-2 ">
      <h4 className="font-bold text-red-500 hidden md:flex">
        DISSCUSSION FOURM
      </h4>
      <h4 className="font-bold">Filters</h4>
      {/* Filters Options */}
      <div className="flex bg-white p-2 w-[90vw] md:w-[55vw] rounded-md md:justify-around">
        <button className="bg-red-700 text-sm text-white p-1 rounded-2xl pl-2 pr-2  md:pl-4 md:pr-4 mr-1 ">
          Server 1
        </button>
        <button className="bg-sky-700 text-sm text-white p-1 rounded-2xl pl-2 pr-2  md:pl-4 md:pr-4 mr-1 ">
          Server 2
        </button>
        <button className="bg-yellow-500 text-sm text-white p-1 rounded-2xl pl-2 pr-2 md:pl-4 md:pr-4 mr-4 ">
          Server 3
        </button>
        <div className="flex items-center justify-center rounded-2xl bg-gray-200 border-solid border-2 p-1 cursor-pointer">
          <HiOutlineSearch />
          <input
            type="text"
            className="w-[6rem] bg-transparent outline-none pl-1"
            placeholder="Search here"
          />
        </div>
      </div>

      {/* Discussion forum  */}

      <div className="">
        {/* first forum */}
        <div className="bg-white mt-3 overflow-hidden w-[90vw] md:w-[55vw]  rounded-md">
          <Image src={logo} alt="logo" className="h-36 md:h-48  " />
        </div>
        {discussionForum.map((df, i) => {
          return (
            <div
              key={i}
              className={`bg-white ${
                df.id == 1 ? "" : " mt-5"
              } w-[90vw] md:w-[55vw] mb-5 rounded-md pt-3`}
            >
              {/* user info */}
              <div className="flex items-center ">
                <Image
                  src={df.image}
                  alt="user profile"
                  className="rounded-2xl  w-9 sm:w-8 ml-2 "
                />
                <span className="ml-3">{df.name}</span>
                <button
                  className={`ml-2 ${df.button_color} text-sm text-white p-1 rounded-2xl pl-2 pr-2`}
                >
                  Server 1
                </button>
              </div>
              {/* discription */}
              <div className="flex items-center justify-center w-[90%] ">
                <p className="text-[12px] text-justify ml-10  md:m-[auto]">
                  {df.description}
                </p>
              </div>
              {/* user actions */}
              <div>
                <div className="flex justify-around p-3">
                  <button className="flex">
                    {df.id == 1 ? (
                      <AiFillHeart className="text-red-600" />
                    ) : (
                      <AiOutlineHeart />
                    )}

                    <span className="text-[10px]">{df.likes}</span>
                  </button>
                  <button className="flex">
                    <MdOutlineMyLocation />
                    <span className="text-[10px]">{df.location}</span>
                  </button>
                  <button className="flex">
                    <BiComment />
                    <span className="text-[10px]">{df.comments}</span>
                  </button>
                  <button className="flex">
                    <AiOutlineShareAlt />
                    <span className="text-[10px]">Share</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Disscusion;
