import { LanguagesType } from "../../../helpers/types";
import { HeadingAurora } from "../../../shared-components/Heading";
import { LanguageItem } from "../../../shared-components/LanguageItem";


interface Props {
  languages: LanguagesType[];
}
export const LanguagesAurora: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingAurora title="Languages" tag="h2" />
      <div className="flex flex-col gap-2 w-full">
        {languages.map((lang, index) => (
          <LanguageItem language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
