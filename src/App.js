import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-[100%] bg-gray-900 text-white flex flex-col items-center justify-evenly">
      <div className="font-nova">
        <p className="text-4xl my-1">EtherPay</p>
        <p>easy eth payments</p>
      </div>
      <img src="ethlogo.png" alt="eth" className="object-contain h-[250px]" />
      <div className="flex gap-x-5">
        <Link to="/transaction">
          <button
            className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Pay
          </button>
        </Link>
        <Link to="/data">
          <button
            className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
