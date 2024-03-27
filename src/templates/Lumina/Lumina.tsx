import { useEffect, useState } from "react";
import { TEMPLATES, LUMINA } from "../../helpers/constants";
import { CvType } from "../../helpers/types";
import { DetailsLumina } from "./components/DetailsLumina";
import { EducationLumina } from "./components/EducationLumina";
import { ExperienceLumina } from "./components/ExperienceLimina";
import { HeaderLumina } from "./components/HeaderLumina";
import { LanguageLumina } from "./components/LanguagesLumina";
import { SkillsLumina } from "./components/SkillsLumina";
import { SocialLumina } from "./components/SocialLumina";
import { ProfileLumina } from "./components/ProfileLumina";

export const Lumina = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const root = document.documentElement;
  const template = TEMPLATES.find((template) => template.name === LUMINA);

  if (template && template.colors.length > 0) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].secondary);
  }

  useEffect(() => {
    const handleResize = () => {
      const zoomValue = (window.innerWidth / (document.getElementById("lumina-template")?.offsetWidth as number)).toFixed(4);
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
    <div id="lumina-template" style={{ width: "210mm" }}>
      {userData && (
        <div className="flex flex-row">
          <div className="text-white p-8 flex flex-col gap-10 w-1/3 rounded-l" style={{ backgroundColor: "var(--primary-color)" }}>
            <HeaderLumina img={userPhoto} userData={userData} />
            <DetailsLumina city={userData.city} country={userData.country} phoneNumber={userData.phone} email={userData.email} />
            <SocialLumina socialLinks={userData.social} />
            <SkillsLumina skills={userData.skills} />
            <LanguageLumina languages={userData.languages} />
          </div>
          <div className="flex flex-col gap-10 w-2/3 rounded-r bg-white p-8">
            <ProfileLumina profile={userData.summary} />
            <ExperienceLumina experience={userData.experience} />
            <EducationLumina education={userData.education} />
          </div>
        </div>
      )}
    </div>
  );
};
