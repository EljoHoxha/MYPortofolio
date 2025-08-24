import AppDevIcon from "@/assets/svg/AppDevIcon";
import WebDevIcon from "@/assets/svg/WebDevIcon";
import MainLayout from "@/layouts/MainLayout";
import { useTranslation } from "react-i18next";
import AboutInfoCard from "./AboutInfoCard";

const About = () => {
  const { t } = useTranslation();

  const cardsInfo = [
    {
      title: t("aboutMe.webDev.title"),
      text: t("aboutMe.webDev.description"),
      icon: WebDevIcon,
    },
    {
      title: t("aboutMe.appDev.title"),
      text: t("aboutMe.appDev.description"),
      icon: AppDevIcon,
    },
  ];

  const currentAge = new Date().getFullYear() - 2004;

  return (
    <MainLayout title={t("aboutMe.title")}>
      <p className="text-sm md:text-[15px] text-gray-light font-light mb-3">
        I discovered my passion for programming at the age of 17, and now, at {currentAge}, I have grown into a skilled web and mobile app developer. I specialize in building dynamic, user-friendly applications that provide seamless experiences across platforms.
      </p>
      <p className="text-sm md:text-[15px] text-gray-light font-light">
        {t("aboutMe.description2")}
      </p>
      <div>
        <h1 className="text-lg md:text-2xl text-white-200 font-bold my-6">
          {t("aboutMe.whatImDoing")}
        </h1>
        <div className="grid-template-1 gap-5 grid lg:grid-cols-2">
          {cardsInfo.map((card, index) => (
            <AboutInfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
