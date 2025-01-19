import { useTranslation } from "react-i18next";
import Avatar from "../assets/avatar/my-avatar.png";
import { Separator } from "@/components/ui/separator";
import {
  DeviceMobile,
  EnvelopeSimple,
  MapPin,
  CalendarDots,
  IconProps,
  FacebookLogo,
  InstagramLogo,
  GithubLogo,
} from "@phosphor-icons/react";

import React from "react";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full flex flex-col items-center justify-between w-fit p-7.5 pt-12 bg-black-200 border rouned-md border-black-300 rounded-4xl">
      <div className="flex flex-col items-center ">
        <ProfileHead label={t("webAndAppDeveloper")} />
        <Separator className="my-6" />

        <div className="flex flex-col gap-7">
          {profileInfo.map((info, index) => (
            <ProfileInfo key={index} {...info} />
          ))}
        </div>
      </div>
      <div className="flex  w-full  justify-center gap-5 mt-5">
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
    <div className="flex gap-2">
      <div className="flex place-items-center shadow-md p-2 bg-black-400 rounded-xl">
        <Icon size={20} className="text-primary-100" />
      </div>
      <div className="flex flex-col gap-[2px] ">
        <h3 className="text-xs text-gray-700 uppercase">{t(`${title}`)}</h3>
        <p className="text-white-200 text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

const ProfileHead = ({ label }: { label: string }) => {
  return (
    <>
      <div className="w-fit p-3 bg-gradient-dark rounded-4xl">
        <img src={Avatar} alt="profile" className="w-[150px] h-[150px] " />
      </div>
      <h1 className="text-center text-white-100 text-3xl my-7.5">Eljo Hoxha</h1>
      <p className="text-white-100 px-[10px] rounded-xl py-2 bg-black-400 ">
        {label}
      </p>
    </>
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
