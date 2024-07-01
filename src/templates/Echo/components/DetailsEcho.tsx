import { SectionHeader } from "../../../shared-components/SectionHeader/SectionHeader";
import { useUserDataContext } from "../../../context/UserDataContext";
import { DetailItem } from "../../../shared-components/DetailItem";

export const DetailsEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    userData && (
      <div className="flex flex-col gap-3 items-center">
        <SectionHeader header="Details" />
        <div className="flex flex-col items-center">
          <DetailItem label={userData.city}/>
          <DetailItem label={userData.country}/>
          <DetailItem label={userData.phone}/>
          <DetailItem label={userData.email} className="underline"/>
        </div>
      </div>
    )
  );
};
