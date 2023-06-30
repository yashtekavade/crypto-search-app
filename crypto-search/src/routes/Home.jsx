import React from "react";
import CoinSearch from "../components/CoinSearch";

const Home = ({ coins }) => {
  console.log(coins); // Check the value of the coins prop in the console
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  );
};

export default Home;
