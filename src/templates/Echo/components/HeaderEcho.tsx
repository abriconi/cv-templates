import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadingEcho } from "./HeadingEcho";
import { useUserDataContext } from "../../../context/UserDataContext";
import { UserPhotoEcho } from "./UserPhotoEcho";

export const HeaderEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    <div className="flex flex-col gap-5 pb-3 items-center">
      <div className="w-1/6">
        <UserPhotoEcho />
      </div>
      <HeadingEcho tag="h1" title={`${userData.firstName} ${userData.lastName}`} />

      <div className="flex flex-row gap-5">
        <HeadingEcho tag="h2" title={userData.jobPosition} />
        <div className="flex flex-row gap-1 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <HeadingEcho tag="h2" title={`${userData.city}, ${userData.country}`} />
        </div>
        <div className="flex flex-row gap-1 items-center">
          <FontAwesomeIcon icon={faPhone} />
          <HeadingEcho tag="h2" title={userData.phone} />
        </div>
      </div>
    </div>
  );
};
