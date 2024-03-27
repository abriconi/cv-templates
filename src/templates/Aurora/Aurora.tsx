import { useState, useEffect } from "react";
import { TEMPLATES, AURORA } from "../../helpers/constants";
import { CvType } from "../../helpers/types";
import { EducationAurora } from "./components/EducationAurora";
import { ExperienceAurora } from "./components/ExperienceAurora";
import { HeaderAurora } from "./components/HeaderAurora";
import { LanguagesAurora } from "./components/LanguagesAurora";
import { SkillsAurora } from "./components/SkillsAurora";
import { SocialAurora } from "./components/SocialAurora";
import { ProfileAurora } from "./components/ProfileAurora";


export const Aurora = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const root = document.documentElement;
  const template = TEMPLATES.find((template) => template.name === AURORA);

  if (template && template.colors.length > 0) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].secondary);
  }

  useEffect(() => {
    const handleResize = () => {
      const zoomValue = (window.innerWidth / (document.getElementById("aurora-template")?.offsetWidth as number)).toFixed(4);
      // @ts-ignore
      document.body.style.zoom = zoomValue;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.top && template) {
      // @ts-ignore
      window.top.postMessage({
        type: "colors-to-parent",
        colors: template.colors,
        templateName: template.name,
      }, "*");
    }
  }, []);

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:3000") return;

      const receivedData = event.data;

      if (receivedData.type === "custom-message-type") {
        setUserData(receivedData.data);
        setUserPhoto(receivedData.photo);
      }
      if (receivedData.type === "colors-to-iframe") {
        root.style.setProperty("--primary-color", receivedData.color.primary);
        root.style.setProperty("--primary-shade", receivedData.color.secondary);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <div id="aurora-template" className="flex flex-col gap-5" style={{ width: "210mm" }}>
        {userData && (
            <div className="flex flex-col gap-10 bg-white p-10">
                <HeaderAurora img={userPhoto} userData={userData} />
                <div className="flex flex-row gap-5 w-full">
                <div className="flex flex-col gap-10 w-1/3">
                    <SocialAurora socialLinks={userData.social} />
                    <SkillsAurora skills={userData.skills} />
                    <LanguagesAurora languages={userData.languages} />
                </div>
                <div className="w-2/3 gap-5 flex flex-col">
                    <ProfileAurora summary={userData.summary} />
                    <ExperienceAurora experience={userData.experience} />
                    <EducationAurora education={userData.education} />
                </div>
                </div>
            </div>
        )}
    </div>
  );
};
