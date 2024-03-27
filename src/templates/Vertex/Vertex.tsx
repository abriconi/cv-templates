import { useEffect, useState } from "react";
import { EducationVertex } from "./components/EducationVertex";
import { ExperienceVertex } from "./components/ExperienceVertex";
import { DetailsVertex } from "./components/DetailsVertex";
import { HeaderVertex } from "./components/HeaderVertex";
import { ProfileVertex } from "./components/ProfileVertex";
import { SocialVertex } from "./components/SocialVertex";
import { LanguagesVertex } from "./components/LanguagesVertex";
import { SkillsVertex } from "./components/SkillsVertex";
import { CvType } from "../../helpers/types";
import { TEMPLATES, VERTEX } from "../../helpers/constants";

export const Vertex = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const root = document.documentElement;
  const template = TEMPLATES.find((template) => template.name === VERTEX);

  if (template && template.colors.length > 0) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].secondary);
  }

  useEffect(() => {
    const handleResize = () => {
      const zoomValue = (window.innerWidth / (document.getElementById("vertex-template")?.offsetWidth as number)).toFixed(4);  
      // @ts-expect-error
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
    <div id="vertex-template" style={{ width: "210mm" }}>
        {userData && (
            <div className="flex flex-row p-8 bg-white gap-10">
                <div className="flex flex-col gap-10 w-2/3">
                    <HeaderVertex img={userPhoto} userData={userData} />
                    <ProfileVertex profile={userData.summary} />
                    <ExperienceVertex experience={userData.experience} />
                    <EducationVertex education={userData.education} />
                </div>
                <div className="w-1/3 gap-5 flex flex-col">
                    <DetailsVertex country={userData.country} city={userData.city} phoneNumber={userData.phone} email={userData.email} />
                    <SocialVertex socialLinks={userData.social} />
                    <SkillsVertex skills={userData.skills} />
                    <LanguagesVertex languages={userData.languages} />
                </div>
            </div>
        )}
    </div>
  );
};
