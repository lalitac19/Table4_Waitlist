interface Table4LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Table4Logo({ className = "", size = "md" }: Table4LogoProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32", 
    lg: "w-48 h-48"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 160" className="w-full h-full">
        {/* Four people sitting around table */}
        <g fill="var(--purple-primary)">
          {/* Table */}
          <rect x="30" y="65" width="140" height="8" rx="4" />
          
          {/* Person 1 - Left */}
          <circle cx="50" cy="35" r="12" />
          <rect x="40" y="45" width="20" height="25" rx="10" />
          <rect x="10" y="65" width="30" height="8" rx="4" />
          <rect x="15" y="70" width="6" height="20" rx="3" />
          <rect x="35" y="70" width="6" height="20" rx="3" />
          
          {/* Person 2 - Left-center */}
          <circle cx="80" cy="35" r="12" />
          <rect x="70" y="45" width="20" height="25" rx="10" />
          <rect x="65" y="70" width="6" height="20" rx="3" />
          <rect x="85" y="70" width="6" height="20" rx="3" />
          
          {/* Person 3 - Right-center */}
          <circle cx="120" cy="35" r="12" />
          <rect x="110" y="45" width="20" height="25" rx="10" />
          <rect x="105" y="70" width="6" height="20" rx="3" />
          <rect x="125" y="70" width="6" height="20" rx="3" />
          
          {/* Person 4 - Right */}
          <circle cx="150" cy="35" r="12" />
          <rect x="140" y="45" width="20" height="25" rx="10" />
          <rect x="160" y="65" width="30" height="8" rx="4" />
          <rect x="165" y="70" width="6" height="20" rx="3" />
          <rect x="185" y="70" width="6" height="20" rx="3" />
        </g>
        
        {/* TABLE4 Text */}
        <g fill="var(--purple-primary)" fontFamily="Arial, sans-serif" fontWeight="bold">
          <text x="100" y="120" textAnchor="middle" fontSize="24" letterSpacing="2px">
            TABLE4
          </text>
        </g>
        
        {/* Tagline */}
        <g fill="var(--purple-primary)" fontFamily="Arial, sans-serif" fontWeight="normal">
          <text x="100" y="145" textAnchor="middle" fontSize="10" letterSpacing="1px">
            NEW PLATES. NEW PEOPLE.
          </text>
        </g>
      </svg>
    </div>
  );
}