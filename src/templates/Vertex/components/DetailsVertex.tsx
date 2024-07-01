import { HeadingVertex } from "./HeadingVertex";
import { useUserDataContext } from "../../../context/UserDataContext";
import { DetailItemVertex } from "./DetailItemVertex";

export const DetailsVertex = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    <div className="flex flex-col items-start">
      <HeadingVertex tag="h2" title="Details" />
      <DetailItemVertex label={userData.city} />
      <DetailItemVertex label={userData.country} />
      <DetailItemVertex label={userData.phone} />
      <DetailItemVertex label={userData.email} color="var(--primary-color)" />
    </div>
  );
};
