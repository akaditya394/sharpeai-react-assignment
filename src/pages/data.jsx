import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const DataPage = () => {
  // State variables to store posts, filtered posts, and error messages
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState("");

  // Fetch data from JSONPlaceholder API when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Set the posts and filter to include only those with user ID 1
        setPosts(response.data);
        const userOnePosts = response.data.filter((post) => post.userId === 1);
        setFilteredPosts(userOnePosts);
      })
      .catch((err) => {
        setError("Failed to fetch data from the API. Please try again later.");
        console.error("Error fetching data:", err);
      });
  }, []);

  // Calculate the percentage of posts written by user ID 1
  const userOnePercentage = (
    (filteredPosts.length / posts.length) *
    100
  ).toFixed(2);

  return (
    <div className="font-nova py-5 flex flex-col items-center gap-y-10 bg-gray-900 text-white">
      <div className="font-nova">
        <p className="text-4xl my-1">EtherPay</p>
        <p>easy eth payments</p>
      </div>
      {/* Display table with filtered posts */}
      <div>
        {filteredPosts.length > 0 ? (
          <table className="table-auto w-[70%] mx-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 font-nova">ID</th>
                <th className="px-4 py-2 font-nova">Title</th>
                <th className="px-4 py-2 font-nova">Body</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through filtered posts and display in the table */}
              {filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td className="border px-4 py-2">{post.id}</td>
                  <td className="border px-4 py-2">{post.title}</td>
                  <td className="border px-4 py-2">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
      </div>

      <div className="w-[70%] mx-auto">
        <h3 className="text-xl font-bold mb-2 font-nova">
          Posts Written by User ID 1 out of total posts
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            {/* Create a pie chart with a single color for posts written by user ID 1 */}
            <Pie
              data={[
                { name: "User ID 1", value: filteredPosts.length },
                {
                  name: "Other Posts",
                  value: posts.length - filteredPosts.length,
                },
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              <Cell fill="#82ca9d" />
              <Cell fill="#8884d8" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Display percentage information */}
        <p className="mt-4 font-nova">
          Percentage of posts written by User ID 1 out of total posts:{" "}
          {userOnePercentage}%
        </p>
      </div>
      <div className="flex gap-x-5">
        <Link to="/">
          <button
            className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Home
          </button>
        </Link>
        <Link to="/transaction">
          <button
            className="font-nova border-2 px-3 py-2 hover:bg-white 
      hover:text-gray-900 hover:border-gray-900 transition-all"
          >
            Pay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DataPage;
