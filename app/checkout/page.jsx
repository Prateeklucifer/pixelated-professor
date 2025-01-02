"use client";

import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const submitRequest = async () => {
    let data = await fetch(`http://localhost:3000/api/checkout`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, phone, amount }),
    });
    let res = await data.json();

    if (data.status == 200) {
      toast.success("payment details sended", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    // <div className="md:px-4">
    //     <div className="container m-auto">
    //         <div className="name">
    //         </div>
    //     </div>
    // </div>
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <div className="md:px-4">
        <div className="container px-4 md:px-0 m-auto">
          <div className="heading text-center text-2xl font-bold py-4 md:py-16 sm:text-3xl md:text-4xl">
            Checkout
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="left h-48 md:h-96 overflow-hidden flex items-center justify-center md:w-1/2 px-8">
          <img src="/pay1.png" alt="" className="h-full" />
        </div>
        <div className="right px-4 md:w-1/2 flex flex-col gap-6">
          <div className="name flex flex-col gap-4 md:flex-row">
            <div className="firstname md:w-1/2">
              <label htmlFor="last" className="block mb-2">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name=""
                id="last"
                className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="lastname md:w-1/2">
              <label htmlFor="name" className="block mb-2">
                Last Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone" className="block mb-2">
              Phone number
            </label>
            <input
              type="number"
              name=""
              id="phone"
              className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="Amount">
            <label htmlFor="Amount" className="block mb-2">
            Amount
            </label>
            <input
              type="number"
              name=""
              id="Amount"
              className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button
            className="text-white px-4 py-2 rounded-md bg-[#00FFFF]/60 hover:bg-[#00FFFF]/50 w-full"
            onClick={() => {
              submitRequest();
            }}
          >
            Proceed &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
