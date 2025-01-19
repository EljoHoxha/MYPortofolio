import React from "react";
import Profile from "./Profile";

import { Separator } from "@/components/ui/separator";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
  title?: string;
}
const MainLayout = ({ children, title }: Props) => {
  return (
    <div className="flex justify-center  items-center w-screen overflow-auto min-h-screen h-full bg-black-100  md:h-svh md:overflow-hidden ">
      <div className=" mx-4 mb-20 mt-5 max-w-2xl flex flex-col h-full overflow-scroll sm:overflow-hidden md:my-0  md:max-h-[90vh] md:flex-row md:max-w-7xl md:h-full gap-7.5 ">
        {/* Sidebar */}

        <Profile />

        {/* Scrollable Content */}
        <div className="w-full md:h-full  bg-black-200 rounded-4xl overflow-hidden border-black-300 border ">
          <div className="flex flex-col w-full md:h-full md:overflow-auto md:mb-15 bg-black-200 rounded-4xl">
            <div className="hidden sticky top-0 md:right-0  md:flex justify-end items-center">
              <NavBar />
            </div>
            <div className="p-7.5 pt-0">
              {title && (
                <div className="mt-5 md:mt-[-40px] mb-5">
                  <h2 className="text-[25px] md:text-[32px] text-white-200 font-bold">
                    {title}
                  </h2>
                  <Separator className="animate-bounce w-[30px] h-[3px] bg-yellow-gradient rounded-sm" />
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full md:hidden">
        <NavBar />
      </div>
    </div>
  );
};
export default MainLayout;
