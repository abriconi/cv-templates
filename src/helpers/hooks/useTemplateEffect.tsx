import { useEffect } from "react";
import {
  receiveDataFromParent,
  receiveUserPhotoFromParent,
  notifyParentTemplateUploaded,
  addResizeListener,
  sendColorsToParent,
  receiveColorFromParent,
} from "..";
import { useUserDataContext } from "../../context/UserDataContext";
import { TEMPLATES, LUMINA } from "../templateData";

export const useTemplateEffects = (templateName: string) => {
  const { setUserData, setUserPhoto } = useUserDataContext();
  const template = TEMPLATES.find((template) => template.name === templateName);

  useEffect(() => receiveDataFromParent(setUserData), []);
  useEffect(() => receiveUserPhotoFromParent(setUserPhoto), []);
  useEffect(() => notifyParentTemplateUploaded(), []);
  useEffect(() => addResizeListener(LUMINA), []);
  useEffect(() => sendColorsToParent(template), []);
  useEffect(() => receiveColorFromParent());
};
