import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { HeadingEcho } from "./HeadingEcho";
import { VerticalDivider } from "../../../shared-components/VerticalDivider/VerticalDivider";
import { useUserDataContext } from "../../../context/UserDataContext";

export const ProfileEcho = () => {
  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-4 items-center -ml-1.5">
          <FontAwesomeIcon icon={faUser} style={{ color: "var(--primary-color)" }} />
          <HeadingEcho tag="h2" title="Profile" />
        </div>

        <VerticalDivider>
          <div>{userData.summary}</div>
        </VerticalDivider>
      </div>
    )
  );
};
