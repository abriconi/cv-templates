import { useUserDataContext } from "../../../context/UserDataContext";
import { ExperienceItem } from "../../../shared-components/ExperienceItem";
import { HeadingLumina } from "./HeadingLumina";

export const ExperienceLumina = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.experience || userData.experience.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Experience" />

      <div className="flex flex-col gap-2">
        {userData.experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
