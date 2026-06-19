'use client';
import { GOOGLE_MAPS_URL } from '@/utils/constants';
import { geoMercator, geoPath } from 'd3-geo';
import type { Feature, Geometry } from 'geojson';
import { useEffect, useState } from 'react';
import { feature } from 'topojson-client';

const locations = [
  { id: 1, name: 'UK (London)', lng: -0.13, lat: 51.51 },
  { id: 2, name: 'Romania (Bucharest)', lng: 26.10, lat: 44.43 },
  { id: 3, name: 'Vietnam (Ho Chi Minh City)', lng: 106.63, lat: 10.82 },
  { id: 4, name: 'Thailand (Bangkok)', lng: 100.50, lat: 13.75 },
  { id: 5, name: 'India (Hyderabad)', lng: 78.48, lat: 17.38 },
  { id: 6, name: 'Bulgaria (Sofia)', lng: 23.32, lat: 40.70 },
  { id: 7, name: 'Sweden (Stockholm)', lng: 18.07, lat: 59.33 },
  { id: 8, name: 'UAE (Dubai)', lng: 55.27, lat: 25.20 },
  { id: 9, name: 'Malta (Valletta)', lng: 14.51, lat: 35.90 },
  { id: 10, name: 'Nigeria (Lagos)', lng: 3.38, lat: 6.52 },
  { id: 11, name: 'South Africa (Johannesburg)', lng: 28.05, lat: -26.20 },
  { id: 12, name: 'Uzbekistan (Tashkent)', lng: 69.24, lat: 41.31 },
  { id: 13, name: 'Kazakhstan (Almaty)', lng: 76.89, lat: 43.24 },
  { id: 14, name: 'Kyrgyzstan (Bishkek)', lng: 69.60, lat: 35.87 },
  { id: 15, name: 'Argentina (Buenos Aires)', lng: -58.38, lat: -34.60 },
  { id: 16, name: 'Brazil (São Paulo)', lng: -46.63, lat: -23.55 }
];

export default function GlobalMap() {
  const [geographies, setGeographies] = useState<Feature<Geometry>[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const scale = isMobile ? 120 : isTablet ? 160 : 220;
  const translateX = isMobile ? 400 : isTablet ? 500 : 900;
  const translateY = isMobile ? 200 : isTablet ? 250 : 400;

  const projection = geoMercator()
    .scale(scale)
    .translate([translateX, translateY]);
  const pathGenerator = geoPath().projection(projection);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    fetch(GOOGLE_MAPS_URL)
      .then((response) => response.json())
      .then((data) => {
        const countries = feature(data, data.objects.countries);
        if (countries && 'features' in countries) {
          setGeographies(countries.features as Feature<Geometry>[]);
        }
      });

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <div className="relative mx-auto flex w-full items-center justify-center">
        <svg
          viewBox={
            isMobile
              ? '0 0 800 450'
              : isTablet
                ? '0 0 1000 550'
                : '0 0 1800 800'
          }
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="countries">
            {geographies.map((d, i) => (
              <path
                key={`path-${i}`}
                d={pathGenerator(d) || ''}
                className="fill-gray-200 stroke-gray-300 transition-colors hover:fill-gray-300"
                strokeWidth={0.5}
              />
            ))}
          </g>

          {locations.map((loc) => {
            const coords = projection([loc.lng, loc.lat]);
            if (!coords) return null;
            const [x, y] = coords;

            return (
              <g key={loc.id} className="group cursor-pointer">
                {/* Outer Ring - blinking */}
                <circle
                  className="marker-ring-outer"
                  style={{
                    animationDelay: `${loc.id * 0.12}s`,
                  }}
                  cx={x}
                  cy={y}
                  r={isMobile ? 8 : isTablet ? 10 : 12}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="1.5"
                />

                {/* Middle Ring - blinking */}
                <circle
                  className="marker-ring-middle"
                  style={{
                    animationDelay: `${loc.id * 0.12 + 0.25}s`,
                  }}
                  cx={x}
                  cy={y}
                  r={isMobile ? 5 : isTablet ? 6 : 7}
                  fill="white"
                  fillOpacity="0.9"
                  stroke="#dc2626"
                  strokeWidth="1.5"
                />

                {/* Center Dot - fixed */}
                <circle
                  cx={x}
                  cy={y}
                  r={isMobile ? 4 : isTablet ? 5 : 7}
                  fill="#dc2626"
                  stroke="white"
                  strokeWidth="1"
                />

                {/* Tooltip */}

                <g className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <rect
                    x={x + (isMobile ? 8 : 12)}
                    y={y - (isMobile ? 18 : isTablet ? 22 : 26)}
                    width={isMobile ? 100 : isTablet ? 150 : 240}
                    height={isMobile ? 24 : isTablet ? 32 : 40}
                    rx={4}
                    fill="#1a1a1a"
                    className="drop-shadow-lg"
                    stroke="#ff6b35"
                    strokeWidth={isMobile ? 1.5 : 2}
                  />
                  <text
                    x={x + (isMobile ? 14 : isTablet ? 18 : 22)}
                    y={y - (isMobile ? 2 : isTablet ? 2 : 2)}
                    className="fill-white font-semibold"
                    fontSize={isMobile ? 10 : isTablet ? 12 : 14}
                  >
                    {loc.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
