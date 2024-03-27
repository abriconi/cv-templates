import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { EducationType } from "../../../helpers/types";
import { EducationItem } from "../../../shared-components/EducationItem";
import { HeadingEcho } from "./HeadingEcho";
import { VerticalDivider } from "../../../shared-components/VerticalDivider/VerticalDivider";


interface Props {
  education: EducationType[];
}

export const EducationEcho: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center -ml-1.5">
        <FontAwesomeIcon icon={faGraduationCap} style={{ color: "var(--primary-color)" }} />
        <HeadingEcho tag="h2" title="Education" />
      </div>
      <>
        {education.map((item, index) => (
          <VerticalDivider key={index}>
            <EducationItem item={item} key={index} />
          </VerticalDivider>
        ))}
      </>
    </div>
  );
};
