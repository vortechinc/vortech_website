'use client';
import { GOOGLE_MAPS_URL } from '@/utils/constants';
import { geoMercator, geoPath } from 'd3-geo';
import type { Feature, Geometry } from 'geojson';
import { useEffect, useState } from 'react';
import { feature } from 'topojson-client';

const locations = [
  { id: 1, name: 'Thailand (Bangkok)', lng: 100.5, lat: 13.75 },
  { id: 2, name: 'Romania (Bucharest)', lng: 26.1, lat: 44.43 },
  { id: 3, name: 'Vietnam (Ho Chi Minh)', lng: 106.63, lat: 10.82 },
  { id: 4, name: 'India (Hyderabad)', lng: 78.48, lat: 17.38 },
  { id: 5, name: 'Taiwan (Taipei)', lng: 121.56, lat: 25.03 },
  { id: 6, name: 'Bulgaria (Sofia)', lng: 23.32, lat: 42.7 },
  { id: 7, name: 'Sweden (Stockholm)', lng: 18.07, lat: 59.33 },
  { id: 8, name: 'UK (London)', lng: -0.13, lat: 51.51 }
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
                <circle
                  cx={x}
                  cy={y}
                  r={isMobile ? 4 : isTablet ? 6 : 8}
                  className="fill-orange stroke-white transition-all group-hover:fill-orange-600"
                  strokeWidth={isMobile ? 1.5 : 2}
                />

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
