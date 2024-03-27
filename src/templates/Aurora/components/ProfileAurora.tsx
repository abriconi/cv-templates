import { HeadingAurora } from "../../../shared-components/Heading";

interface Props {
  summary: string;
}
export const ProfileAurora: React.FC<Props> = ({ summary }: Props) => (
    <div className="flex flex-col gap-2 items-start">
        <HeadingAurora tag="h2" title="Profile" />
        <p className="text-sm">{summary}</p>
    </div>
);
