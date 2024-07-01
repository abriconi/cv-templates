interface Props {
    label?: string;
    className?: string;
  }
  
  export const DetailItem: React.FC<Props> = ({ label, className }) => {
    if (!label) return null;
  
    return (
      <p className={className}>
        {label}
      </p>
    );
  };
  