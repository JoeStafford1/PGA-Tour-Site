# PGA Tour Website

## Overview
This project is a **live PGA Tour tracking website** that provides:
- **Live Leaderboards** (auto-refreshing with filtering options).
- **Player Profiles** (hole-by-hole scores for each round, real-time updates).
- **Tournament Schedule** (auto-updating with locations, prize money, and past winners).
- **Searchable Player Directory** (find any PGA Tour player quickly).
- **Excel Import Compatibility** (hole-by-hole tables are structured for easy ImportHTML use in Excel).

## Tech Stack
- **Next.js** - React framework for server-side rendering and fast performance.
- **React.js** - Frontend development.
- **Vercel** - Deployment and hosting.
- **PGA Tour API** - Fetching real-time leaderboard, player, and tournament data.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/pga-tour-site.git
   ```
2. Navigate into the project folder:
   ```bash
   cd pga-tour-site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open **http://localhost:3000/** in your browser.

## Deployment Guide
1. Push your repo to **GitHub**.
2. Go to **[Vercel](https://vercel.com/)** and log in.
3. Click **New Project** → Import from GitHub.
4. Select your repository and click **Deploy**.
5. Once deployed, Vercel will provide a **live website URL**.

## API Integration
To connect to the live PGA Tour API, replace these placeholders in `index.js`:
```javascript
const leaderboardData = await fetch("API_LEADERBOARD_URL").then((res) => res.json());
const scheduleData = await fetch("API_SCHEDULE_URL").then((res) => res.json());
const playersData = await fetch("API_PLAYERS_URL").then((res) => res.json());
```
Replace **API_LEADERBOARD_URL, API_SCHEDULE_URL, and API_PLAYERS_URL** with actual API endpoints.

## Contributing
Feel free to fork this repo and submit pull requests with improvements.

## License
This project is open-source and available under the **MIT License**.
