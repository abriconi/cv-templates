import clsx from "clsx";
import { SKILL_LEVELS } from "../../../helpers/enums";
import { SkillType } from "../../../helpers/types";
import { RangeLumina } from "./RangeLumina";

interface Props {
  skill: SkillType;
}
export const SkillItemLumina: React.FC<Props> = ({ skill }) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{skill.skill}</p>
      <RangeLumina>
        <span
          style={{ boxShadow: "inset 0 0 10px white" }}
          className={clsx("absolute h-1 rounded bg-white", {
            "w-1/6": skill.level === SKILL_LEVELS.novice,
            "w-2/6": skill.level === SKILL_LEVELS.beginner,
            "w-1/2": skill.level === SKILL_LEVELS.skillful,
            "w-4/5": skill.level === SKILL_LEVELS.experienced,
            "w-full": skill.level === SKILL_LEVELS.expert,
          })}></span>
      </RangeLumina>
    </div>
  );
};
