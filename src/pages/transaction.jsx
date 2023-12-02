import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Import your Firebase configuration
import { addDoc, collection } from "firebase/firestore";

const TransactionPage = () => {
  // State variables for form inputs and error handling
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  // Event handler for wallet address input change
  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  // Event handler for amount input change
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate wallet address
    if (walletAddress.length === 0) {
      toast.error("Wallet Address cannot be empty");
    }

    const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;

    console.log(walletAddressRegex.test(walletAddress));
    if (!walletAddress.trim() || !walletAddressRegex.test(walletAddress)) {
      toast.error("Invalid wallet address format");
      return;
    }

    // Validate amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0 || parsedAmount > 10000) {
      toast.error("Amount must be a number within the range of 0 - 10,000");
      return;
    }

    //Store data in Google Firestore
    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        walletAddress,
        amount: parsedAmount,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);

      toast.success("Transaction data successfully stored in Firestore!");
    } catch (error) {
      console.error("Error storing data in Firestore:", error);
      toast.failure("Failed to store transaction data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly h-full bg-gray-900 text-white">
      <div className="font-nova">
        <p className="text-4xl my-1">EtherPay</p>
        <p>easy eth payments</p>
      </div>
      {/* Transaction form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Wallet Address input */}
        {/* Page title */}
        <h2 className="text-2xl text-center text-white font-bold mb-4 font-nova">
          make your transaction
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Wallet Address</label>
          <input
            type="text"
            value={walletAddress}
            onChange={handleWalletAddressChange}
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Amount input */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
        >
          Submit
        </button>
      </form>
      <div className="flex gap-x-5">
        <Link to="/">
          <button
            className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Home
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

export default TransactionPage;
