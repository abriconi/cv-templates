import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingLumina } from "./HeadingLumina";
import { LanguageItemLumina } from "./LanguageItemLumina";

export const LanguageLumina = () => {
  const { userData } = useUserDataContext();

  if (!userData?.languages?.length) return null;

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingLumina tag="h2" title="languages" uppercase={true} />
      <div className="flex flex-col gap-2 w-full">
        {userData.languages.map((lang, index) => (
          <LanguageItemLumina language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
