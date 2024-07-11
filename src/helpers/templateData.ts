import { Routes } from "./routes";
import { TemplateType } from "./types";

export enum TemplateName {
  VERTEX = "vertex",
  LUMINA = "lumina",
  AURORA = "aurora",
  ECHO = "echo",
  ZENITH = "zenith",
}

export const TEMPLATES: TemplateType[] = [
  {
    name: TemplateName.VERTEX,
    route: Routes.Vertex,
    screenshot: "/img/vertex-screenshot.jpeg",
    colors: [
      {
        primary: "#0000FF",
        secondary: "#9999ff",
      },
      {
        primary: "#004000",
        secondary: "#99b299",
      },
      {
        primary: "#ff3232",
        secondary: "#ffb2b2",
      },
    ],
  },
  {
    name: TemplateName.LUMINA,
    route: Routes.Lumina,
    screenshot: "/img/lumina-screenshot.jpeg",
    colors: [
      { primary: "#133337", secondary: "#a0adaf" },
      {
        primary: "#222F5B",
        secondary: "#bcc0cd",
      },
      { primary: "#743818", secondary: "#d5c3b9" },
      { primary: "#2F2F2F", secondary: "#c0c0c0" },
    ],
  },
  {
    name: TemplateName.AURORA,
    route: Routes.Aurora,
    screenshot: "/img/aurora-screenshot.jpeg",
    colors: [
      { primary: "#81D2C7", secondary: "#d9f1ee" },
      {
        primary: "#b5bad0",
        secondary: "#e8eaf0",
      },
      { primary: "#a0b3c3", secondary: "#e2e8ed" },
    ],
  },
  {
    name: TemplateName.ECHO,
    route: Routes.Echo,
    screenshot: "/img/echo-screenshot.jpeg",
    colors: [
      {
        primary: "#011f4b",
        secondary: "#b2bbc9",
      },
      {
        primary: "#35485e",
        secondary: "#c2c8ce",
      },
      {
        primary: "#12587b",
        secondary: "#b7ccd7",
      },
    ],
  },
  {
    name: TemplateName.ZENITH,
    route: Routes.Zenith,
    screenshot: "/img/zenith-screenshot.jpeg",
    colors: [
      {
        primary: "#42496A",
        secondary: "#ececf0",
      },
      {
        primary: "#5B4965",
        secondary: "#eeecef",
      },
      {
        primary: "#2E293A",
        secondary: "#eae9eb",
      },
    ],
  },
];
