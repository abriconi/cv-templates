import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingVertex } from "./HeadingVertex";

export const SocialVertex = () => {
  const { userData } = useUserDataContext();
  return (
    userData && (
      <div className="flex flex-col items-start gap-2">
        <HeadingVertex tag="h2" title="Links" />

        <div className="flex flex-col gap-1">
          {userData.social.map((link, index) => (
            <a href={link.link} key={index} className="text-sm cursor-pointer" style={{ color: "var(--primary-color)" }}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    )
  );
};
