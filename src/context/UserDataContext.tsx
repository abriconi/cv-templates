import { ReactNode, createContext, useContext, useState } from "react";
import { CvType } from "../helpers/types";

type UserContextType = {
  userData: CvType | undefined;
  setUserData: (data: CvType) => void;
  userPhoto: string | undefined;
  setUserPhoto: (photo: string) => void;
};

const UserDataContext = createContext<UserContextType | undefined>(undefined);

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserDataContext must be used within a userDataProvider");
  }
  return context;
};

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState<string | undefined>(undefined);

  const value: UserContextType = {
    userData,
    setUserData,
    userPhoto,
    setUserPhoto
  };

  return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
