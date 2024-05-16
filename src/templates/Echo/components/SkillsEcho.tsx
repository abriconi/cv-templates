import { useUserDataContext } from "../../../context/UserDataContext";
import { SectionHeader } from "../../../shared-components/SectionHeader/SectionHeader";
import { SkillItem } from "../../../shared-components/SkillItem";

export const SkillsEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.skills || userData.skills.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <SectionHeader header="Skills" />
      <div className="w-full">
        {userData.skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} aligning="self-center" />
        ))}
      </div>
    </div>
  );
};
