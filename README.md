# MemeVerse - The Ultimate Hub for Memes

MemeVerse is an interactive multi-page web application developed using **React.js** through which users can browse, upload, and engage with memes. The site has a smooth feel with infinite scroll, AI-captioned memes, user profiles, leaderboards, and more.

## Features & Functionalities

### 1. Homepage (Landing Page)
- **Trending memes are displayed dynamically** (Loaded from an API).
- **Interactive animations & transitions** to enhance UX.
- **Dark mode toggle** for accessibility.

### 2. Meme Explorer Page
- **Infinite scrolling or pagination** for infinite meme discovery.
- **Filter memes by categories** (Trending, New, Classic, Random).
- **Search functionality** with debounced API calls.
- **Sort memes** by likes, date, or comments.

### 3. Meme Upload Page
- **Upload memes** (image/gif format supported).
- Add humorous captions using a **text editor**.
- Generate **AI-based meme captions** using a meme-related API.
- **Preview before uploading** to check quality.

### 4. Meme Details Page
- **Dynamic routing** (/meme/:id) for immediate meme access.
- Displays **meme details**, likes, comments, and share options.
- **Comment system** (Local storage for the moment).
- **Like buttons with animations** and local storage preservation.

### 5. User Profile Page
- Displays **user-uploaded memes**.
- **Edit profile information** (Name, Bio, Profile Picture).
- View **liked memes** (stored in local storage or API).

### 6. Leaderboard Page
- **Top 10 most liked memes** dynamically ranked.
- **Engagement-based user rankings** to encourage competition.  

### 7. 404 Page (Easter Egg)
- A playful, **meme-themed 404 error page** when users load a non-existent route with React Router.  

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, React Router, Context API
- **Backend:** Node.js, Express.js (if necessary for API management)
- **Database:** MongoDB (if user authentication and meme storage are necessary)
- **Storage:** Local Storage (for persistence of likes/comments)
- **API Integration:** Meme APIs for retrieving and creating meme captions

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/memeverse.git
   ```
2. Change to the project directory:
   ```sh
   cd memeverse
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Contribution
Feel free to fork the repository and add to MemeVerse! Create a pull request with fixes, bug fixes, or new feature.

## License
This is an open-source project and comes under the **MIT License**.

---
Made by **Kamal Kumar Singh** 

