import Image from "next/image";
import Tweets from "./Tweets";
import { useState, useSelector } from "react";

function Home() {
  const [tweetContent, setTweetContent] = useState("");

  return (
    <div className="All w-screen h-screen overflow-hidden bg-[#151D26] flex">
      <div className="left-column flex flex-col justify-between w-3/12 h-screen border-r border-gray-500 pl-10 pt-5">
        <div>
          <Image
            src="/twitterIcone180.png"
            alt="icone-Twitter"
            width={50}
            height={50}
          />{" "}
        </div>
        <div className="icone-user flex pb-5">
          <Image src="/userIcone.png" alt="icone-user" width={50} height={50} />
          <div className="userInfo flex flex-col">
            <p className="name text-lg text-white font-semibold">John</p>
            <p className="username text-gray-400">@JohnCena</p>
          </div>
        </div>
      </div>
      <div className="middle-column w-6/12 h-screen">
        <div className="hight-part h-1/4 w-full  text-white p-5">
          <h2 className=" text-3xl font-semibold">Home</h2>
          <div className="input flex justify-center items-center bg-transparent my-8">
            <input
              value={tweetContent}
              placeholder="What's up?"
              className="w-4/5 bg-transparent border-b border-gray-500 py-5 text-lg "
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>
          <div className="number-button flex justify-end items-center">
            <p className="mr-5">{tweetContent.length}/260</p>
            <button className="bg-[#3790ED] rounded-full w-1/6 py-2 hover:bg-[#2D78C6]">
              Tweet
            </button>
          </div>
        </div>
        <div className="bottom-section overflow-auto h-full">
          <Tweets />
          <Tweets />
          <Tweets />
          <Tweets />
          <Tweets />
          <Tweets />
          <Tweets />
          <Tweets />
        </div>
      </div>
      <div className="right-column w-4/12 h-screen border-l border-gray-500 p-5 text-white">
        <h2 className="text-3xl font-semibold">Trends</h2>
      </div>
    </div>
  );
}

export default Home;
