
import React from 'react';

interface Props {
  className?: string;
  size?: number;
}

const CompanyLogo: React.FC<Props> = ({ className = "", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20 30L50 15L80 30V70L50 85L20 70V30Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="text-gold"
      />
      <path 
        d="M35 60V40L50 55L65 40V60" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white"
      />
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-gold/30" />
    </svg>
  );
};

export default CompanyLogo;
