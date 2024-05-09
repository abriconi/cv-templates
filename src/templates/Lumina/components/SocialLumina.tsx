import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingLumina } from "./HeadingLumina";

export const SocialLumina = () => {
  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col items-start gap-2">
        <HeadingLumina tag="h2" title="links" uppercase={true} />
        <div className="flex flex-col">
          {userData.social.map((link, index) => (
            <a href={link.link} key={index} className="text-sm cursor-pointer text-white underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    )
  );
};
