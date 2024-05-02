import Link from "next/link";

function OneTrend(props) {
  return (
    <div className="main bg-[#1B232C] py-4 px-6 rounded my-1">
      <Link href={`/trends/test`}>
        <h3 className="mb-2 font-semibold text-lg">Test</h3>
      </Link>
      <p className="text-gray-400">2 Tweets</p>
    </div>
  );
}

export default OneTrend;
