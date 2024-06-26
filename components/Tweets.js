import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Tweets(props) {
  const likes = props.likes;

  const user = useSelector((state) => state.user.value);

  const pattern = /(#[\p{L}\d_]+)/gu;
  const text = props.content;

  const deleteTweet = () => {
    props.refreshDeletedTweet();
  };

  const handleLike = async () => {
    const res = await fetch(
      `https://zweeper-backend.vercel.app/tweets/${props.id}`
    );
    const data = await res.json();

    const userToken = {
      token: user.token,
    };

    if (data.data.likes.includes(user.token)) {
      const resOk = await fetch(
        `https://zweeper-backend.vercel.app/tweets/removelike/${props.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToken),
        }
      );
    } else {
      const resNotOk = await fetch(
        `https://zweeper-backend.vercel.app/tweets/addlike/${props.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userToken),
        }
      );
    }
    deleteTweet();
  };

  const textWithHashtags = (text) => {
    return text.split(pattern).map((part, index) => {
      if (part.match(pattern)) {
        return (
          <Link key={index} href={`/trends/${part.slice(1).toLowerCase()}`}>
            <span className="font-extrabord cursor-pointer text-blue-600">
              {part}
            </span>
          </Link>
        );
      } else {
        return part;
      }
    });
  };

  const handleDeleteTweet = async () => {
    const res = await fetch(
      `https://zweeper-backend.vercel.app/tweets/delete/${props.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    deleteTweet();
  };

  let colorLike = "";
  props.likes.includes(user.token)
    ? (colorLike = "#26ff49")
    : (colorLike = "#fff");

  const nowDate = new Date();
  const tweetDate = new Date(props.date);
  const lastTimeInMinute = Math.floor((nowDate - tweetDate) / 60000);
  const changeLastTime = () => {
    let time;
    if (lastTimeInMinute < 1) {
      time = "a few seconds ago";
    } else if (lastTimeInMinute >= 1 && lastTimeInMinute < 60) {
      time = `${lastTimeInMinute} minutes`;
    } else {
      time = `${Math.floor(lastTimeInMinute / 60)} hours`;
    }
    return time;
  };

  return (
    <div className="main flex flex-col p-5 border-2 border-[#26ff49]/10 rounded-lg shadow-inner">
      <div className="flex justify-between items-center">
        <div className="id-user flex items-center">
          {props.image ? (
            <Image src={props.image} alt="icone-user" width={50} height={50} />
          ) : (
            <Image
              src="/userIcone.png"
              alt="icone-user"
              width={50}
              height={50}
            />
          )}

          <p className="username-data">
            <span className="text-white font-montheavy pl-2">{props.name}</span>
            <span className="pl-2 text-gray-400">@{props.username}</span>
            <span className="pl-2 text-gray-400">· {changeLastTime()}</span>
          </p>
        </div>
        {user.token === props.token ? (
          <div className="trash cursor-pointer">
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "#ffffff" }}
              onClick={() => handleDeleteTweet()}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="tweet-content text-white py-5">
        {textWithHashtags(text)}
      </div>
      <div className="likes flex items-center gap-5">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: `${colorLike}`, cursor: "pointer" }}
          onClick={() => handleLike()}
        />
        <p style={{ color: `${colorLike}` }}>{likes.length}</p>
      </div>
    </div>
  );
}

export default Tweets;
