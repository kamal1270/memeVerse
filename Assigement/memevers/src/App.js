import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProfilePage from "./pages/profile.js";
import MemeDetails from "./pages/meme/[id].js";
import Leaderboard from "./pages/leaderboard.js";
import NotFound from "./pages/404.js";
import HomePage from "./pages/index.js";
import { ThemeProvider } from "./context/ThemeContext.js";
import MemeUpload from "./components/MemeUpload.js";
import MemePage from "./pages/MemePage.js";
import UserProfile from "./pages/UserProfile.js";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/meme/:id" element={<MemePage />} />
            <Route path="/memeupload" element={<MemeUpload />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;