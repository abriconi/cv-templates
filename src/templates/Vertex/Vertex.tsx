import { EducationVertex } from "./components/EducationVertex";
import { ExperienceVertex } from "./components/ExperienceVertex";
import { DetailsVertex } from "./components/DetailsVertex";
import { HeaderVertex } from "./components/HeaderVertex";
import { ProfileVertex } from "./components/ProfileVertex";
import { SocialVertex } from "./components/SocialVertex";
import { LanguagesVertex } from "./components/LanguagesVertex";
import { SkillsVertex } from "./components/SkillsVertex";
import { TemplateName } from "../../helpers/templateData";
import { useTemplateEffects } from "../../helpers/hooks/useTemplateEffect";

export const Vertex = () => {
  useTemplateEffects(TemplateName.VERTEX);

  return (
    <div id={TemplateName.VERTEX} style={{ width: "210mm" }}>
      <div className="flex flex-row p-8 bg-white gap-10">
        <div className="flex flex-col gap-10 w-2/3">
          <HeaderVertex />
          <ProfileVertex />
          <ExperienceVertex />
          <EducationVertex />
        </div>
        <div className="w-1/3 gap-5 flex flex-col">
          <DetailsVertex />
          <SocialVertex />
          <SkillsVertex />
          <LanguagesVertex />
        </div>
      </div>
    </div>
  );
};
