import Link from "next/link";

function OneTrend(props) {
  const upperCaseFirstLetter = (hashtag) => {
    return hashtag.charAt(0).toUpperCase() + hashtag.slice(1);
  };

  return (
    <Link href={`/trends/${props.name}`}>
      <div className="main bg-[#1B232C] hover:bg-[#232D3B] py-4 px-6 rounded my-1 cursor-pointer">
        <h3 className="mb-2 font-semibold text-lg ">
          #{upperCaseFirstLetter(props.name)}
        </h3>

        <p className="text-gray-400">{props.number} Tweets</p>
      </div>
    </Link>
  );
}

export default OneTrend;
