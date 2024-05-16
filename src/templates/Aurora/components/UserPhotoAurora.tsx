import { useUserDataContext } from "../../../context/UserDataContext";

export const UserPhotoAurora = () => {
  const { userPhoto } = useUserDataContext();

  if (!userPhoto) return null;

  return <img src={userPhoto} alt="Uploaded user" className="object-cover aspect-square" />;
};
