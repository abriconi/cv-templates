import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";

export const SocialZenith = () => {
  const { userData } = useUserDataContext();

  if (!userData?.social?.length) return null;
  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Social" />
      {userData.social.map((item, index) => (
        <a href={item.link} className="text-sm underline" key={index}>
          {item.label}
        </a>
      ))}
    </WrapperShade>
  );
};
