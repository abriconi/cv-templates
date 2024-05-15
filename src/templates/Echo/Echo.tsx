import { useEffect } from "react";
import { TEMPLATES, ECHO } from "../../helpers/enums";
import { DetailsEcho } from "./components/DetailsEcho";
import { EducationEcho } from "./components/EducationEcho";
import { ExperienceEcho } from "./components/ExperienceEcho";
import { HeaderEcho } from "./components/HeaderEcho";
import { LanguagesEcho } from "./components/LanguagesEcho";
import { ProfileEcho } from "./components/ProfileEcho";
import { SkillsEcho } from "./components/SkillsEcho";
import { SocialEcho } from "./components/SocialEcho";
import { useUserDataContext } from "../../context/UserDataContext";
import { setTemplateColors, addResizeListener, sendColorsToParent, receiveDataFromParent } from "../../helpers";

export const Echo = () => {
  const root = document.documentElement;
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === ECHO);

  setTemplateColors(template, root);

  useEffect(() => {
    addResizeListener(ECHO);
  }, []);

  useEffect(() => {
    sendColorsToParent(template);
  }, [template]);

  // useEffect(() => {
  //   const cleanup = receiveDataFromParent(root, setUserData, setUserPhoto);
  //   return cleanup;
  // }, [root, setUserData, setUserPhoto]);

  return (
    <div id={ECHO} className="flex flex-col gap-5" style={{ width: "210mm" }}>
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
