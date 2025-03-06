import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMemes } from "../redux/memeSlice";
import { fetchMemes } from "../utils/api";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Loader from "../components/Loader";
import MemeCard from "../components/MemeCard";
import { useTheme } from "../context/ThemeContext";
import "./index.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const memes = useSelector((state) => state.memes.items);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useTheme();

    useEffect(() => {
        const loadMemes = async () => {
            const memesData = await fetchMemes();
            dispatch(setMemes(memesData));
            setLoading(false);
        };
        loadMemes();
    }, [dispatch]);

    if (loading) return <Loader />;

    const handleThemeChange = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };

    return (
        <div className={`app ${theme}`}>
            <header>
                <div className="navbar">
                    <h1 className="navbar1">MemeVerse</h1>
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="theme-btn" onClick={handleThemeChange}>
                        {theme === "light" ? <FaMoon size={30} /> : <IoIosSunny size={30} />}
                    </div>
                    <nav className={`nav-links ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/memeupload">MemeUpload</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/leaderboard">Leaderboard</NavLink>
                    </nav>
                </div>
            </header>
            <main className="content">
                <h1>Trending Memes</h1>
                <div className="meme-grid">
                    {memes.map((meme) => (
                        <MemeCard key={meme.id} meme={meme} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
