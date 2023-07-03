import { marketStories } from "@/constants/feed";
import Image from "next/image";

const MarketStories = ({}) => {
  return (
    <div className=" h-[59vh] overflow-scroll md:h-[77vh] bg-gray-200 mt-2 ">
      <h4 className="font-bold text-red-500 hidden md:flex translate-x-10">
        MARKET STORIES
      </h4>
      {marketStories.map((m, i) => {
        return (
          <div
            key={i}
            className="relative w-[80vw] ml-10 mt-6 md:w-[35vw] mb-6"
          >
            <Image src={m.image} alt="market stories" className="w-[100%] " />
            <span className="absolute bottom-0 bg-black text-white bg-opacity-50 w-[100%] text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ea quibusdam dignissimos ullam architecto dolor?
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MarketStories;
