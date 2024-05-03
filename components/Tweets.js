import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweets(props) {
  const likes = props.likes;

  const pattern = /(#[\p{L}\d_]+)/gu;
  const text = props.content;

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

  return (
    <div className="main flex flex-col p-5 border-t border-gray-500">
      <div className="id-user flex items-center">
        <Image src="/userIcone.png" alt="icone-user" width={50} height={50} />
        <p className="username-data">
          <span className="text-white pl-2">{props.name}</span>
          <span className="pl-2 text-gray-400">@{props.username}</span>
        </p>
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
