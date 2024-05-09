import { useEffect } from "react";
import { TEMPLATES, LUMINA } from "../../helpers/constants";
import { DetailsLumina } from "./components/DetailsLumina";
import { EducationLumina } from "./components/EducationLumina";
import { ExperienceLumina } from "./components/ExperienceLimina";
import { HeaderLumina } from "./components/HeaderLumina";
import { LanguageLumina } from "./components/LanguagesLumina";
import { SkillsLumina } from "./components/SkillsLumina";
import { SocialLumina } from "./components/SocialLumina";
import { ProfileLumina } from "./components/ProfileLumina";
import { useUserDataContext } from "../../context/UserDataContext";
import { setTemplateColors, addResizeListener, sendColorsToParent, receiveDataFromParent } from "../../helpers";

export const Lumina = () => {
  const root = document.documentElement;
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === LUMINA);

  setTemplateColors(template, root);

  useEffect(() => {
    addResizeListener(LUMINA);
  }, []);

  useEffect(() => {
    sendColorsToParent(template);
  }, [template]);

  useEffect(() => {
    const cleanup = receiveDataFromParent(root, setUserData, setUserPhoto);
    return cleanup;
  }, [root, setUserData, setUserPhoto]);

  return (
    <div id={LUMINA} style={{ width: "210mm" }}>
      <div className="flex flex-row">
        <div className="text-white p-8 flex flex-col gap-10 w-1/3 rounded-l" style={{ backgroundColor: "var(--primary-color)" }}>
          <HeaderLumina />
          <DetailsLumina />
          <SocialLumina />
          <SkillsLumina />
          <LanguageLumina />
        </div>
        <div className="flex flex-col gap-10 w-2/3 rounded-r bg-white p-8">
          <ProfileLumina />
          <ExperienceLumina />
          <EducationLumina />
        </div>
      </div>
    </div>
  );
};
