import React from "react";

interface Props {
    firstLabel?: string;
    secondLabel? : string;
}
export const DetailItemZenith: React.FC<Props> = ({firstLabel, secondLabel}) => {
    if (!firstLabel && !secondLabel) return null;
    else if (firstLabel && secondLabel) {
        return <p className="text-sm">{firstLabel}, {secondLabel}</p>
    } else if (firstLabel && !secondLabel) {
        return <p className="text-sm">{firstLabel}</p>
    } else if (!firstLabel && secondLabel) {
        return <p className="text-sm">{secondLabel}</p>
    }
}