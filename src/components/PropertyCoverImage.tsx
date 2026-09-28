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

function cardImageClassName(className?: string): string {
  const extra = (className ?? "")
    .split(/\s+/)
    .filter(Boolean)
    .filter(
      (token) =>
        !token.startsWith("object-") &&
        token !== "image-zoom" &&
        token !== "h-full" &&
        !token.startsWith("hover:scale")
    )
    .join(" ");

  return ["h-auto", "w-full", "object-contain", "object-center", extra]
    .filter(Boolean)
    .join(" ");
}

export default function PropertyCoverImage({
  src,
  alt,
  priority = false,
  variant = "card",
  className,
  onError,
}: PropertyCoverImageProps) {
  const handleError = onError
    ? () => {
        onError();
      }
    : undefined;

  if (variant === "hero") {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={HERO_SIZES}
        quality={CARD_QUALITY}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={className ?? "object-cover"}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1067}
      sizes={CARD_SIZES}
      quality={CARD_QUALITY}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cardImageClassName(className)}
      style={{ width: "100%", height: "auto" }}
      onError={handleError}
    />
  );
}
