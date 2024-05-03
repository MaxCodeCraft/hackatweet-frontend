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

  const textWithHashtags = (text) => {
    console.log(text.split(pattern));
    return text.split(pattern).map((part, index) => {
      if (part.match(pattern)) {
        return (
          <Link key={index} href={`/trends/${part.slice(1)}`}>
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
    const res = await fetch(`http://localhost:3000/tweets/delete/${props.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    deleteTweet();
    console.log(data);
  };

  return (
    <div className="main flex flex-col p-5 border-t border-gray-500">
      <div className="flex justify-between items-center">
        <div className="id-user flex items-center">
          <Image src="/userIcone.png" alt="icone-user" width={50} height={50} />
          <p className="username-data">
            <span className="text-white pl-2">{props.name}</span>
            <span className="pl-2 text-gray-400">@{props.username}</span>
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
        <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
        <p className="text-white">{likes.length}</p>
      </div>
    </div>
  );
}

export default Tweets;
