import React, { useContext, useEffect, useState } from "react";

// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";

// import logo
import Logo from "../assets/img/logo.svg";
//import icons
import { CgMenuRight, CgClose } from "react-icons/cg";
import { BsBag } from "react-icons/bs";

// import data
import { navigation } from "../data";
// import components
import NavMobile from "./NavMobile";

const Header = () => {
  // header state
  const [bg, setBg] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        // if bg is true
        bg
          ? "bg-primary py-4 lg:py-6"
          : // if bg is false
            "bg-none"
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl text-white" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>

          {/* logo */}
          <a href="/">
            <img className="h-6 lg:h-8" src={Logo} alt="" />
          </a>
          {/* menu icon */}
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden text-2xl lg:text-3xl text-white cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "right-0" : "-right-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
