import { LanguagesType } from "../../../helpers/types";
import { HeadingLumina } from "./HeadingLumina";
import { LanguageItemLumina } from "./LanguageItemLumina";

interface Props {
  languages: LanguagesType[];
}
export const LanguageLumina: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingLumina tag="h2" title="languages" uppercase={true} />
      <div className="flex flex-col gap-2 w-full">
        {languages.map((lang, index) => (
          <LanguageItemLumina language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
