import { useEffect, useState } from "react";

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/stats");
        if (response.ok) {
          const data = await response.text();
          const json = JSON.parse(data);
          console.log("json", json);
          setStats(data);
        } else {
          console.error(
            "Failed to fetch stats:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1>User Stats</h1>
      {stats !== null ? (
        <div>
          {/* Render the stats data here */}
          <pre>{stats}</pre>
        </div>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
};

export default StatsPage;
