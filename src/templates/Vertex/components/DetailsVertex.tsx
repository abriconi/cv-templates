import { HeadingVertex } from "./HeadingVertex";
import { useUserDataContext } from "../../../context/UserDataContext";

export const DetailsVertex = () => {
  const { userData } = useUserDataContext();

  return (
    userData && (
      <div className="flex flex-col items-start">
        <HeadingVertex tag="h2" title="Details" />
        <p className="text-sm">{userData.city}</p>
        <p className="text-sm">{userData.country}</p>
        <p className="text-sm">{userData.phone}</p>
        <p className="text-sm" style={{ color: "var(--primary-color)" }}>
          {userData.email}
        </p>
      </div>
    )
  );
};
