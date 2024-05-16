import { useUserDataContext } from "../../../context/UserDataContext";
import { LanguageItem } from "../../../shared-components/LanguageItem";
import { SectionHeader } from "../../../shared-components/SectionHeader/SectionHeader";

export const LanguagesEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.languages || userData.languages.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <SectionHeader header="Languages" />
      <div className="w-full">
        {userData.languages.map((language, index) => (
          <LanguageItem language={language} key={index} aligning="self-center" />
        ))}
      </div>
    </div>
  );
};
