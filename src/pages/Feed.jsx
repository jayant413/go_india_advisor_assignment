import Disscusion from "@/components/Disscusion";
import LeftBar from "@/components/LeftBar";
import MarketStories from "@/components/MarketStories";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const Feed = ({ setSelectedPage, selectedPage, leftBar, setLeftBar }) => {
  return (
    <div className="bg-gray-200  md:h-[77vh]">
      {leftBar ? (
        <LeftBar
          selectedPage={selectedPage}
          leftBar={leftBar}
          setLeftBar={setLeftBar}
          setSelectedPage={setSelectedPage}
        />
      ) : (
        ""
      )}
      <div className="flex md:hidden">
        {selectedPage == "DF" ? <Disscusion /> : <MarketStories />}
      </div>
      <div className="hidden md:flex ">
        <Disscusion /> <MarketStories />
      </div>
      <button
        className={`absolute bg-blue-800 -left-1 top-[50vh] text-white text-md p-2  pt-8 pb-8 rounded-md ${
          leftBar ? "translate-x-[15rem]" : ""
        }`}
        onClick={() => setLeftBar(!leftBar)}
      >
        {leftBar ? <BsFillCaretLeftFill /> : <BsFillCaretRightFill />}
      </button>
      <button className="absolute bg-blue-900 bottom-20 right-10 text-white text-2xl p-3  hover:bg-blue-600 rounded-[50%]">
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Feed;
