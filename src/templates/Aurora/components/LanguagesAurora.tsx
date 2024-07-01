import { useUserDataContext } from "../../../context/UserDataContext";
import { HeadingAurora } from "../../../shared-components/Heading";
import { LanguageItem } from "../../../shared-components/LanguageItem";

export const LanguagesAurora = () => {
  const { userData } = useUserDataContext();

  if (!userData?.languages?.length) return null;

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingAurora title="Languages" tag="h2" />
      <div className="flex flex-col gap-2 w-full">
        {userData.languages.map((lang, index) => (
          <LanguageItem language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
