import { EducationAurora } from "./components/EducationAurora";
import { ExperienceAurora } from "./components/ExperienceAurora";
import { HeaderAurora } from "./components/HeaderAurora";
import { LanguagesAurora } from "./components/LanguagesAurora";
import { SkillsAurora } from "./components/SkillsAurora";
import { SocialAurora } from "./components/SocialAurora";
import { ProfileAurora } from "./components/ProfileAurora";

import { TemplateName } from "../../helpers/templateData";
import { useTemplateEffects } from "../../helpers/hooks/useTemplateEffect";

export const Aurora = () => {
  useTemplateEffects(TemplateName.AURORA);

  return (
    <div id={TemplateName.AURORA} style={{ width: "210mm" }}>
      <div className="flex flex-col gap-10 bg-white p-10">
        <HeaderAurora />
        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-col gap-10 w-1/3">
            <SocialAurora />
            <SkillsAurora />
            <LanguagesAurora />
          </div>
          <div className="w-2/3 gap-5 flex flex-col">
            <ProfileAurora />
            <ExperienceAurora />
            <EducationAurora />
          </div>
        </div>
      </div>
    </div>
  );
};
