import React from "react";
import { FaAddressBook, FaChartBar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate("/");
  };

  const handleChartsClick = () => {
    navigate("/charts");
  };

  return (
    <div className="w-1/10 bg-[rgb(18,18,18)] transition-all duration-300 h-screen font-roboto">
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

export default SideBar;
