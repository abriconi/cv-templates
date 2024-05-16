import { HeadingAurora } from "../../../shared-components/Heading";
import { useUserDataContext } from "../../../context/UserDataContext";
import { UserPhotoAurora } from "./UserPhotoAurora";

export const HeaderAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData) return null;

  return (
    userData && (
      <div className="flex flex-row w-full">
        <div className="w-1/3">
          <UserPhotoAurora />
        </div>

        <div className="w-2/3 flex flex-col justify-between p-10" style={{ backgroundColor: "var(--primary-color)" }}>
          <div className="flex flex-col gap-2">
            <HeadingAurora tag="h1" title={`${userData.firstName} ${userData.lastName}`} />
            <HeadingAurora tag="h2" title={`${userData.jobPosition}`} />
          </div>
          <div className="flex flex-col gap-1">
            <p>
              {userData.city}, {userData.country}
            </p>
            <p>
              {userData.phone} &#183; <span className="underline">{userData.email}</span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};
