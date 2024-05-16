import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";

export const ProfileZenith = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.summary) return null;

  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Profile" />
      <p className="text-sm">{userData.summary}</p>
    </WrapperShade>
  );
};
