import { useEffect, useState } from "react";
import { DestinyService } from "@/services/destinyService";

const Home = () => {
  const [data, setData] = useState<Number | null>(null);
  const [allTimeKills, setAllTimeKills] =  useState<Number | null>(null);
  const [highestLight, setHighestLight] =  useState<Number | null>(null);
  const [pvpKills, setPvpKills] =  useState<Number | null>(null);
  const [assists, setAssists] =  useState<Number | null>(null);
  const [accName, setAccountName] = useState<String | null>(null);
  const [actCleared, setActivitiesCleared] = useState<Number | null>(null);
  const [pveKills, setPveKills] =  useState<Number | null>(null);
  const [pveDeaths, setPveDeaths] =  useState<Number | null>(null);
  const [kdRatio, setKdRatio] = useState<String | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidePanelOpen, setSidePanelOpen] = useState(false); // New state to track side panel
  const [selectedStat, setSelectedStat] = useState(""); // State to store the selected stat type

  // const [error, setError] = useState(null);
  const membershipID = "4611686018452357594";
  const membershipType = "1";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const activitiesWon = await DestinyService.getAccountStats(
        membershipType,
        membershipID
      );
      setData(activitiesWon);

      const allTimeKills = await DestinyService.getAllTimeKills(
        membershipType,
        membershipID
      );
      setAllTimeKills(allTimeKills);

      const highestLight = await DestinyService.getHighestLight(
        membershipType,
        membershipID
      );
      setHighestLight(highestLight);

      const killsPVP = await DestinyService.getPvpKills(
        membershipType,
        membershipID
      );
      setPvpKills(killsPVP);

      const assists = await DestinyService.getAssists(
        membershipType,
        membershipID
      );
      setAssists(assists);

      const accountName = await DestinyService.getAccountName(
        membershipType,
        membershipID
      );
      setAccountName(accountName);

      const activitiesCleared = await DestinyService.getActivitiesCleared(
        membershipType,
        membershipID
      );
      setActivitiesCleared(activitiesCleared);

      const killsPvE = await DestinyService.getPveKills(
        membershipType,
        membershipID
      );
      setPveKills(killsPvE);

      const deathsPve = await DestinyService.getPveDeaths(
        membershipType,
        membershipID
      );
      setPveDeaths(deathsPve);

      const KdRatio = await DestinyService.getKD(
        membershipType,
        membershipID
      );
      setKdRatio(KdRatio);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const toggleSidePanel = (statType) => {
    setSidePanelOpen(!sidePanelOpen);
    setSelectedStat(statType); // Update the selected stat type
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <body>
      <div className="topBar">
        <h1 className="mainTitle">StatFlowAI</h1>
      </div>
      <div className="">
        <h1 className="accountName">{accName}</h1>
      </div>
      <div className="lifetimeBox">
        <p className="lifetimeTitle">Lifetime Statistics</p>
        <div className="matchesWon" onClick={() => toggleSidePanel("matchesWon")}>
          <p>Activities Won:</p>
          <p className="data">{data}</p>
        </div>
        <div className="box2" onClick={() => toggleSidePanel("alltimeKills")}>
          <p>Kills:</p>
          <p className="data">{allTimeKills}</p>
        </div>
        <div className="box3" onClick={() => toggleSidePanel("highestLight")}>
          <p>Highest Light Level:</p>
          <p className="data">{highestLight}</p>
        </div>
        <div className="box4" onClick={() => toggleSidePanel("characterCount")}>
          <p>Character Count:</p>
          <p className="data">3</p>
        </div>
      </div>
      <div className="pvpBox">
        <p className="lifetimeTitle">PVP</p>
        <div className="box1" onClick={() => toggleSidePanel("pvpKills")}>
          <p>Kills:</p>
          <p className="data">{pvpKills}</p>
        </div>
        <div className="box2" onClick={() => toggleSidePanel("kdRatio")}>
          <p>KD:</p>
          <p className="data">{kdRatio}</p>
        </div>
        <div className="box3" onClick={() => toggleSidePanel("assists")}>
          <p>Assists:</p>
          <p className="data">{assists}</p>
        </div>
      </div>
      <div className="pveBox">
        <p className="lifetimeTitle">PVE</p>
        <div className="box1" onClick={() => toggleSidePanel("activitiesCleared")}>
          <p>Activities Cleared:</p>
          <p className="data">{actCleared}</p>
        </div>
        <div className="box2" onClick={() => toggleSidePanel("pveKills")}>
          <p>Kills:</p>
          <p className="data">{pveKills}</p>
        </div>
        <div className="box3" onClick={() => toggleSidePanel("pveDeaths")}>
          <p>Deaths:</p>
          <p className="data">{pveDeaths}</p>
        </div>
      </div>
      <div className={`sidePanel ${sidePanelOpen ? 'open' : ''}`}>
        {selectedStat === "matchesWon" && <p className="sidePanelText">Matches Won: {data}</p>}
        {selectedStat === "alltimeKills" && <p className="sidePanelText">All time kills: {allTimeKills}</p>}
        {selectedStat === "pvpKills" && <p className="sidePanelText">PVP Kills: {pvpKills}</p>}
        {selectedStat === "activitiesCleared" && <p className="sidePanelText">PvE Activities Cleared: {actCleared}</p>}
        {selectedStat === "kdRatio" && <p className="sidePanelText">Kills/Death Ratio: {kdRatio}</p>}
        {selectedStat === "highestLight" && <p className="sidePanelText">Highest Light Level Reached: {highestLight}</p>}
        {selectedStat === "characterCount" && <p className="sidePanelText">Amount of Characters Owned: 3</p>}
        {selectedStat === "assists" && <p className="sidePanelText">Assists in PVP: {assists}</p>}
        {selectedStat === "pveKills" && <p className="sidePanelText">Kills in PVE: {pveKills}</p>}
        {selectedStat === "pveDeaths" && <p className="sidePanelText">Deaths in PVE: {pveDeaths}</p>}
        {/* Add similar conditionals for other stat types */}
      </div>
      <div className="footer">
        <p className="author">Developed by Anton Korzhan</p>
      </div>
    </body>
  );
};

export default Home;
