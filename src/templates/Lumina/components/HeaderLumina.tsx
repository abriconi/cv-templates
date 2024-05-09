import { HeadingLumina } from "./HeadingLumina";
import { useUserDataContext } from "../../../context/UserDataContext";

export const HeaderLumina = () => {
  const { userData, userPhoto } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col gap-5 items-center">
        <div className="rounded-full bg-gray-50 w-16 h-16 flex items-center justify-center">
          <img src={userPhoto} alt="Uploaded user" className="h-full w-full rounded-full" />
        </div>
        <HeadingLumina tag="h1" title={`${userData.firstName} ${userData.lastName}`} />
        <p className="w-10 h-0.5 rounded" style={{ backgroundColor: "var(--primary-shade)" }}></p>
        <p className="uppercase text-sm">{userData.jobPosition}</p>
      </div>
    )
  );
};
