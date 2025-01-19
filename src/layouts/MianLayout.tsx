import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import { Separator } from "@/components/ui/separator";

interface Props {
  children: React.ReactNode;
  title?: string;
}
const MainLayout = ({ children, title }: Props) => {
  return (
    <div className="flex justify-center items-center bg-black-100 h-screen w-screen overflow-hidden">
      <div className="lg:max-w-7xl max-w-2xl flex flex-1  max-h-[90vh] h-full gap-7.5">
        {/* Sidebar */}

        <Profile />

        {/* Scrollable Content */}
        <div className="w-full h-full bg-black-200 rounded-4xl overflow-hidden border-black-300 border">
          <div className="relative w-full h-full overflow-auto mb-15 bg-black-200">
            <Header />
            <div className="px-7.5">
              {title && (
                <div className="mt-[-40px] mb-5">
                  <h2 className="text-[32px] text-white-200 font-bold">
                    {title}
                  </h2>
                  <Separator className="w-[30px] h-[3px] bg-yellow-gradient rounded-sm" />
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
