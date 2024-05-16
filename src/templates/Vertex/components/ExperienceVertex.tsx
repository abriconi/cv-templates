import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ExperienceItem } from "../../../shared-components/ExperienceItem";
import { HeadingVertex } from "./HeadingVertex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserDataContext } from "../../../context/UserDataContext";

export const ExperienceVertex = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.experience || userData.experience.length === 0) return null;
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingVertex title="Experience" tag="h2">
        <FontAwesomeIcon icon={faBriefcase} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
      </HeadingVertex>

      <div className="flex flex-col gap-2">
        {userData.experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
