import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadingVertex } from "./HeadingVertex";
import { EducationItem } from "../../../shared-components/EducationItem";
import { useUserDataContext } from "../../../context/UserDataContext";

export const EducationVertex = () => {
  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col gap-2 items-start">
        <HeadingVertex tag="h2" title="Education">
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
        </HeadingVertex>

        {userData && (
          <div className="flex flex-col gap-2">
            {userData.education.map((item, index) => (
              <EducationItem key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    )
  );
};
