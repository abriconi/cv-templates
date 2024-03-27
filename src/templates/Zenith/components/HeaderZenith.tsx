import clsx from "clsx";
import styles from "../zenith.module.css";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";
import { useUserDataContext } from "../../../context/UserDataContext";

export const HeaderZenith = () => {
  const { userData, userPhoto } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center">
          <div className="w-1/3">
            <img src={userPhoto} alt="Uploaded user" className="w-[150px] object-cover aspect-square rounded-md" />
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
          <WrapperShade>
            <HeadingZenith tag="h2" title="Profile" />
            <p className="text-sm">{userData.summary}</p>
          </WrapperShade>
        </div>
        <div className={clsx(styles.border)}></div>
      </div>
    )
  );
};
