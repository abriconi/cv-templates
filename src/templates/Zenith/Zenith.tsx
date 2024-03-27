import { useEffect } from "react";
import { TEMPLATES, ZENITH } from "../../helpers/constants";
import { EducationZenith } from "./components/EducationZenith";
import { ExperienceZenith } from "./components/ExperienceZenith";
import { HeaderZenith } from "./components/HeaderZenith";
import { LanguagesZenith } from "./components/LanguageZenith";
import { SkillsZenith } from "./components/SkillsZenith";
import { SocialZenith } from "./components/SocialZenith";
import { useUserDataContext } from "../../context/UserDataContext";


export const Zenith = () => {
  const { setUserData, setUserPhoto } = useUserDataContext();
  const root = document.documentElement;
  const template = TEMPLATES.find((template) => template.name === ZENITH);

  if (template && template.colors.length > 0) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].secondary);
  }

  useEffect(() => {
    const handleResize = () => {
      const zoomValue = (window.innerWidth / (document.getElementById("zenith-template")?.offsetWidth as number)).toFixed(4);
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
        console.log("works");

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
    <div id="zenith-template" className="flex flex-col gap-5" style={{ width: "210mm" }}>
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
