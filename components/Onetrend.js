import Link from "next/link";

function OneTrend(props) {
  const upperCaseFirstLetter = (hashtag) => {
    return hashtag.charAt(0).toUpperCase() + hashtag.slice(1);
  };

  console.log("upperCase");

  return (
    <div className="main bg-[#1B232C] py-4 px-6 rounded my-1">
      <Link href={`/trends/${props.name}`}>
        <h3 className="mb-2 font-semibold text-lg cursor-pointer">
          #{upperCaseFirstLetter(props.name)}
        </h3>
      </Link>
      <p className="text-gray-400">{props.number} Tweets</p>
    </div>
  );
}

export default OneTrend;
