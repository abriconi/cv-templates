import { useUserDataContext } from "../../../context/UserDataContext";
import { SectionHeader } from "../../../shared-components/SectionHeader/SectionHeader";

export const SocialEcho = () => {
  const { userData } = useUserDataContext();

  if (!userData || !userData.social || userData.social.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 items-center">
      <SectionHeader header="Social" />
      <div className="flex flex-col items-center">
        {userData.social.map((link, index) => (
          <a className="underline" href={link.link} key={index}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
