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
  const [accessToken, setAccessToken] = useState("");
  const [memberShipId, setMemberShipId] = useState("");
  const [lifetimeBoxInfo, setLifetimeBoxInfo] = useState<BoxInfo>({});
  const [pvpBoxInfo, setPvpBoxInfo] = useState<BoxInfo>({});
  const [pveBoxInfo, setPveBoxInfo] = useState<BoxInfo>({});
  //const [membershipID, setMembershipID] = useState<String>("");
  const membershipID = "4611686018452357594";
  const membershipType = "1";
  const clientId = process.env.authID;
  const clientSecret = process.env.authSecret;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      // Get access token if available
      const storedToken = localStorage.getItem("accessToken");
      //const storedID = localStorage.getItem("membershipId");
      console.log("Stored token", storedToken);
      //console.log("Stored ID", storedID);
      if (storedToken) {
        setAccessToken(storedToken);
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        console.log("Auth code I need before", code);
        if (code) {
          const response = await fetch(
            "https://www.bungie.net/platform/app/oauth/token/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${window.btoa(
                  `${clientId}:${clientSecret}`
                )}`,
              },
              body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: `${window.location.origin}/mainPage`,
              }),
            }
          );
          const data = await response.json();
          console.log("POST Response I want", data);
          const { access_token, membership_id } = data;
          setAccessToken(access_token);
          setMemberShipId(membership_id);
          console.log("Pure values", membership_id);
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("membershipId", membership_id);
        }
      }

      const memID = localStorage.getItem("membershipId") as string;
      console.log("Stored ID", memID);
      const membershipId = await DestinyService.getCurrentAccountID(
        memID,
        membershipType
      );

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

      setIsLoading(false);
    };
    fetchData();
  }, [accessToken, memberShipId]);

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
