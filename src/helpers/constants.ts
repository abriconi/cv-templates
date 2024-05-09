import { Routes } from "./routes";
import { LanguageLevels, SkillLevels, TemplateType } from "./types";

export const LANGUAGE_LEVELS: LanguageLevels = {
  nativeSpeaker: "Native speaker",
  beginner: "A1 - Beginner",
  elementary: "A2 - Elementary",
  intermediate: "B1 - Intermediate",
  upperIntermediate: "B2 - Upper-Intermediate",
  advanced: "C1 - Advanced",
  proficiency: "C2 - Proficiency",
};

export const SKILL_LEVELS: SkillLevels = {
  novice: "novice",
  beginner: "beginner",
  skillful: "skillful",
  experienced: "experienced",
  expert: "expert"
};

export enum MESSAGE_TYPE {
  userDataFromParentToIframe = "user-data-to-iframe",
  templateUploaded = "template-uploaded",
}

export const [VERTEX, LUMINA, AURORA, ECHO, ZENITH] = ["vertex", "lumina", "aurora", "echo", "zenith"];
export const TEMPLATES: TemplateType[] = [
  {
    name: VERTEX,
    route: Routes.Vertex,
    colors: [
      {
        primary: "#0000FF",
        secondary: "#9999ff"
      },
      {
        primary: "#004000",
        secondary: "#99b299"
      },
      {
        primary: "#ff3232",
        secondary: "#ffb2b2"
      },
    ]
  },
  {
    name: LUMINA,
    route: Routes.Lumina,
    colors: [
      { primary: "#133337", secondary: "#a0adaf" },
      {
        primary: "#222F5B",
        secondary: "#bcc0cd"
      },
      { primary: "#743818", secondary: "#d5c3b9" },
      { primary: "#2F2F2F", secondary: "#c0c0c0" }
    ],
  },
  {
    name: AURORA,
    route: Routes.Aurora,
    colors: [
      { primary: "#81D2C7", secondary: "#d9f1ee" },
      {
        primary: "#b5bad0",
        secondary: "#e8eaf0"
      },
      { primary: "#a0b3c3", secondary: "#e2e8ed" }
    ],
  },
  {
    name: ECHO,
    route: Routes.Echo,
    colors: [
      {
        primary: "#011f4b",
        secondary: "#b2bbc9"
      },
      {
        primary: "#35485e",
        secondary: "#c2c8ce"
      },
      {
        primary: "#12587b",
        secondary: "#b7ccd7"
      },
    ]
  },
  {
    name: ZENITH,
    route: Routes.Zenith,
    colors: [
      {
        primary: "#42496A",
        secondary: "#ececf0"
      },
      {
        primary: "#5B4965",
        secondary: "#eeecef"
      },
      {
        primary: "#2E293A",
        secondary: "#eae9eb"
      },
    ]
  },
];
