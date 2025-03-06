const API_URL = 'https://api.imgflip.com/get_memes';

export const fetchMemes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data.memes;
};



export const fetchLeaderboardMemes = async () => {
  try {
    const response = await fetch("https://api.example.com/leaderboard-memes"); // Replace with actual API
    const data = await response.json();
    return data.slice(0, 10); // Return top 10 memes
  } catch (error) {
    console.error("Error fetching leaderboard memes:", error);
    return [];
  }
};
