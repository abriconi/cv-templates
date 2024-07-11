import { SKILL_LEVELS } from "./enums";

const dateFormatter = (date: string | undefined): string => {
  if (date) {
    const parsedDate = new Date(`${date}-01`);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(parsedDate);
    return formattedDate;
  } else {
    return "";
  }
};


export const determineSkillLevel = (skillLevel: string) => {
  let result;

  switch(skillLevel){
    case SKILL_LEVELS.novice:
    result = "1/5";
    break;

    case SKILL_LEVELS.beginner:
    result = "2/5";
    break;

    case SKILL_LEVELS.skillful: 
    result = "3/5";
    break;

    case SKILL_LEVELS.experienced:
    result = "4/5";
    break;

    default:
    result = "5/5";

  }
  return result
}

export const constructDescription = (
  startDate: string,
  endDate: string,
  isCurrent: boolean,
  place: string,
  location: string,
  workTitle?: string,
) => {
  const startDateFormatted = dateFormatter(startDate);
  const endDateFormatted = isCurrent ? "current" : dateFormatter(endDate);
  const dates = `${startDateFormatted}  - ${endDateFormatted}`;

  let description = "";

  if(workTitle) {
    description = `${workTitle} at ${place}, ${location}`;
  } else {
    description = `${place}, ${location}`;
  }

  return {
    description,
    dates,
  }
}
