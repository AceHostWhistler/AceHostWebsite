import Head from "next/head";
import {
  toAbsoluteImageUrl,
  type SocialSharePayload,
} from "@/lib/seo/socialShare";

type SocialShareMetaProps = SocialSharePayload;

function imageMimeType(imagePath: string): string {
  const path = imagePath.split("?")[0]?.toLowerCase() ?? "";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".webp")) return "image/webp";
  if (path.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

export default function SocialShareMeta({
  title,
  description,
  image,
  type = "website",
  publishedAt,
  modifiedAt,
  socialTitle,
  socialDescription,
}: SocialShareMetaProps) {
  const imageUrl = toAbsoluteImageUrl(image);
  const ogTitle = socialTitle ?? title;
  const ogDescription = socialDescription ?? description;

  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={ogTitle} />
      <meta property="og:image:type" content={imageMimeType(image)} />
      <link rel="image_src" href={imageUrl} />
      <meta property="og:type" content={type} />
      {type === "article" && publishedAt ? (
        <meta property="article:published_time" content={publishedAt} />
      ) : null}
      {type === "article" && modifiedAt ? (
        <meta property="article:modified_time" content={modifiedAt} />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogTitle} />
    </>
  );
}
