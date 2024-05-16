import { useUserDataContext } from "../../../context/UserDataContext";
import { ExperienceItem } from "../../../shared-components/ExperienceItem";
import { HeadingAurora } from "../../../shared-components/Heading";

export const ExperienceAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.experience || userData.experience.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Experience" />

      <div className="flex flex-col gap-2">
        {userData.experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
