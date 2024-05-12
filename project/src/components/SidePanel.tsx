import { SidePanelTitles } from "@/constants/BoxItemConstants";

const SidePanel = ({ statType, stat }: { statType: string; stat: string }) => {
  const title = SidePanelTitles[statType];
  return (
    <div className="sidePanel open">
      <p className="sidePanelText">
        {title}: {stat}
      </p>
    </div>
  );
};

export default SidePanel;
