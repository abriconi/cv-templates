import { MESSAGE_TYPE } from "./enums";
import { Routes } from "./routes";
import { CvType, TemplateType } from "./types";

const handleResize = (templateId: string) => {
  const zoomValue = (window.innerWidth / (document.getElementById(templateId)?.offsetWidth as number)).toFixed(4);
  // @ts-ignore
  document.body.style.zoom = zoomValue;
};

export const addResizeListener = (templateId: string) => {
  const resize = () => {
    handleResize(templateId);
  };

  window.addEventListener("resize", resize);

  resize();

  return () => {
    window.removeEventListener("resize", resize);
  };
};

export const sendColorsToParent = (template: TemplateType | undefined) => {
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

export const notifyParentTemplateUploaded = () => {
  if (window.top) {
    window.top.postMessage({ type: MESSAGE_TYPE.templateUploaded }, "*");
  }
};

export const receiveDataFromParent = (setUserData: (data: CvType) => void) => {
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

export const receiveUserPhotoFromParent = (setUserPhoto: (photo: string) => void) => {
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

export const receiveColorFromParent = () => {
  const receiveMessage = (event: MessageEvent) => {
    if (event.origin !== Routes.Parent) return;

    const receivedData = event.data;

    if (receivedData.type === MESSAGE_TYPE.chosenColorToIframe) {
      const root = document.documentElement;
      console.log(receivedData.color.primary);

      root.style.setProperty("--primary-color", receivedData.color.primary);
      root.style.setProperty("--primary-shade", receivedData.color.secondary);
    }
  };

  window.addEventListener("message", receiveMessage);

  return () => {
    window.removeEventListener("message", receiveMessage);
  };
};
