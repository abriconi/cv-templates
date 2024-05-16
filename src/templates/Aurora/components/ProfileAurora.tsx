import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingAurora } from "../../../shared-components/Heading";

export const ProfileAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.summary) return null;

  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Profile" />
      <p className="text-sm">{userData.summary}</p>
    </div>
  );
};
