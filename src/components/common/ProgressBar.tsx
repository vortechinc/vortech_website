import React from 'react';
interface ProgressBarProps {
  percent: number;
  max: number;
}

const calculatePercentWidth = (percent: number, max: number) => {
  const safeMax = max > 0 ? max : 100;
  const safePercent = Math.min(Math.max(percent, 0), safeMax);
  return `${(safePercent / safeMax) * 100}%`;
};

const ProgressBar = ({ percent, max }: ProgressBarProps) => {
  return (
    <div className="mx-auto my-2 h-0.5 w-full bg-gray-400 sm:my-4">
      <div
        className="h-full bg-white transition-all duration-300"
        style={{ width: calculatePercentWidth(percent, max) }}
      />
    </div>
  );
};

export default ProgressBar;
