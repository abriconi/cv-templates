import { HeadingLumina } from "./HeadingLumina";
import { useUserDataContext } from "../../../context/UserDataContext";

export const ProfileLumina = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-2 items-start">
        <HeadingLumina tag="h2" title="Profile" />
        <p className="text-sm">{userData.summary}</p>
      </div>
    )
  );
};
