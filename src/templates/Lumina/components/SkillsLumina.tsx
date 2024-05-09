import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingLumina } from "./HeadingLumina";
import { SkillItemLumina } from "./SkillItemLumina";

export const SkillsLumina = () => {
  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col items-start w-full gap-2">
        <HeadingLumina tag="h2" title="skills" uppercase={true} />
        <div className="flex flex-col gap-2 w-full">
          {userData.skills.map((skill, index) => (
            <SkillItemLumina skill={skill} key={index} />
          ))}
        </div>
      </div>
    )
  );
};
