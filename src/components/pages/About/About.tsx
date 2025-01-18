import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("phone")}</p>
    </div>
  );
};

export default About;
