import { useUserDataContext } from "../../../context/UserDataContext";
import { ExperienceItemZenith } from "./ExperienceItemZenith";
import { HeadingZenith } from "./HeadingZenith";

export const ExperienceZenith = () => {
  const { userData } = useUserDataContext();

  if (!userData?.experience?.length) return null;

  return (
    <div className="flex flex-col gap-2">
      <HeadingZenith tag="h2" title="Experience" />
      {userData.experience.map((item, index) => (
        <ExperienceItemZenith item={item} key={index} />
      ))}
    </div>
  );
};
