"use client";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

import { FiMessageSquare, FiFolder } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {name: "About Nivaran", link: "/dashboard", icon: <MdOutlineDashboard />},
    { name: "View Complaint Status", link: "/dashboard/status", icon: <TbReportAnalytics /> },
    { name: "Contact Higher Authority", link: "/", icon: <FiMessageSquare /> },
    { name: "Register a Complaint", link: "/dashboard/complaint", icon: <FiFolder /> },
    { name: "Setting", link: "/", icon: <RiSettings4Line /> },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="gap-6 h-full">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <h1 className="m-2 text-3xl text-gray-100 font-semibold tracking-widest">
          {open ? "NIVARAN" : "N"}
        </h1>
        <div className="mt-8 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
            >
              <div className="text-lg">{menu.icon}</div>
              <h2
                style={{
                  transitionDelay: `${i + 1}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
