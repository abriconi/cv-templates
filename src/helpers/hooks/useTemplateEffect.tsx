import { useEffect } from "react";
import { useUserDataContext } from "../../context/UserDataContext";
import { TEMPLATES } from "../templateData";
import { MESSAGE_TYPE } from "../enums";
import { TemplateType, CvType } from "../types";
import { Routes } from "../routes";

export const useTemplateEffects = (templateName: string) => {
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === templateName);

  useEffect(() => receiveDataFromParent(setUserData), []);
  useEffect(() => receiveUserPhotoFromParent(setUserPhoto), []);
  useEffect(() => notifyParentTemplateUploaded(), []);
  useEffect(() => addResizeListener(template?.name), []);
  useEffect(() => sendColorsToParent(template), []);
  useEffect(() => receiveColorFromParent());
  useEffect(() => receivePrintFromParent());

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

  const receiveDataFromParent = (setUserData: (data: CvType) => void) => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== Routes.Parent) return;

      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.userDataFromParentToIframe) {
        setUserData(receivedData.data);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };

  const receiveUserPhotoFromParent = (setUserPhoto: (photo: string) => void) => {
    const receiveMessagePhoto = (event: MessageEvent) => {
      if (event.origin !== Routes.Parent) return;

      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.userPhotoToIframe) {
        setUserPhoto(receivedData.photo);
      }
    };

    window.addEventListener("message", receiveMessagePhoto);

    return () => {
      window.removeEventListener("message", receiveMessagePhoto);
    };
  };

  const receivePrintFromParent = () => {
    const receiveMessagePrint = (event: MessageEvent) => {
      if (event.origin !== Routes.Parent) return;

      const receivedData = event.data;

      if (receivedData.type === "print") {
        window.print();
      }
    };

    window.addEventListener("message", receiveMessagePrint);

    return () => {
      window.removeEventListener("message", receiveMessagePrint);
    };
  };

  const receiveColorFromParent = () => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== Routes.Parent) return;

      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.chosenColorToIframe) {
        const root = document.documentElement;
        root.style.setProperty("--primary-color", receivedData.color.primary);
        root.style.setProperty("--primary-shade", receivedData.color.secondary);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };
};
