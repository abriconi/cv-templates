import { useUserDataContext } from "../../../context/UserDataContext";
import { EducationItem } from "../../../shared-components/EducationItem";
import { HeadingAurora } from "../../../shared-components/Heading";

export const EducationAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData?.education?.length) return null;

  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Education" />
      <div className="flex flex-col gap-2">
        {userData.education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
