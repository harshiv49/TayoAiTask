import React from "react";
import { FaBars } from "react-icons/fa";

interface AppBarProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppBar: React.FC<AppBarProps> = ({ setIsSideBarOpen }) => {
  return (
    <>
      <div>
        <div className="bg-gray-800 p-5 place-content-between">
          <div className="text-xl md:text-4xl text-white flex items-center">
            <FaBars
              className="mr-2 cursor-pointer"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            />
            {/* Add sidebar icon here */}
            TayoAI
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBar;
