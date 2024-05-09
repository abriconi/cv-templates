import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExperienceItem } from "../../../shared-components/ExperienceItem";
import { VerticalDivider } from "../../../shared-components/VerticalDivider/VerticalDivider";
import { HeadingEcho } from "./HeadingEcho";
import { useUserDataContext } from "../../../context/UserDataContext";

export const ExperienceEcho = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 items-center -ml-1.5">
          <FontAwesomeIcon icon={faBriefcase} style={{ color: "var(--primary-color)" }} />
          <HeadingEcho tag="h2" title="Experience" />
        </div>
        <>
          {userData.experience.map((item, index) => (
            <VerticalDivider key={index}>
              <ExperienceItem item={item} key={index} />
            </VerticalDivider>
          ))}
        </>
      </div>
    )
  );
};
