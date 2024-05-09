import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingLumina } from "./HeadingLumina";

export const DetailsLumina = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-2">
        <HeadingLumina tag="h2" title="details" uppercase={true} />
        <div className="flex flex-col text-sm">
          <p>{userData.city}</p>
          <p>{userData.country}</p>
          <p>{userData.phone}</p>
          <p>{userData.email}</p>
        </div>
      </div>
    )
  );
};
