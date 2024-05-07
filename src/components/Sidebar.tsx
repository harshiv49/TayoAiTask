import React from "react";
import { FaAddressBook, FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SideBarProps {
  isSideBarOpen: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ isSideBarOpen }) => {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate("/");
  };

  const handleChartsClick = () => {
    navigate("/charts");
  };

  return (
    <div
      className={`${
        isSideBarOpen ? "w-2/5 md:w-1/4" : "w-1/10"
      } bg-gray-800 transition-all duration-300 h-screen`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col text-center">
          <div
            className="p-4 flex items-center text-white hover:rounded-xl focus:rounded-xl hover:text-black hover:bg-white focus:text-black focus:bg-white cursor-pointer"
            onClick={handleContactsClick}
          >
            <FaAddressBook className="mr-2 md:mr-4 text-base md:text-3xl" />
            <p className="text-base md:text-3xl">Contacts</p>
          </div>

          <div
            className="p-4 flex items-center text-white hover:rounded-xl focus:rounded-xl hover:text-black hover:bg-white focus:text-black focus:bg-white cursor-pointer"
            onClick={handleChartsClick}
          >
            <FaChartBar className="mr-2 md:mr-4 text-base md:text-3xl" />
            <p className="text-base md:text-3xl">Charts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
