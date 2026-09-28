import Image from "next/image";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";

type WriteupImageProps = {
  src: string;
  alt: string;
};

export default function WriteupImage({ src, alt }: WriteupImageProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
      <Image
        src={getGalleryPhotoSrc(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
