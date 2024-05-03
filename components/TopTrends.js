import { useState, useEffect } from "react";
import Onetrend from "./Onetrend";

function TopTrends() {
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

      const arrTest = [];
      tempAllHashtags.forEach((data, i) => {
        return arrTest.push(...data.split(","));
      });

      //Create an object with the number of copy in the value
      const objOfCopy = arrTest.reduce((previous, current) => {
        previous[current] = (previous[current] || 0) + 1;
        return previous;
      }, {});

      //Create one object for one # : easy to sort
      const arrForOneHashtag = [];
      for (const key in objOfCopy) {
        arrForOneHashtag.push({ name: key, number: objOfCopy[key] });
      }

      const sortArr2 = arrForOneHashtag.sort(function (a, b) {
        return b.number - a.number;
      });
      setAllHashtags(sortArr2);
    };

    searchAllHashtag();
  }, []);

  const createTrends = allHashtags.map((data, i) => {
    return <Onetrend name={data.name} number={data.number} />;
  });

  return (
    <>
      <h2 className="text-3xl font-semibold mb-10">Trends</h2>
      <div>{createTrends}</div>
    </>
  );
}

export default TopTrends;
