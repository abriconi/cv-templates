import { HeadingAurora } from "../../../shared-components/Heading";
import { SkillItem } from "../../../shared-components/SkillItem";
import { useUserDataContext } from "../../../context/UserDataContext";

export const SkillsAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData?.skills?.length) return null;

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <HeadingAurora title="Skills" tag="h2" />
      <div className="flex flex-col gap-2 w-full">
        {userData.skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
