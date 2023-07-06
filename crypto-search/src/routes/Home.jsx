import React from "react";
import CoinSearch from "../components/CoinSearch";
import Treading from "../components/Trending";

const Home = ({ coins }) => {
  console.log(coins); // Check the value of the coins prop in the console
  return (
    <div>
      <CoinSearch coins={coins} />
      <Treading />
    </div>
  );
};

export default Home;
