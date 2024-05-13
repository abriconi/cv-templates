import { useEffect } from "react";
import { EducationVertex } from "./components/EducationVertex";
import { ExperienceVertex } from "./components/ExperienceVertex";
import { DetailsVertex } from "./components/DetailsVertex";
import { HeaderVertex } from "./components/HeaderVertex";
import { ProfileVertex } from "./components/ProfileVertex";
import { SocialVertex } from "./components/SocialVertex";
import { LanguagesVertex } from "./components/LanguagesVertex";
import { SkillsVertex } from "./components/SkillsVertex";
import { TEMPLATES, VERTEX } from "../../helpers/constants";
import { useUserDataContext } from "../../context/UserDataContext";
import { addResizeListener, sendColorsToParent, receiveDataFromParent, notifyParentTemplateUploaded } from "../../helpers";

export const Vertex = () => {
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === VERTEX);

  useEffect(() => receiveDataFromParent(setUserData, setUserPhoto), []);
  useEffect(() => notifyParentTemplateUploaded(), []);
  useEffect(() => addResizeListener(VERTEX), []);
  useEffect(() => sendColorsToParent(template), []);

  return (
    <div id={VERTEX} style={{ width: "210mm" }}>
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
