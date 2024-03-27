import { useEffect } from "react";
import { TEMPLATES, AURORA } from "../../helpers/constants";
import { EducationAurora } from "./components/EducationAurora";
import { ExperienceAurora } from "./components/ExperienceAurora";
import { HeaderAurora } from "./components/HeaderAurora";
import { LanguagesAurora } from "./components/LanguagesAurora";
import { SkillsAurora } from "./components/SkillsAurora";
import { SocialAurora } from "./components/SocialAurora";
import { ProfileAurora } from "./components/ProfileAurora";
import { useUserDataContext } from "../../context/UserDataContext";
import { addResizeListener, receiveDataFromParent, sendColorsToParent, setTemplateColors } from "../../helpers";

export const Aurora = () => {
  const root = document.documentElement;
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === AURORA);

  setTemplateColors(template, root);

  useEffect(() => {
    addResizeListener(AURORA);
  }, []);
  
  useEffect(() => {
    sendColorsToParent(template);
  }, [template]);

  useEffect(() => {
    const cleanup = receiveDataFromParent(root, setUserData, setUserPhoto);
    return cleanup;
  }, [root, setUserData, setUserPhoto]);

  return (
    <div id={AURORA} className="flex flex-col gap-5" style={{ width: "210mm" }}>
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
