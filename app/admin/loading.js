import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen animate-pulse">
      <div className="text-3xl font-bold text-gray-500">loading...</div>
    </div>
  );
}
