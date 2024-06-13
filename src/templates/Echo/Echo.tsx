import { DetailsEcho } from "./components/DetailsEcho";
import { EducationEcho } from "./components/EducationEcho";
import { ExperienceEcho } from "./components/ExperienceEcho";
import { HeaderEcho } from "./components/HeaderEcho";
import { LanguagesEcho } from "./components/LanguagesEcho";
import { ProfileEcho } from "./components/ProfileEcho";
import { SkillsEcho } from "./components/SkillsEcho";
import { SocialEcho } from "./components/SocialEcho";
import { TemplateName } from "../../helpers/templateData";
import { useTemplateEffects } from "../../helpers/hooks/useTemplateEffect";
import styles from "../../main-styles.module.css";
import clsx from "clsx";

export const Echo = () => {
  useTemplateEffects(TemplateName.ECHO);

  return (
    <div id={TemplateName.ECHO} className={clsx(styles.windowWidth, "flex flex-col gap-5")}>
      <div className="flex flex-col p-8 bg-white gap-10">
        <HeaderEcho />
        <div className="flex flex-row gap-5 w-full">
          <div className="w-1/3 gap-5 flex flex-col items-center pr-10 pl-10">
            <DetailsEcho />
            <SocialEcho />
            <SkillsEcho />
            <LanguagesEcho />
          </div>
          <div className="flex flex-col gap-10 w-2/3">
            <ProfileEcho />
            <ExperienceEcho />
            <EducationEcho />
          </div>
        </div>
      </div>
    </div>
  );
};
