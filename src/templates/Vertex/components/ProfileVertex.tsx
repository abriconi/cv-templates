import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadingVertex } from "./HeadingVertex";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useUserDataContext } from "../../../context/UserDataContext";

export const ProfileVertex = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-2 items-start">
        <HeadingVertex tag="h2" title="Profile">
          <FontAwesomeIcon icon={faUser} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
        </HeadingVertex>
        {userData && <p className="text-sm">{userData.summary}</p>}
      </div>
    )
  );
};
