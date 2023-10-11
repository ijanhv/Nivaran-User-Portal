"use client";
import { UserCircleIcon, UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";
import { RiProfileFill, RiProfileLine } from "react-icons/ri";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: "About",
      link: "/dashboard",
    },
    {
      name: "Register Complaint",
      link: "/dashboard/complaint",
    },
    {
      name: "View Status",
      link: "/dashboard/view",
    },
    {
      name: "Contact Higher Authorities",
      link: "/contact",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 lg:px-24">
      <div className="flex items-center  text-white mr-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold tracking-tight text-gray-100 sm:text-4xl">
          Nivaran
        </h1>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? "" : "hidden"
        } block justify-between flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm">
          {links.map((link) => (
            <Link
              href={link.link}
              className="block mt-4 lg:inline-block  lg:mt-0 text-white  mr-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <div className="flex text-sm items-center gap-3 py-2 cursor-pointer rounded text-white  mt-4 lg:mt-0">
            <UserCircleIcon className="h-10" />
            <div>John Doe</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Options;
