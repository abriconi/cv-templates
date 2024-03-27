import { useEffect } from "react";
import { TEMPLATES, ZENITH } from "../../helpers/constants";
import { EducationZenith } from "./components/EducationZenith";
import { ExperienceZenith } from "./components/ExperienceZenith";
import { HeaderZenith } from "./components/HeaderZenith";
import { LanguagesZenith } from "./components/LanguageZenith";
import { SkillsZenith } from "./components/SkillsZenith";
import { SocialZenith } from "./components/SocialZenith";
import { addResizeListener, sendColorsToParent, setTemplateColors, receiveDataFromParent } from "../../helpers";
import { useUserDataContext } from "../../context/UserDataContext";

export const Zenith = () => {
  const root = document.documentElement;
  const { setUserData, setUserPhoto } = useUserDataContext()
  const template = TEMPLATES.find((template) => template.name === ZENITH);

  setTemplateColors(template, root);

  useEffect(() => {
    addResizeListener(ZENITH);
  }, []);
  
  useEffect(() => {
    sendColorsToParent(template);
  }, [template]);

  useEffect(() => {
    const cleanup = receiveDataFromParent(root, setUserData, setUserPhoto);
    return cleanup;
  }, [root, setUserData, setUserPhoto]);

  return (
    <div id={ZENITH} className="flex flex-col gap-5" style={{ width: "210mm" }}>
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
