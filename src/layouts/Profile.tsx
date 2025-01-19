import { useTranslation } from "react-i18next";
import Avatar from "../assets/avatar/my-avatar.png";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "react-responsive";

import {
  DeviceMobile,
  EnvelopeSimple,
  MapPin,
  CalendarDots,
  IconProps,
  FacebookLogo,
  InstagramLogo,
  GithubLogo,
  ArrowDown,
  ArrowUp,
} from "@phosphor-icons/react";

import React, { useState } from "react";
import { Collapsible } from "@/components/ui/collapsible";

const Profile = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Collapsible open={isMobile ? isOpen : true} onOpenChange={setIsOpen}>
      <div className="relative h-full flex flex-col items-center justify-between md:w-fit p-7.5 pt-12 bg-black-200 border rounded-md border-black-300 rounded-4xl">
        {/* Toggle Button */}
        {isMobile && (
          <div
            className="absolute sm:hidden top-4 right-4 rounded-tr-3xl rounded-bl-3xl bg-yellow-gradient p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ArrowUp size={20} className="text-white-100" />
            ) : (
              <ArrowDown size={20} className="text-white-100" />
            )}
          </div>
        )}

        {/* Static Content */}
        <div className="w-full md:w-fit flex flex-col items-center">
          <ProfileHead label={t("webAndAppDeveloper")} />
          <Separator className="my-3 md:my-6" />
        </div>

        {/* Collapsible Animated Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="w-full sm:flex-col flex flex-wrap md:flex-col gap-5">
            {profileInfo.map((info, index) => (
              <ProfileInfo key={index} {...info} />
            ))}
          </div>
          <Separator className="md:hidden my-3 md:my-6" />

          {/* Social Media Links */}
          <div className="flex w-full md:justify-center gap-5 mt-5">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-white-100 hover:text-gray-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Collapsible>
  );
};

export default Profile;

interface ProfileInfoProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

const ProfileInfo = ({ title, description, icon }: ProfileInfoProps) => {
  const Icon = icon;
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 gap-2">
      <div className="flex place-items-center shadow-md p-2 h-fit bg-black-400 rounded-xl">
        <Icon className="text-primary-100  w-4 h-4 md:w-5 md:h-5" />
      </div>
      <div className="flex flex-col gap-[2px] ">
        <h3 className="text-xs text-gray-700 uppercase">{t(`${title}`)}</h3>
        <p className="text-white-200 text-xs md:text-sm font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProfileHead = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-5 w-full md:gap-0 md:w-fit  md:flex-col">
      <div className="p-0 rounded-3xl bg-gradient-dark md:w-fit md:p-3 md:rounded-4xl">
        <img
          src={Avatar}
          alt="profile"
          className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] "
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-0">
        <h1 className="text-[17px] text-white-100 md:text-center md:text-3xl font-semibold md:my-7.5">
          Eljo Hoxha
        </h1>
        <p className="text-xs text-white-100 px-[10px] rounded-xl py-2 bg-black-400 ">
          {label}
        </p>
      </div>
    </div>
  );
};
const profileInfo = [
  {
    title: "Email",
    description: "ehoxha23@beder.edu.al",
    icon: EnvelopeSimple,
  },
  {
    title: "phone",
    description: "+355 69 20 20 202",
    icon: DeviceMobile,
  },

  {
    title: "birthday",
    description: "August, 14, 2004",
    icon: CalendarDots,
  },
  {
    title: "location",
    description: "Tirana, Albania",
    icon: MapPin,
  },
];

const socialMedia = [
  {
    icon: FacebookLogo,
    link: "https://www.facebook.com/eljo.hoxha.79",
  },
  {
    icon: InstagramLogo,
    link: "https://www.instagram.com/eljo_hoxha/",
  },
  {
    icon: GithubLogo,
    link: "http://www.github.com/eljohoxha",
  },
];
