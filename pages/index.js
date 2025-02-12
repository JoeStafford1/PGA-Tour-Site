// pages/index.js - Main Website Code
import { useEffect, useState } from "react";

export default function Home() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const leaderboardData = await fetch("API_LEADERBOARD_URL").then((res) => res.json());
      const scheduleData = await fetch("API_SCHEDULE_URL").then((res) => res.json());
      const playersData = await fetch("API_PLAYERS_URL").then((res) => res.json());
      
      setLeaderboard(leaderboardData);
      setSchedule(scheduleData);
      setPlayers(playersData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>PGA Tour Live Leaderboard</h1>
      <ul>
        {leaderboard.map((player) => (
          <li key={player.id}>{player.name}: {player.score}</li>
        ))}
      </ul>
      
      <h2>Upcoming Tournaments</h2>
      <ul>
        {schedule.map((event) => (
          <li key={event.id}>{event.name} - {event.date}</li>
        ))}
      </ul>
      
      <h2>Player Profiles</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

// next.config.js - Next.js Configuration File
module.exports = {
  reactStrictMode: true,
};

// package.json - Project Dependencies
{
  "name": "pga-tour-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
