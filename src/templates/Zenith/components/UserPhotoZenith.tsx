import { useUserDataContext } from "../../../context/UserDataContext";

export const UserPhotoZenith = () => {
  const { userPhoto } = useUserDataContext();

  if (!userPhoto) return null;

  return <img src={userPhoto} alt="Uploaded user" className="w-[150px] object-cover aspect-square rounded-md" />;
};
