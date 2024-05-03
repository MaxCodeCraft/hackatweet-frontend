import Image from "next/image";
import Tweets from "../../components/Tweets";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopTrends from "../../components/TopTrends";

function Trends() {
  const router = useRouter();
  const { slug } = router.query;
  const [hashtagSearch, setHashtagSearch] = useState("#");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const res = await fetch(`http://localhost:3000/tweets/hashtags/${slug}`);
      const data = await res.json();
      setTweets(data.data);
    };
    getTweets();
  }, [slug]);

  useEffect(() => {
    if (hashtagSearch) {
      const getTweets = async () => {
        const res = await fetch(
          `http://localhost:3000/tweets/hashtags/${hashtagSearch}`
        );
        const data = await res.json();

        setTweets(data.data);
      };
      getTweets();
    }
  }, [hashtagSearch]);

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
            <div className="bg-[#1B232C] rounded-full w-5/6 p-3">
              <span className="pr-1">#</span>
              <input
                defaultValue={slug}
                key={slug}
                className="w-4/5 bg-transparent text-lg "
                onChange={(e) => {
                  setHashtagSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="bottom-section overflow-auto h-full">
          {displayTweets}
        </div>
      </div>
      <div className="right-column w-4/12 h-screen border-l border-gray-500 p-5 text-white">
        <TopTrends />
      </div>
    </div>
  );
}

export default Trends;
