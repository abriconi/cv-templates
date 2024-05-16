import { HeadingVertex } from "./HeadingVertex";
import { useUserDataContext } from "../../../context/UserDataContext";

export const HeaderVertex = () => {
  const { userData, userPhoto } = useUserDataContext();

  if (!userData) return null;

  return (
    <div className="flex flex-row gap-5">
      <div className="rounded-md border bg-gray-50 shadow-md border-gray-300 w-16 h-16 flex items-center justify-center">
        <img src={userPhoto} alt="Uploaded user" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2">
        {userData && <HeadingVertex tag="h1" title={`${userData.firstName} ${userData?.lastName}`} />}
        {userData && <HeadingVertex tag="h2" title={userData.jobPosition} />}
      </div>
    </div>
  );
};
