import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchLeaderboardMemes } from "../utils/api"; // API function for leaderboard data
import Loader from "../components/Loader";
import "./leaderboard.css"

const LeaderboardPage = () => {
  const [topMemes, setTopMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Ensure Redux theme state exists before accessing mode
  const theme = useSelector((state) => state.theme?.mode || "light"); 

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const memesData = await fetchLeaderboardMemes();
        setTopMemes(memesData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    loadLeaderboard();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={`app ${theme}`}>
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">Leaderboard</h1>
        <p className="text-center text-gray-500">Top 10 Most Liked Memes</p>

        <ul className="mt-6 max-w-2xl mx-auto">
          {topMemes.length === 0 ? (
            <p className="text-center text-gray-400">No memes available.</p>
          ) : (
            topMemes.map((meme, index) => (
              <li
                key={meme.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg my-2 shadow-md"
              >
                <span className="font-semibold">{index + 1}. {meme.title}</span>
                <span className="text-yellow-500 font-bold">{meme.likes} Likes</span>
              </li>
            ))
          )}
        </ul>
      </main>
    </div>
  );
};

export default LeaderboardPage;
