import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { EducationItem } from "../../../shared-components/EducationItem";
import { HeadingEcho } from "./HeadingEcho";
import { VerticalDivider } from "../../../shared-components/VerticalDivider/VerticalDivider";
import { useUserDataContext } from "../../../context/UserDataContext";

export const EducationEcho = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center -ml-1.5">
          <FontAwesomeIcon icon={faGraduationCap} style={{ color: "var(--primary-color)" }} />
          <HeadingEcho tag="h2" title="Education" />
        </div>
        <>
          {userData.education.map((item, index) => (
            <VerticalDivider key={index}>
              <EducationItem item={item} key={index} />
            </VerticalDivider>
          ))}
        </>
      </div>
    )
  );
};
