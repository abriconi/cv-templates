import { useUserDataContext } from "../../../context/UserDataContext";
import { SkillItem } from "../../../shared-components/SkillItem";
import { HeadingVertex } from "./HeadingVertex";

export const SkillsVertex = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.skills || userData.skills.length === 0) return null;

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingVertex tag="h2" title="Skills" />

      <div className="flex flex-col gap-1 w-full">
        {userData.skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
