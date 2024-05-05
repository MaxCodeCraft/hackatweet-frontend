import Image from "next/image";
import Link from "next/link";
import Tweets from "../../components/Tweets";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import TopTrends from "../../components/TopTrends";
import UserInfo from "../../components/UserInfo";
import { motion } from "framer-motion";

function Trends() {
  const router = useRouter();
  const { slug } = router.query;
  const [hashtagSearch, setHashtagSearch] = useState("");
  const [tweets, setTweets] = useState([]);
  const [toggle, setToggle] = useState(true);

  const refreshDeletedTweet = () => {
    setToggle(!toggle);
  };

  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const getTweets = async () => {
      const res = await fetch(`http://localhost:3000/tweets/hashtags/${slug}`);
      const data = await res.json();
      setTweets(data.data.reverse());
    };
    getTweets();
  }, [slug, toggle]);

  useEffect(() => {
    if (hashtagSearch) {
      const getTweets = async () => {
        const res = await fetch(
          `http://localhost:3000/tweets/hashtags/${hashtagSearch}`
        );
        const data = await res.json();

        setTweets(data.data.reverse());
      };
      getTweets();
    }
  }, [hashtagSearch, toggle]);

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
        image={data.image}
        refreshDeletedTweet={refreshDeletedTweet}
      />
    );
  });

  return (
    <div className="All w-screen h-screen overflow-hidden bg-[#0f151b] flex">
      <div className="left-column flex flex-col justify-between w-3/12 h-screen border-r border-[#26ff49] pl-10 pt-5">
        <div className="cursor-pointer">
          <Link href="/">
            <motion.svg
              fill="#26ff49"
              width="70px"
              height="70px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 2, translateX: 30, translateY: 30 }}
            >
              <title>Zweeper</title>
              <path d="M13.817 24.742c-0.35 0.556-0.805 0.407-1.146 0.427-1.582-1.166-3.123-2.292-4.65-3.438-0.689-0.463-1.187-1.164-1.377-1.984l-0.004-0.022 5.822-9.123h1.355z"></path>
              <path d="M25.335 19.733c-0.11 0.763-0.535 1.41-1.137 1.814l-0.009 0.006c-0.897 0.679-1.865 1.261-2.765 1.937-0.696 0.527-1.335 1.146-1.96 1.673h-0.885l-0.384-0.384v-14.178h1.364z"></path>
              <path d="M16.484 28.619h1.499c0.719 0.453 0.335 1.080 0.501 1.659h-4.871l-0.057-1.229 0.415-0.395h1.542v-23.163c-0.192-0.602-0.831-0.287-1.269-0.407-0.375-0.533-0.387-0.53-0.355-1.344h4.203c0.097 0.435 0.206 0.911-0.287 1.301-0.381 0.269-1.009-0.246-1.315 0.716z"></path>
              <path d="M31.759 19.957h-1.433q-5.587-8.45-11.266-17.077l0.378-1.94z"></path>
              <path d="M0.241 19.966l12.321-19.037 0.358 1.98-11.246 17.057z"></path>
              <path d="M29.158 19.722h-1.393c-0.968-1.533-1.974-3.060-2.917-4.625-0.86-1.456-1.883-2.819-2.711-4.298s-1.883-2.946-2.865-4.395c-0.61-0.905-0.63-0.891-0.378-2.272 1.424 1.599 2.264 3.473 3.47 5.106s2.103 3.53 3.287 5.201 2.14 3.516 3.507 5.284z"></path>
              <path d="M13.238 4.258v1.312l-8.986 14.117h-1.347c3.378-5.198 6.705-10.315 10.029-15.427 0.017-0.023 0.095-0.003 0.304-0.003z"></path>
              <path d="M13.639 2.785l-0.421-2.785h5.467c0.025 0.265 0.040 0.573 0.040 0.885 0 0.203-0.006 0.404-0.018 0.604l0.001-0.027c-0.113 0.51-0.256 0.952-0.435 1.375l0.019-0.051z"></path>
              <path d="M2.178 23.209h1.146l9.384 7.163v0.785l-0.573 0.037c-1.768-1.335-3.519-2.579-5.181-3.937-1.607-1.307-3.381-2.407-4.917-3.799z"></path>
              <path d="M19.865 31.18h-0.507v-0.86l9.335-7.112h1.181c0 0.16 0.054 0.361 0 0.41-0.934 0.722-1.888 1.433-2.834 2.135-0.573 0.438-1.172 0.86-1.745 1.321-1.009 0.794-2.006 1.619-3.017 2.398-0.768 0.573-1.564 1.103-2.413 1.708z"></path>
              <path d="M27.054 22.172l1.115 0.544c-1.519 1.146-3.046 2.275-4.544 3.438s-2.814 2.436-4.542 3.496v-1.536z"></path>
              <path d="M3.834 22.739c0.86-0.653 1.524-0.335 2.292 0.252 1.355 1.046 2.688 2.129 4.138 3.063 0.951 0.613 1.788 1.407 2.711 2.149v1.309c-0.624-0.217-1.159-0.548-1.607-0.97l0.002 0.002c-1.433-1.215-2.98-2.275-4.41-3.496-0.825-0.705-1.794-1.246-2.579-2.032-0.157-0.115-0.338-0.209-0.533-0.274l-0.014-0.004z"></path>
              <path d="M18.699 30.946v1.054h-5.372l-0.054-1.054z"></path>
              <path d="M1.55 20.954l0.805 1.536-1.092 0.335-1.003-1.871z"></path>
              <path d="M29.636 22.501l0.842-1.576h1.244l-0.951 1.897z"></path>
              <path d="M2.679 20.63h1.461l0.327 0.957-1.014 0.476-0.774-1.080z"></path>
              <path d="M29.304 20.63v0.679l-0.696 0.754-1.032-0.447 0.235-0.974z"></path>
            </motion.svg>
          </Link>
        </div>
        <UserInfo />
      </div>
      <div className="middle-column w-6/12 h-screen">
        <div className="hight-part h-1/4 w-full  text-white p-5">
          <h2 className="font-cannet text-3xl font-semibold">Hashtag</h2>
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
        <div className="bottom-section flex flex-col gap-3 overflow-auto h-[75vh] px-3 pt-3">
          {displayTweets}
        </div>
      </div>
      <div className="right-column w-4/12 h-screen border-l border-[#26ff49] p-5 text-white">
        <TopTrends />
      </div>
    </div>
  );
}

export default Trends;
