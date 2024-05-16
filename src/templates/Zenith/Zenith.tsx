import { EducationZenith } from "./components/EducationZenith";
import { ExperienceZenith } from "./components/ExperienceZenith";
import { HeaderZenith } from "./components/HeaderZenith";
import { LanguagesZenith } from "./components/LanguageZenith";
import { SkillsZenith } from "./components/SkillsZenith";
import { SocialZenith } from "./components/SocialZenith";
import { TemplateName } from "../../helpers/templateData";
import { useTemplateEffects } from "../../helpers/hooks/useTemplateEffect";

export const Zenith = () => {
  useTemplateEffects(TemplateName.ZENITH);

  return (
    <div id={TemplateName.ZENITH} style={{ width: "210mm" }}>
      <div className="flex flex-col p-8 bg-white gap-10" style={{ color: "var(--primary-color)" }}>
        <HeaderZenith />
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-3/5">
            <ExperienceZenith />
            <EducationZenith />
          </div>
          <div className="flex flex-col w-2/5 gap-10">
            <SocialZenith />
            <LanguagesZenith />
            <SkillsZenith />
          </div>
        </div>
      </div>
    </div>
  );
};
