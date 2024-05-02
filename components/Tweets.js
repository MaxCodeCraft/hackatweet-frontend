import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Tweets() {
  return (
    <div className="main flex flex-col p-5 border-t border-gray-500">
      <div className="id-user flex items-center">
        <Image src="/userIcone.png" alt="icone-user" width={50} height={50} />
        <p className="username-data">
          <span className="text-white pl-2">Antoine </span>
          <span className="text-gray-400">@AntoineLeProf . 5 hours</span>
        </p>
      </div>
      <div className="tweet-content text-white py-5">
        Welcome to <span className="text-[#247DDE]">#hackatweet</span> guys !
      </div>
      <div className="likes flex items-center gap-5">
        <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
        <p className="text-white">0</p>
      </div>
    </div>
  );
}

export default Tweets;
