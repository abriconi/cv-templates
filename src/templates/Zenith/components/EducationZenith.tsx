import { useUserDataContext } from "../../../context/UserDataContext";
import { EducationItemZenith } from "./EducationItemZenith";
import { HeadingZenith } from "./HeadingZenith";

export const EducationZenith = () => {

  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col gap-2">
        <HeadingZenith tag="h2" title="Education" />
        {userData.education.map((item, index) => (
          <EducationItemZenith item={item} key={index} />
        ))}
      </div>
    )
  );
};
