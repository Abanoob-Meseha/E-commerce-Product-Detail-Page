import React from "react";

type Props = {
  rating: number; // between 0 - 5
};

const CircleProgress = ({ rating }: Props) => {
  const radius = 40;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const percentage = (rating / 5) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="text-golden"
    >
      {/* background */}
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* progress */}
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        className="transition-all duration-500"
      />
      {/* rating number */}
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        fontSize="16"
        fontWeight="600"
        fill="#1e293b" 
      >
        {rating}
      </text>
    </svg>
  );
};

export default CircleProgress;
