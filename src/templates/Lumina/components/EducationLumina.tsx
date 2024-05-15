import { useUserDataContext } from "../../../context/UserDataContext";
import { EducationItem } from "../../../shared-components/EducationItem";
import { HeadingLumina } from "./HeadingLumina";

export const EducationLumina = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.education || userData.education.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Education" />
      <div className="flex flex-col gap-2">
        {userData.education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
