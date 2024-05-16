import { SectionHeader } from "../../../shared-components/SectionHeader/SectionHeader";
import { useUserDataContext } from "../../../context/UserDataContext";

export const DetailsEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    userData && (
      <div className="flex flex-col gap-3 items-center">
        <SectionHeader header="Details" />
        <div className="flex flex-col items-center">
          <p>{userData.city}</p>
          <p>{userData.country}</p>
          <p>{userData.phone}</p>
          <p className="underline">{userData.email}</p>
        </div>
      </div>
    )
  );
};
