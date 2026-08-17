import Image from "next/image";

const CARD_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px";
const HERO_SIZES = "(max-width: 1024px) 33vw, 320px";
const CARD_QUALITY = 85;

type PropertyCoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  variant?: "card" | "hero";
  className?: string;
  onError?: () => void;
};

export default function PropertyCoverImage({
  src,
  alt,
  priority = false,
  variant = "card",
  className = "object-cover",
  onError,
}: PropertyCoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={variant === "hero" ? HERO_SIZES : CARD_SIZES}
      quality={CARD_QUALITY}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      onError={
        onError
          ? () => {
              onError();
            }
          : undefined
      }
    />
  );
}
