import { useEffect, useState } from "react";
import { DestinyService } from "@/services/destinyService";

const Home = () => {
  const [data, setData] = useState<Number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const membershipID = "4611686018452357594";
  const membershipType = "1";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const accountStats = await DestinyService.getAccountStats(
        membershipType,
        membershipID
      );
      setData(accountStats);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <body>
      <div className="topBar">
        <h1 className="mainTitle">StatFlowAI</h1>
      </div>
      <div className="lifetimeBox">
        <p className="lifetimeTitle">Lifetime Statistics</p>
        <div className="matchesWon">
          <p>Matches Won:</p>
          <p className="data">{data}</p>
        </div>
      </div>
      <div className="footer">
        <p className="author">Developed by Anton Korzhan</p>
      </div>
    </body>
  );
};

export default Home;
