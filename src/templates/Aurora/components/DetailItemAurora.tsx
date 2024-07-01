import React from "react";

interface Props {
    firstLabel?: string;
    secondLabel?: string;
}

export const DetailItemAurora: React.FC<Props> = ({ firstLabel, secondLabel }) => {
    if (!firstLabel && !secondLabel) return null;

    else if (firstLabel && secondLabel) {
        return <p>{`${firstLabel} · ${secondLabel}`}</p>;
    } else if (firstLabel) {
        return <p>{firstLabel}</p>;
    } else if (secondLabel) {
        return <p>{secondLabel}</p>;
    }
};
