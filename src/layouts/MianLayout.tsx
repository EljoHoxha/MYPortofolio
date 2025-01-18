import React from "react";
import Profile from "./Profile";

const MianLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black-100 min-h-screen min-w-screen">
      <div>
        <Profile />
        <div className="w-full h-full bg-red-200"> {children}</div>
      </div>
    </div>
  );
};

export default MianLayout;
