import { useEffect } from "react";
import { useUserDataContext } from "../../context/UserDataContext";
import { TEMPLATES } from "../templateData";
import { MESSAGE_TYPE } from "../enums";
import { TemplateType } from "../types";
import { Routes } from "../routes";

export const useTemplateEffects = (templateName: string) => {
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === templateName);

  useEffect(() => receiveDataFromParent(), []);
  useEffect(() => notifyParentTemplateUploaded(), []);
  useEffect(() => addResizeListener(template?.name), [template]);
  useEffect(() => sendColorsToParent(template), [template]);

  const handleResize = (templateId: string) => {
    const zoomValue = (window.innerWidth / (document.getElementById(templateId)?.offsetWidth as number)).toFixed(4);
    // @ts-ignore
    document.body.style.zoom = zoomValue;
  };

  const addResizeListener = (templateId: string | undefined) => {
    if (!templateId) return;

    const resize = () => {
      handleResize(templateId);
    };

    window.addEventListener("resize", resize);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  };

  const sendColorsToParent = (template: TemplateType | undefined) => {
    if (window.top && template) {
      window.top.postMessage(
        {
          type: MESSAGE_TYPE.colorsToParent,
          colors: template.colors,
          templateName: template.name,
        },
        "*",
      );
    }
  };

  const notifyParentTemplateUploaded = () => {
    if (window.top) {
      window.top.postMessage({ type: MESSAGE_TYPE.templateUploaded }, "*");
    }
  };

  const receiveDataFromParent = () => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== Routes.Parent) return;

      const receivedData = event.data;

      switch (receivedData.type) {
      case MESSAGE_TYPE.userDataFromParentToIframe:
        setUserData(receivedData.data);
        break;

      case MESSAGE_TYPE.userPhotoToIframe:
        setUserPhoto(receivedData.photo);
        break;

      case MESSAGE_TYPE.print:
        window.print();
        break;

      case MESSAGE_TYPE.chosenColorToIframe: {
        const root = document.documentElement;
        root.style.setProperty("--primary-color", receivedData.color.primary);
        root.style.setProperty("--primary-shade", receivedData.color.secondary);
        break;
      }

      default:
        break;
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };
};
