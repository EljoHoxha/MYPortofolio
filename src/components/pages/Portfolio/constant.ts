import PoroWeb from "@/assets/svg/Projects/Poro/restorant.svg";
import PoroAdmin from "@/assets/svg/Projects/Poro/admin.svg";
import PoroLandingPage from "@/assets/svg/Projects/Poro/landingPage.svg";
import PoroMotorrist from "@/assets/svg/Projects/Poro/poroMotorrist.svg";
import PoroApp from "@/assets/svg/Projects/Poro/poroClient.svg";

import Portal from "@/assets/svg/Projects/motomtechPortal.svg";
import ChamberdIn from "@/assets/svg/Projects/ChamberdIn/ChamberdIn.svg";
import PowerOfTwoAdmin from "@/assets/svg/Projects/PowerOfTwo/admin.svg";
import PowerOfTwoMobile from "@/assets/svg/Projects/PowerOfTwo/mobile.svg";
import Paramount from "@/assets/svg/Projects/paramount.svg";
import Enovate from "@/assets/svg/Projects/enov8.svg";
import OneHome from "@/assets/svg/Projects/onHomeSolution.svg";
import KidsPod from "@/assets/svg/Projects/kidspod/kidspod.svg";

export interface ProjectType {
  title: string;
  isWeb?: boolean;
  img: string;
}
const webProjects: ProjectType[] = [
  {
    title: "Poro Web",
    isWeb: true,
    img: PoroWeb,
  },
  {
    title: "Poro Admin",
    isWeb: true,
    img: PoroAdmin,
  },
  {
    title: "Poro",
    isWeb: true,
    img: PoroLandingPage,
  },
  {
    title: "Portal",
    isWeb: true,
    img: Portal,
  },
  {
    title: "ChamberdIn",
    isWeb: true,
    img: ChamberdIn,
  },
  {
    title: "Power of Two Admin",
    isWeb: true,
    img: PowerOfTwoAdmin,
  },
  {
    title: "enov8",
    isWeb: true,
    img: Enovate,
  },
  {
    title: "One Home",
    isWeb: true,
    img: OneHome,
  },
];

const mobileProjects: ProjectType[] = [
  {
    title: "Poro App",
    img: PoroApp,
  },
  {
    title: "Poro Motorrist",
    img: PoroMotorrist,
  },
  {
    title: "KidsPod",
    img: KidsPod,
  },
  {
    title: "Power of Two App",
    img: PowerOfTwoMobile,
  },
  {
    title: "Paramount",
    img: Paramount,
  },
];
const allProjects: ProjectType[] = [...webProjects, ...mobileProjects];

export { allProjects, mobileProjects, webProjects };
