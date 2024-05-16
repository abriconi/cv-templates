import { useUserDataContext } from "../../../context/UserDataContext";

export const UserPhotoEcho = () => {
  const { userPhoto } = useUserDataContext();

  if (!UserPhotoEcho) return null;

  return <img src={userPhoto} alt="Uploaded user" className="object-cover aspect-square rounded-md" />;
};
