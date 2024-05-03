import Image from "next/image";
import Link from "next/link";
import Tweets from "./Tweets";
import TopTrends from "./TopTrends";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { logout } from "../reducers/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const [tweetContent, setTweetContent] = useState("");
  const [tweets, setTweets] = useState([]);
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const refreshDeletedTweet = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  useEffect(() => {
    const getTweets = async () => {
      const res = await fetch("http://localhost:3000/tweets/");
      const data = await res.json();

      setTweets(data.data.reverse());
    };
    getTweets();
  }, [toggle]);

  function handlePostTweet() {
    const pattern = /(#[\p{L}\d_]+)/gu;
    const hashtags = [];

    const extractHashtags = (text) => {
      return text.split(pattern).forEach((part) => {
        if (part.match(pattern) && part.length > 2) {
          hashtags.push(
            part
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .slice(1)
              .toLowerCase()
          );
        }
      });
    };

    extractHashtags(tweetContent);

    const tweetData = {
      name: user.name,
      username: user.username,
      content: tweetContent,
      token: user.token,
      hashtags: hashtags,
    };

    const postTweet = async () => {
      const res = await fetch("http://localhost:3000/tweets/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tweetData),
      });
      // const response = await fetch("http://localhost:3000/tweets/");
      // const refreshData = await response.json();

      // setTweets(refreshData.data);
    };
    postTweet();
    setTweetContent("");
    setToggle(!toggle);
  }

  const displayTweets = tweets?.map((data, index) => {
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
        refreshDeletedTweet={refreshDeletedTweet}
      />
    );
  });

  return (
    <div className="All w-screen h-screen overflow-hidden bg-[#151D26] flex">
      <div className="left-column flex flex-col justify-between w-3/12 h-screen border-r border-gray-500 pl-10 pt-5">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/twitterIcone180.png"
              alt="icone-Twitter"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="pb-4">
          <div className="icone-user flex pb-5">
            <div className="avatar online">
              <Image
                src="/userIcone.png"
                alt="icone-user"
                width={50}
                height={50}
              />
            </div>
            <div className="userInfo flex flex-col pl-5">
              <p className="name text-lg text-white font-semibold">
                {user.name}
              </p>
              <p className="username text-gray-400">@{user.username}</p>
            </div>
          </div>
          <button
            className="px-4 bg-transparent border-gray-500 border rounded-full text-white font-semibold"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="middle-column w-6/12 h-screen">
        <div className="hight-part h-1/4 w-full  text-white p-5 mb-5 ">
          <h2 className=" text-3xl font-semibold">Home</h2>
          <div className="input flex justify-center items-center bg-transparent my-8">
            <input
              value={tweetContent}
              placeholder="What's up?"
              className="w-4/5 bg-transparent border-b border-gray-500 py-5 text-lg "
              maxlength="280"
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>
          <div className="number-button flex justify-end items-center">
            <p className="mr-5">{tweetContent.length}/280</p>
            <button
              className="bg-[#3790ED] rounded-full w-1/6 py-2 hover:bg-[#2D78C6]"
              onClick={() => handlePostTweet()}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className="bottom-section overflow-auto h-[75vh]">
          {displayTweets}
        </div>
      </div>
      <div className="right-column w-4/12 h-screen border-l border-gray-500 p-5 text-white overflow-auto">
        <TopTrends toggle={toggle} />
      </div>
    </div>
  );
}

export default Home;
