import { useUserDataContext } from "../../../context/UserDataContext";
import { LanguageItem } from "../../../shared-components/LanguageItem";
import { HeadingVertex } from "./HeadingVertex";

export const LanguagesVertex = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.languages || userData.languages.length === 0) return null;

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingVertex tag="h2" title="Languages" />

      <div className="flex flex-col gap-1 w-full">
        {userData.languages.map((lang, index) => (
          <LanguageItem language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
