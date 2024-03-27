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

export const setTemplateColors = (template: TemplateType | undefined, root: HTMLElement) => {
    if (template && template.colors.length > 0) {
        root.style.setProperty("--primary-color", template.colors[0].primary);
        root.style.setProperty("--primary-shade", template.colors[0].secondary);
    } else {
        return;
    }
}

export const sendColorsToParent = (template: TemplateType | undefined) => {
    if (window.top && template) {
      // @ts-ignore
      window.top.postMessage({
        type: "colors-to-parent",
        colors: template.colors,
        templateName: template.name,
      }, "*");
    }
}

export const receiveDataFromParent = (
    root: HTMLElement, 
    setUserData: (data: CvType) => void, 
    setUserPhoto: (photo: string) => void
) => {
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
      window.removeEventListener("message", receiveMessage);
    };
};
  


