"use client";

// import VideoJS from "@/app/components/VideoJS";
import React, { useEffect, useState } from "react";

export default function VideoContent({ params }) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(undefined);

  const getData = async () => {
    let res = await fetch("http://localhost:3000/api/lesson", {
      method: "POST",
      body: JSON.stringify({ id: params.slug }),
    });

    let data = await res.json();

    setData(data.data);
    setLoading(false);

    if (res.status == 200) {
      setFound(true);
    } else {
      setFound(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/videos/1.mp4",
        type: "video/mp4",
      },
    ],
  };
  
//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here, for example:
//     player.on("waiting", () => {
//       videojs.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       videojs.log("player will dispose");
//     });
//   };
  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        {loading ? (
          <div className="flex justify-center items-center font-bold text-3xl h-screen text-gray-400 animate-pulse">
            {" "}
            <div className="">Loading...</div>
          </div>
        ) : found ? (
          <>
            <div className="md:flex justify-center">
              <div className="video w-[60%]">
                <video src={`/${data[0].videoURL}`} controls></video>
                {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
              </div>
            </div>
            <div className="space-y-6 mt-4">
              <div className="heading text-3xl font-bold">
                {data[0].title}
              </div>
              <div className="para">
                {data[0].description}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center font-bold text-3xl h-screen text-gray-700">
            {" "}
            <div className="">Not Found :( </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
