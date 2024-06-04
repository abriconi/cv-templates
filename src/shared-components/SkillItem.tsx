import clsx from "clsx";
import { SKILL_LEVELS } from "../helpers/enums";
import { SkillType } from "../helpers/types";

interface Props {
  skill: SkillType;
  aligning?: "self-center" | "self-auto";
}
export const SkillItem: React.FC<Props> = ({ skill, aligning = "self-auto" }: Props) => {
  return (
    <div className="flex flex-col">
      <p className={clsx(aligning, "text-sm")}>{skill.skill}</p>
      <div className="w-full h-1 relative rounded" style={{ boxShadow: "inset 0.25rem 0.25rem var(--primary-shade)" }}>
        <span
          style={{ boxShadow: "inset 0.25rem 0.25rem var(--primary-color)" }}
          className={clsx("absolute h-1 rounded", {
            "w-1/6": skill.level === SKILL_LEVELS.novice,
            "w-2/6": skill.level === SKILL_LEVELS.beginner,
            "w-1/2": skill.level === SKILL_LEVELS.skillful,
            "w-4/5": skill.level === SKILL_LEVELS.experienced,
            "w-full": skill.level === SKILL_LEVELS.expert,
          })}></span>
      </div>
    </div>
  );
};
