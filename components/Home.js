import Image from "next/image";
import Tweets from "./Tweets";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Onetrend from "./Onetrend";

function Home() {
  const [tweetContent, setTweetContent] = useState("");
  const [tweets, setTweets] = useState([]);
  const [toggle, setToggle] = useState(false);

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const getTweets = async () => {
      const res = await fetch("http://localhost:3000/tweets/");
      const data = await res.json();
      console.log(data);
      setTweets(data.data);
    };
    getTweets();
  }, []);

  function handlePostTweet() {
    const pattern = /(#[\p{L}\d_]+)/gu;
    const hashtags = [];

    const extractHashtags = (text) => {
      console.log(text.split(pattern));
      return text.split(pattern).forEach((part) => {
        if (part.match(pattern)) {
          hashtags.push(part.toLowerCase());
        }
      });
    };

    extractHashtags(tweetContent);

    const tweetData = {
      name: user.name,
      username: user.username,
      content: tweetContent,
      token: user.token,
      hashtags: hashtags.toString(),
    };

    const postTweet = async () => {
      const res = await fetch("http://localhost:3000/tweets/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tweetData),
      });
      const response = await fetch("http://localhost:3000/tweets/");
      const refreshData = await response.json();
      setTweets(refreshData.data);
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
      />
    );
  });

  const [allHashtags, setAllHashtags] = useState([]);
  useEffect(() => {
    const searchAllHashtag = async () => {
      const response = await fetch("http://localhost:3000/tweets/");
      const data = await response.json();

      //Push all # in one array
      const tempAllHashtags = [];
      data.data.forEach((data, i) => {
        if (data.hashtags.length > 0) {
          tempAllHashtags.push(...data.hashtags);
        }
      });

      //Create an object with the number of copy in the value
      const objOfCopy = tempAllHashtags.reduce((previous, current) => {
        previous[current] = (previous[current] || 0) + 1;
        return previous;
      }, {});

      //Create one object for one # : easy to sort
      const arrForOneHashtag = [];
      for (const key in objOfCopy) {
        arrForOneHashtag.push({ name: key, number: objOfCopy[key] });
      }

      const sortArr2 = arrForOneHashtag.sort(function (a, b) {
        console.log(a);
        return b.number - a.number;
      });
      setAllHashtags(sortArr2);
    };

    searchAllHashtag();
  }, []);

  const createTrends = allHashtags.map((data, i) => {
    console.log("this is data", data);
    return <Onetrend name={data.name} number={data.number} />;
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
            <p className="name text-lg text-white font-semibold">{user.name}</p>
            <p className="username text-gray-400">@{user.username}</p>
          </div>
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
              onChange={(e) => {
                tweetContent.length < 280
                  ? setTweetContent(e.target.value)
                  : setTweetContent(tweetContent); // Bugfix Needed
              }}
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
      <div className="right-column w-4/12 h-screen border-l border-gray-500 p-5 text-white">
        <h2 className="text-3xl font-semibold mb-10">Trends</h2>

        {createTrends}
      </div>
    </div>
  );
}

export default Home;
