import React from "react";
import sigma from "../images/sigma.png";

const Home = () => {
  return (
    <div className="flex justify-end h-screen bg-black">
      <div>
        <img
          src={sigma}
          alt="giga chad"
          className="h-screen"
        />
      </div>
    </div>
  );
};

export default Home;
