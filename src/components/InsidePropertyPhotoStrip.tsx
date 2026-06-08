import React from "react";
import Image from "next/image";

interface InsidePropertyPhotoStripProps {
  title: string;
  photos: string[];
}

/** Pick four spread-out gallery indices for visual variety. */
function pickPhotoIndices(photos: string[]): number[] {
  const n = photos.length;
  if (n === 0) return [];
  if (n <= 4) return Array.from({ length: n }, (_, i) => i);
  const picks = [1, Math.floor(n * 0.28), Math.floor(n * 0.52), Math.floor(n * 0.76)];
  return [...new Set(picks.map((i) => Math.min(i, n - 1)))].slice(0, 4);
}

const InsidePropertyPhotoStrip: React.FC<InsidePropertyPhotoStripProps> = ({
  title,
  photos,
}) => {
  const indices = pickPhotoIndices(photos);
  if (indices.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Inside {title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {indices.map((index, i) => (
          <div
            key={`${photos[index]}-${i}`}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src={photos[index]}
              alt={`${title} photo ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsidePropertyPhotoStrip;
