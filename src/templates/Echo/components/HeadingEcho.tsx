interface Props {
  tag: "h1" | "h2";
  title: string | undefined;
}
const [h1, h2] = ["h1", "h2"];

export const HeadingEcho: React.FC<Props> = ({ tag, title }) => {
  if (!title) return null;
  return (
    <>
      {tag === h1 && <h1 className="uppercase text-2xl">{title}</h1>}
      {tag === h2 && (
        <h2 className="uppercase" style={{ color: "var(--primary-color)" }}>
          {title}
        </h2>
      )}
    </>
  );
};
