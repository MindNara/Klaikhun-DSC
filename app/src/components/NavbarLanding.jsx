import BGLanding from "../assets/BGLanding.png";
import { useState } from "react";

const Navbar = () => (
  <nav className="w-full ">
    {/*                           BG                           */}
    <section className="absolute h-screen w-full">
      <img src={BGLanding} alt="ImgLanding" class="absolute w-full h-4/5 max-2xl:h-5/6" />
      <div class="relative container mx-auto mt-6 flex flex-col justify-center h-4/6">
        <span class="text-7xl max-2xl:text-6xl font-medium">Find And Book</span>
        <span class="text-7xl max-2xl:text-6xl font-light mt-2">A Great Experience</span>
      </div>
    </section>

    {/*                      logo / menu                       */}
    <div className="container flex flex-row items-center justify-between mx-auto pt-8">
      <div className="items-center justify-between space-x-20 w-full md:flex md:w-auto z-10">
        <a href="/" className="flex items-center">
          <i class="fab fa-slack fa-2x" alt="Logo"></i>
          <span className="self-center text-2xl font-bold whitespace-nowrap ml-2">
            KLAIKHUN
          </span>
        </a>

        <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-base md:font-medium md:border-0">
          <li>
            <a
              href="/hotels"
              className="block py-2 pl-3 pr-4  text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black rounded md:p-0"
              aria-current="page"
            >
              Hotels
            </a>
          </li>
          <li>
            <a
              href="/flights"
              className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0"
            >
              Flights
            </a>
          </li>
          <li>
            <a
              href="/deals"
              className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0"
            >
              Deals
            </a>
          </li>
        </ul>
      </div>

      {/*                         profile card                            */}
      {/* <div className="flex items-center md:order-2 z-10">
        <span className="text-base font-medium mr-5">Hi, Member Name</span>
        <button className="flex mr-3 text-sm md:mr-0">
          <div className="block bg-black rounded-lg h-10 w-10"></div>
        </button>
      </div> */}

      {/*                         sign in/ sign up                        */}
      <div class="flex items-center md:order-2 z-10 space-x-12">
        <a
          href="/Signin"
          class="md:p-0 text-gray-600 md:hover:bg-transparent md:hover:text-black font-medium"
        >
          Sign In
        </a>
        <a href="/Signup" class="py-2 px-5 rounded-xl text-white bg-black font-light">
          Sign Up
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
