"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  const links = [
    {
      name: "Mentors",
      href: "/admin/mentors",
    },
    {
      name: "Features",
      href: "/admin/features",
    },
    {
      name: "Lessons",
      href: "/admin/lessons",
    },
    {
      name: "Pricing",
      href: "/admin/pricing",
    },
    {
      name: "Enquiries",
      href: "/admin/contact",
    },
    {
      name: "Payments",
      href: "/admin/checkout",
    },
  ];

  let path = usePathname();

  function handleHamburger() {
    setIsOpen(!isOpen);
  }

  async function removeToken() {
    let res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      setTimeout(() => {
        router.push("/login");
      });
    } else {
      // will throw error
    }
  }

  return (
    <div className="text-white py-4 px-4 flex items-center gap-4 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 md:h-screen md:flex-col bg-gray-800 md:items-start md:fixed top-0 left-0">
      <button
        className="forMobi md:hidden"
        onClick={() => {
          handleHamburger();
        }}
      >
        <HiOutlineBars3 size={30} />
      </button>

      <Link href={"/admin"} className="logo font-semibold text-xl">
        Pixelated<span className="text-[#00FFFF]">Professor</span>
      </Link>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } overlay absolute top-0 left-0 h-screen w-screen bg-black/40 z-10`}
      ></div>
      <div
        className={`${
          isOpen ? "flex z-20 left-0" : "hidden left-32 "
        } flex-col sidebar absolute top-0  h-screen bg-white w-60 text-neutral-900 py-3 px-4 `}
      >
        <div className="header flex justify-start items-center">
          <button
            onClick={() => {
              handleHamburger();
            }}
          >
            {" "}
            <HiOutlineX size={30} />{" "}
          </button>
        </div>
        <ul className="flex flex-col space-y-4 font-medium px-2 mt-4">
          {links.map((link, key) => (
            <li
              key={key}
              onClick={() => {
                handleHamburger();
              }}
            >
              <Link href={link.href} className="">
                {link.name}
              </Link>
            </li>
          ))}
          <button className="bg-gray-800 text-white py-1 rounded-sm" onClick={()=>{removeToken()}}>logout</button>
        </ul>
      </div>
      <ul className="hidden md:flex flex-col gap-2 my-4 w-full">
        {links.map((link, key) => (
          <li key={key} className="">
            <Link
              href={link.href}
              className={` text-sm py-3 px-4 hover:bg-gray-700 block rounded-lg font-bold ${
                path == link.href
                  ? "text-[#00FFFF] bg-gray-700 "
                  : " text-sky-50"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <button
          className="text-white bg-[#00FFFF]/60 rounded-sm hover:bg-[#00FFFF]/50 px-4 py-1 "
          onClick={() => {
            removeToken();
          }}
        >
          logout
        </button>
      </ul>
    </div>
  );
}
