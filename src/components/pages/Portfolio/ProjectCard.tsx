import { ProjectType } from "./constant";

interface Props {
  project: ProjectType;
}

const ProjectCard = ({ project }: Props) => {
  const { title, img, isWeb } = project;
  return (
    <div className="flex flex-col items-center gap-2 bg-black-400 px-3 py-5 rounded-2xl">
      <img
        src={img}
        alt={title}
        className="max-w-[300px] w-full h-[150px] object-cover rounded-xl"
      />
      <div className="flex flex-col justify-start w-full">
        <h2 className="text-gray-300 text-lg">{title}</h2>
        <p className="text-gray-400">
          {isWeb ? "Web Develompmet" : "Application"}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
