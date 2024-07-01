import { useUserDataContext } from "../../../context/UserDataContext";
import { DetailItem } from "../../../shared-components/DetailItem";
import { HeadingLumina } from "./HeadingLumina";

export const DetailsLumina = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    <div className="flex flex-col gap-2">
      <HeadingLumina tag="h2" title="details" uppercase={true} />
      <div className="flex flex-col text-sm">
        <DetailItem label={userData.city} />
        <DetailItem label={userData.country} />
        <DetailItem label={userData.phone} />
        <DetailItem label={userData.email} />
      </div>
    </div>
  );
};
