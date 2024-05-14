export interface ExperienceType {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface EducationType {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface SkillType {
  skill: string;
  level: string;
}

export interface LanguagesType {
  language: string;
  level: string;
}

export interface SocialType {
  label: string;
  link: string;
}
export interface CvType {
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  city?: string;
  country?: string;
  education: EducationType[] | [];
  experience: ExperienceType[] | [];
  languages: LanguagesType[] | [];
  skills: SkillType[] | [];
  social: SocialType[] | [];
  summary?: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface TemplateType {
  name: string;
  route: string;
  colors: ColorPalette[];
}
