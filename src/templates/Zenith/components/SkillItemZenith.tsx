import clsx from "clsx";

import styles from "../zenith.module.css";
import { useMemo } from "react";
import { determineSkillLevel } from "../../../helpers/formatters";
import { SkillType } from "../../../helpers/types";


interface Props {
  skill: SkillType;
}

export const SkillItemZenith: React.FC<Props> = ({ skill }: Props) => {
  const levelMark = useMemo(() => determineSkillLevel(skill.level), [skill.level]);
  return (
    <div className="flex flex-row">
      <p className={clsx(styles.dotBorder, "text-sm")}>{skill.skill}</p>
      <p className="text-sm text-nowrap">{levelMark}</p>
    </div>
  );
};
