import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeadingVertex } from "./HeadingVertex";
import { EducationType } from "../../../helpers/types";
import { EducationItem } from "../../../shared-components/EducationItem";

interface EducationProps {
  education: EducationType[];
}

export const EducationVertex: React.FC<EducationProps> = ({ education }: EducationProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingVertex tag="h2" title="Education">
        <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
      </HeadingVertex>

      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
