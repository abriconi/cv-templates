import { DetailsLumina } from "./components/DetailsLumina";
import { EducationLumina } from "./components/EducationLumina";
import { ExperienceLumina } from "./components/ExperienceLumina";
import { HeaderLumina } from "./components/HeaderLumina";
import { LanguageLumina } from "./components/LanguagesLumina";
import { SkillsLumina } from "./components/SkillsLumina";
import { SocialLumina } from "./components/SocialLumina";
import { ProfileLumina } from "./components/ProfileLumina";
import { TemplateName } from "../../helpers/templateData";
import { useTemplateEffects } from "../../helpers/hooks/useTemplateEffect";

export const Lumina = () => {
  useTemplateEffects(TemplateName.LUMINA);

  return (
    <div id={TemplateName.LUMINA} style={{ width: "210mm" }}>
      <div className="flex flex-row">
        <div className="flex flex-col gap-10 w-1/3 text-white p-8" style={{ backgroundColor: "var(--primary-color)" }}>
          <HeaderLumina />
          <DetailsLumina />
          <SocialLumina />
          <SkillsLumina />
          <LanguageLumina />
        </div>
        <div className="flex flex-col gap-10 w-2/3 bg-white p-8">
          <ProfileLumina />
          <ExperienceLumina />
          <EducationLumina />
        </div>
      </div>
    </div>
  );
};
