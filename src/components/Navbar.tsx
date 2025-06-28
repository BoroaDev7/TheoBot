import React from "react";

export function Navbar() {
  return (
    <div className="w-full h-16 grid grid-cols-3  justify-between items-center">
      <div className="pl-2"> TheoBot Logo</div>
      <div className="col-span-2 grid grid-flow-col  gap-8 justify-end px-7">
        <div className="p-1 w-fit grid items-center text-center   bg-red-500 rounded-2xl">
          {" "}
          Chatbot
        </div>
        <div className="p-1 w-fit grid items-center text-center bg-amber-500 rounded-2xl">
          {" "}
          About
        </div>
        <div className="p-1  w-fit grid items-center text-center bg-emerald-600 rounded-2xl">
          {" "}
          Contact
        </div>
        <div className="p-1 grid  w-fit items-center text-center  bg-fuchsia-500 rounded-2xl">
          {" "}
          Start Chatting
        </div>
      </div>
    </div>
  );
}
