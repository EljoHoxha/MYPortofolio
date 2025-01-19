import { IconProps } from "@phosphor-icons/react";
import React from "react";
interface AboutInfoCardProps {
  title: string;
  text: string;
  icon: React.ComponentType<IconProps>;
}
const AboutInfoCard = (props: AboutInfoCardProps) => {
  const { title, text } = props;

  return (
    <div className="w-full flex flex-col items-center md:items-start md:flex-row gap-4 flex-1 p-7.5 bg-black-300 rounded-4xl ">
      <div>
        <props.icon className="w-5" />
      </div>

      <div className="flex  flex-col gap-2">
        <h3 className="text-white-100 text-center md:text-left font-bold text-base md:text-lg">
          {title}
        </h3>
        <p className="text-white-200 text-center md:text-left text-sm md:text-[15px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutInfoCard;
