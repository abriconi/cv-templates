import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";
import clsx from "clsx";
import styles from "../zenith.module.css";
import { useUserDataContext } from "../../../context/UserDataContext";

export const LanguagesZenith = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.languages || userData.languages.length === 0) return null;

  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Languages" />
      {userData.languages.map((item, index) => (
        <div key={index} className="flex flex-row">
          <p className={clsx(styles.dotBorder, "text-sm")}>{item.language}</p>
          <p className="text-sm text-nowrap">{item.level}</p>
        </div>
      ))}
    </WrapperShade>
  );
};
