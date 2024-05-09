export const BoxItemTitles: { [key: string]: string } = {
  data: "Activities Won",
  pveDeaths: "Deaths",
  pveKills: "Kills",
  activitiesCleared: "Activities Cleared",
  pvpKills: "Kills",
  highestLight: "Highest Light",
  allTimeKills: "Kills",
  kdRatio: "KD",
  assists: "Assists",
};

{
  /* <div className={`sidePanel ${sidePanelOpen ? "open" : ""}`}>
          {selectedStat === "matchesWon" && (
            <p className="sidePanelText">Matches Won: {data}</p>
          )}
          {selectedStat === "alltimeKills" && (
            <p className="sidePanelText">All time kills: {allTimeKills}</p>
          )}
          {selectedStat === "pvpKills" && (
            <p className="sidePanelText">PVP Kills: {pvpKills}</p>
          )}
          {selectedStat === "activitiesCleared" && (
            <p className="sidePanelText">PvE Activities Cleared: {actCleared}</p>
          )}
          {selectedStat === "kdRatio" && (
            <p className="sidePanelText">Kills/Death Ratio: {kdRatio}</p>
          )}
          {selectedStat === "highestLight" && (
            <p className="sidePanelText">
              Highest Light Level Reached: {highestLight}
            </p>
          )}
          {selectedStat === "characterCount" && (
            <p className="sidePanelText">Amount of Characters Owned: 3</p>
          )}
          {selectedStat === "assists" && (
            <p className="sidePanelText">Assists in PVP: {assists}</p>
          )}
        </div> */
}
export const SidePanelTitles: { [key: string]: string } = {
  data: "Activities Completed",
  pveDeaths: "All Deaths in PVE activities",
  pveKills: "All Combatant Kills in PVE",
  activitiesCleared: "Activities Cleared",
  pvpKills: "All Guardian Kills in PVP",
  highestLight: "Highest Light achieved on account",
  allTimeKills: "All time Kills on account",
  kdRatio: "KD Ratio in PVP",
  assists: "Assists in PVP",
};
