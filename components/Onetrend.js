import Link from "next/link";
import { motion } from "framer-motion";

function OneTrend(props) {
  const upperCaseFirstLetter = (hashtag) => {
    return hashtag.charAt(0).toUpperCase() + hashtag.slice(1);
  };

  return (
    <Link href={`/trends/${props.name}`}>
      <motion.div
        className="main bg-[#1B232C] hover:bg-[#26ff49]/10 py-4 px-6 rounded-lg my-1 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <h3 className="mb-2 font-semibold text-lg ">
          #{upperCaseFirstLetter(props.name)}
        </h3>

        <p className="text-gray-400">{props.number} Tweets</p>
      </motion.div>
    </Link>
  );
}

export default OneTrend;
