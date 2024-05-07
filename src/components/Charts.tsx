import LineChart from "./Line";
import Maps from "./Maps";
import SideBar from "./Sidebar";

interface ChartsProps {
  isSideBarOpen: boolean;
}

export default function Charts({ isSideBarOpen }: ChartsProps) {
  return (
    <div className="flex bg-[rgb(24,24,24)] h-screen">
      {isSideBarOpen && <SideBar />}
      <div className="flex flex-col w-full m-10">
            <LineChart />
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <div className="h-[300px] md:h-full">
            <p className="text-3xl text-white text-center">Leaflet Map</p>
            <Maps />
          </div>
        </div>
      </div>
    </div>
  );
}
