import clsx from "clsx";
import { LanguagesType } from "../helpers/types";
import { LANGUAGE_LEVELS } from "../helpers/enums";

interface Props {
  language: LanguagesType;
  aligning?: "self-center" | "self-auto";
}

export const LanguageItem: React.FC<Props> = ({ language, aligning = "self-auto" }) => {
  return (
    <div className="flex flex-col">
      <p className={clsx(aligning, "text-sm")}>{language.language}</p>
      <div className="w-full h-1 relative rounded" style={{ boxShadow: "inset 0.25rem 0.25rem var(--primary-shade)" }}>
        <span
          style={{ boxShadow: "inset 0.25rem 0.25rem var(--primary-color)" }}
          className={clsx("absolute h-1 rounded", {
            "w-1/6": language.level === LANGUAGE_LEVELS.beginner,
            "w-1/3": language.level === LANGUAGE_LEVELS.elementary,
            "w-1/2": language.level === LANGUAGE_LEVELS.intermediate,
            "w-2/3": language.level === LANGUAGE_LEVELS.upperIntermediate,
            "w-5/6": language.level === LANGUAGE_LEVELS.advanced,
            "w-full": language.level === LANGUAGE_LEVELS.nativeSpeaker || language.level === LANGUAGE_LEVELS.proficiency,
          })}></span>
      </div>
    </div>
  );
};
