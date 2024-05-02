import Image from "next/image";
import Tweets from "../../components/Tweets";
import { useState, useEffect } from "react";
import Onetrend from "../../components/Onetrend";

function Trends() {
  const [hashtagSearch, setHashtagSearch] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const res = await fetch(`http://localho3000/hashtags/${props.name}`);
      const data = await res.json();
      console.log(data);
      setTweets(data.data);
    };
    getTweets();
  }, []);

  const displayTweets = tweets.map((data, index) => {
    return (
      <Tweets
        key={index}
        name={data.name}
        username={data.username}
        content={data.content}
        likes={data.likes}
        date={data.date}
        id={data._id}
        token={data.token}
      />
    );
  });

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
          <div className="userInfo flex flex-col pl-5">
            <p className="name text-lg text-white font-semibold">John</p>
            <p className="username text-gray-400">@JohnCena</p>
          </div>
        </div>
      </div>
      <div className="middle-column w-6/12 h-screen">
        <div className="hight-part h-1/4 w-full  text-white p-5 mb-5 ">
          <h2 className=" text-3xl font-semibold">Hashtag</h2>
          <div className="input flex justify-center items-center bg-transparent my-8">
            <input
              value={hashtagSearch}
              placeholder={props.name}
              className="w-4/5 bg-transparent border-b border-gray-500 py-5 text-lg "
              onChange={(e) => {
                setTweetContent(tweetContent);
              }}
            />
          </div>
        </div>
        <div className="bottom-section overflow-auto h-full">
          {displayTweets}
        </div>
      </div>
      <div className="right-column w-4/12 h-screen border-l border-gray-500 p-5 text-white">
        <h2 className="text-3xl font-semibold mb-10">Trends</h2>

        <Onetrend />
        <Onetrend />
        <Onetrend />
        <Onetrend />
        <Onetrend />
      </div>
    </div>
  );
}

export default Trends;
