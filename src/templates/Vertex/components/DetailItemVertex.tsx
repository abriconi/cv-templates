interface Props {
    label?: string;
    color?: string;
  }
  
  export const DetailItemVertex: React.FC<Props> = ({ label, color }) => {
    if (!label) return null;
  
    return (
      <p className="text-sm" style={color ? { color } : undefined}>
        {label}
      </p>
    );
  };
  