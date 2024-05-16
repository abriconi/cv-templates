import clsx from "clsx";
import styles from "../zenith.module.css";
import { HeadingZenith } from "./HeadingZenith";
import { useUserDataContext } from "../../../context/UserDataContext";
import { UserPhotoZenith } from "./UserPhotoZenith";
import { ProfileZenith } from "./ProfileZenith";

export const HeaderZenith = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center">
          <div className="w-1/3">
            <UserPhotoZenith />
          </div>
          <div className="w-2/3">
            <HeadingZenith tag="h1" title={`${userData.firstName} ${userData.lastName}`} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/3">
            <HeadingZenith tag="h3" title={userData.jobPosition} />
            <p className="text-sm">{userData.email}</p>
            <p className="text-sm pb-2">{userData.phone}</p>
            <p className="text-sm">
              {userData.city}, {userData.country}
            </p>
          </div>
          <ProfileZenith />
        </div>
        <div className={clsx(styles.border)}></div>
      </div>
    )
  );
};
