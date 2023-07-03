import { footerIcons } from "@/constants/footer_icon";
import { useState } from "react";

const Footer = ({}) => {
  const [selected, setSelected] = useState(2);
  return (
    <div className="bg-blue-700 h-[9vh] text-white md:hidden pt-4">
      <ul className="flex justify-around text-3xl ">
        {footerIcons.map((fi, i) => {
          return (
            <li
              key={i}
              className={` border-solid border-red-500 pb-1 ${
                selected == i ? "border-b-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <fi.icon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
