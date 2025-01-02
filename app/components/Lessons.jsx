"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa6";

export default function Lessons() {
  const [AllLessons, setAllLessons] = useState(undefined);
  const [loaded, setLoaded] = useState(false);

  const getAllLessons = async () => {
    let res = await fetch("http://localhost:3000/api/lessons");
    let data = await res.json();
    setAllLessons(data.data);
    setLoaded(true);
  };

  useEffect(() => {
    getAllLessons();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {loaded && AllLessons.length == 0 ? (
        <div className="flex items-center justify-center h-[50vh]">
          <div className="">No Entries found</div>
        </div>
      ) : AllLessons ? (
        AllLessons.map((item) => (
          <Link
            href={`/lessons/${item._id}`}
            className="box flex flex-col sm:flex-row border-b-[1px] border-gray-800 py-4 lg:mx-28 xl:mx-36 2xl:mx-48"
          >
            <div className="left">
              <Image
                src={`/${item.imageURL}`}
                height={150}
                width={150}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="right mt-4 space-y-2 sm:mt-0 sm:py-4 sm:px-4 flex flex-col sm:w-full">
              <div className="tag flex items-center justify-between">
                <div className="lesson font-bold text-[#00FFFF]">
                  {item.lessonTag}
                </div>
              </div>
              <div className="title font-semibold text-lg">{item.title}</div>
              <div className="para text-gray-300">
                {item.description.length <= 25
                  ? item.description.length + "..."
                  : item.description.length}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <>
          <div className="box flex flex-col sm:flex-row bg-gray-800 rounded-lg py-4 lg:mx-28 xl:mx-36 2xl:mx-48 animate-pulse">
            <div className="left px-4">
              <div className="md:ml-4 sm:w-60 h-60 bg-gray-800 ring-2 ring-gray-700 md:h-full rounded-lg flex items-center justify-center text-gray-700">
                <FaRegImage size={80} />
              </div>
            </div>
            <div className="right mt-4 space-y-2 sm:mt-0 sm:py-4 sm:px-4 flex flex-col sm:w-full px-4">
              <div className="tag flex items-center justify-between">
                <div className="bg-gray-700 w-[25%] h-4"></div>
              </div>
              <div className="w-[45%] h-6 bg-gray-700"></div>
              <div className="h-4 bg-gray-700 w-full"></div>
              <div className="h-4 bg-gray-700 w-[70%]"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
