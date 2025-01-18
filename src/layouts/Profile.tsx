import { useTranslation } from "react-i18next";
import Avatar from "../assets/avatar/my-avatar.png";
const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center w-fit px-7.5 py-15 bg-black-200 border rouned-md border-black-300 rounded-4xl">
      <div className="w-fit p-3 bg-gradient-dark rounded-4xl">
        <img src={Avatar} alt="profile" className="w-[150px] h-[150px] " />
      </div>
      <h1 className="text-center text-white-100 text-3xl my-7.5">Eljo Hoxha</h1>
      <p className="text-white-100 px-[10px] rounded-xl py-2 bg-black-400 ">
        {t("webAndAppDeveloper")}
      </p>
    </div>
  );
};

export default Profile;
