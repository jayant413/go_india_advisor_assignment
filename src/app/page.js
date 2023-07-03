'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Feed from "@/pages/Feed";
import { useState } from "react";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("DF")
  const [leftBar, setLeftBar] = useState(false);
  return (
    <div className="">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} className="fixed" setLeftBar={setLeftBar} />
      <Feed setSelectedPage={setSelectedPage} selectedPage={selectedPage} leftBar={leftBar} setLeftBar={setLeftBar} />
      <Footer />
    </div >
  )
}
