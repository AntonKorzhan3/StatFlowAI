import { useEffect, useState } from "react";
import { DestinyService } from "@/services/destinyService";
import ChatbotBox from "@/components/ChatbotBox";
import Title from "@/components/Title";
import { BoxInfo } from "@/types/BoxInfo";
import SidePanel from "@/components/SidePanel";
import StatsBox from "@/components/StatsBox/StatsBox";
import Footer from "@/components/Footer";
import StatsAndAiBoxLayout from "@/components/StatsAndAiBoxLayout";
import StatsLayout from "@/components/StatsLayout";
import LeftPanelLayout from "@/components/LeftPanelLayout";
import AccountName from "@/components/AccountName";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sidePanelOpen, setSidePanelOpen] = useState(false); // New state to track side panel
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [selectedStatType, setSelectedStatType] = useState(""); // State to store the selected stat type
  const [selectedStat, setSelectedStat] = useState(""); // State to store the selected stat type
  const [accountName, setAccountName] = useState<String>("");

  const [lifetimeBoxInfo, setLifetimeBoxInfo] = useState<BoxInfo>({});
  const [pvpBoxInfo, setPvpBoxInfo] = useState<BoxInfo>({});
  const [pveBoxInfo, setPveBoxInfo] = useState<BoxInfo>({});

  // const [error, setError] = useState(null);
  const membershipID = "4611686018452357594";
  const membershipType = "1";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const accountData = await DestinyService.getAccountStats(
        membershipType,
        membershipID
      );

      const mergedAllCharacters = accountData.Response.mergedAllCharacters;
      const lifetimeBoxInfo: BoxInfo = {
        data: mergedAllCharacters.results.allPvP.allTime.activitiesWon.basic
          .displayValue,
        allTimeKills:
          mergedAllCharacters.merged.allTime.kills.basic.displayValue,
        highestLight:
          mergedAllCharacters.merged.allTime.highestLightLevel.basic
            .displayValue,
      };
      setLifetimeBoxInfo(lifetimeBoxInfo);

      const pvpData =
        accountData.Response.mergedAllCharacters.results.allPvP.allTime;
      const pvpBoxInfo: BoxInfo = {
        pvpKills: pvpData.kills.basic.displayValue,
        kdRatio: pvpData.killsDeathsRatio.basic.displayValue,
        assists: pvpData.assists.basic.displayValue,
      };
      setPvpBoxInfo(pvpBoxInfo);

      const pveData =
        accountData.Response.mergedAllCharacters.results.allPvE.allTime;
      const pveBoxInfo: BoxInfo = {
        activitiesCleared: pveData.activitiesCleared.basic.displayValue,
        pveKills: pveData.kills.basic.displayValue,
        pveDeaths: pveData.deaths.basic.displayValue,
      };
      setPveBoxInfo(pveBoxInfo);

      const accountName = await DestinyService.getAccountName(
        membershipType,
        membershipID
      );
      setAccountName(accountName);
      console.log("Acc name test", accountName);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const toggleSidePanel = ({
    statType,
    stat,
  }: {
    statType: string;
    stat: string;
  }) => {
    setSidePanelOpen(!sidePanelOpen);
    setSelectedStatType(statType);
    setSelectedStat(stat);
  };

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="flex flex-col h-screen min-w-lg">
        <Sidebar></Sidebar>
        <Title />
        <StatsAndAiBoxLayout>
          <LeftPanelLayout>
            <AccountName accountName={accountName} />
            <StatsLayout>
              <div className="lifeTimeBox">
                <StatsBox
                  title="Lifetime Statistics"
                  info={lifetimeBoxInfo}
                  boxItemFunction={toggleSidePanel}
                />
              </div>
              <div className="pvpBox">
                <StatsBox
                  title="PVP"
                  info={pvpBoxInfo}
                  boxItemFunction={toggleSidePanel}
                />
              </div>
              <div className="pveBox">
                <StatsBox
                  title="PVE"
                  info={pveBoxInfo}
                  boxItemFunction={toggleSidePanel}
                />
              </div>
            </StatsLayout>
          </LeftPanelLayout>
          <ChatbotBox />
        </StatsAndAiBoxLayout>
        <Footer />
      </div>
      <div className={`sidePanel ${sidePanelOpen ? "open" : ""}`}>
        {sidePanelOpen && (
          <SidePanel statType={selectedStatType} stat={selectedStat} />
        )}
      </div>
    </>
  );
};

export default Home;
