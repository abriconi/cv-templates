import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useUserDataContext } from "../../../context/UserDataContext";

export const SocialAurora = () => {
  const { userData } = useUserDataContext();  

  if (!userData?.social?.length) return null;

  return (
    <div className="flex flex-col gap-2">
      {userData.social.map((link, index) => (
        <div key={index} className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faLink} />
          <a href={link.link} className="underline">
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
};
