import LineChart from "./Line";
import Maps from "./Maps";
import { SideBar } from "./Sidebar";

interface ChartsProps {
  isSideBarOpen: boolean;
}

export default function Charts({ isSideBarOpen }: ChartsProps) {
  return (
    <div className="flex bg-black">
      <SideBar isSideBarOpen={isSideBarOpen} />
      <div className="flex flex-col h-full w-full">
        <div className="box-border h-80 w-[600px]">
          <LineChart />
        </div>
        <div className="box-border h-1/2">
          <Maps />
        </div>
      </div>
    </div>
  );
}
