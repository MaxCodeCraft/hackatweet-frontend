import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }
  return (
    <div className="bg-[#2F383C] flex w-screen h-screen">
      <div className="left w-1/2">
        <img src="/twitter404.jpeg" />
      </div>
      <div className="right w-1/2 flex flex-col justify-center items-center">
        <h1 className="font-montheavy text-white text-4xl pb-5">MAYDAY</h1>
        <h1 className="font-montheavy text-white text-5xl">
          404 - We lost the bird !!
        </h1>
        <p className="message text-gray-300 text-xl pb-5">
          Sorry, the page you are looking for does not exist !
        </p>
        <button
          className="bg-[#3790ED] rounded-full w-1/6 py-2 hover:bg-[#2D78C6]"
          onClick={() => handleClick()}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Custom404;
