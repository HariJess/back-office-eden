import React from "react";

const CircleProgressBar = ({ percentage }) => {
  const strokeWidth = 6; // Largeur de la bordure du cercle de progression
  const backgroundStrokeWidth = 4.5; // Largeur de la bordure du cercle de fond
  const radius = 25; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle
  const offset = circumference - (percentage / 100) * circumference;

  const gradientCoordinates =
    percentage < 50
      ? { x1: "0%", y1: "0%", x2: "100%", y2: "0%" } // Horizontal pour moins de 50%
      : { x1: "0%", y1: "0%", x2: "10%", y2: "100%" };

  // Générer un ID unique pour le gradient
  const gradientId = `gradient-${percentage}`;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={radius * 2 + strokeWidth}
        height={radius * 2 + strokeWidth}
        className="-rotate-90 transform"
      >
        {/* Cercle de fond en gris */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={backgroundStrokeWidth}
          className="text-gray-3"
          fill="none"
          stroke="currentColor"
        />
        {/* Cercle de progression avec dégradé */}
        <circle
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            stroke: `url(#${gradientId})`, // Utilisation de l'ID unique
          }}
        />
        <defs>
          {/* Définition du dégradé dynamique avec couleurs et coordonnées */}
          <linearGradient id={gradientId} {...gradientCoordinates}>
            {percentage < 50 ? (
              <>
                <stop offset="0%" stopColor="#FF59B4" />
                <stop offset="100%" stopColor="#A60646" />
              </>
            ) : (
              <>
                <stop offset="36%" stopColor="#1A9EE3" />
                <stop offset="56%" stopColor="rgba(2,111,202,1)" />
              </>
            )}
          </linearGradient>
        </defs>
      </svg>
      {/* Affichage du pourcentage au centre */}
      <div className="text-gray-700 absolute text-xl font-semibold">
        {percentage}
      </div>
    </div>
  );
};

export default CircleProgressBar;
