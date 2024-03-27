import { WrapperShade } from "./WrapperShade";
import { HeadingZenith } from "./HeadingZenith";
import { SkillItemZenith } from "./SkillItemZenith";
import { useUserDataContext } from "../../../context/UserDataContext";


export const SkillsZenith = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <WrapperShade>
        <HeadingZenith tag="h2" title="Skills" />
        {userData.skills.map((item, index) => (
          <SkillItemZenith skill={item} key={index} />
        ))}
      </WrapperShade>
    )
  );
};
