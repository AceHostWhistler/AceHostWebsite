import Head from "next/head";
import {
  shareImageMimeType,
  toAbsoluteImageUrl,
  type SocialSharePayload,
} from "@/lib/seo/socialShare";

type SocialShareMetaProps = SocialSharePayload;

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
    <Head>
      <meta name="description" content={description} />
      <meta key="og:title" property="og:title" content={ogTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={ogDescription}
      />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta
        key="og:image:secure_url"
        property="og:image:secure_url"
        content={imageUrl}
      />
      <meta key="og:image:alt" property="og:image:alt" content={ogTitle} />
      <meta
        key="og:image:type"
        property="og:image:type"
        content={shareImageMimeType(image)}
      />
      <link key="image_src" rel="image_src" href={imageUrl} />
      <meta key="og:type" property="og:type" content={type} />
      {type === "article" && publishedAt ? (
        <meta property="article:published_time" content={publishedAt} />
      ) : null}
      {type === "article" && modifiedAt ? (
        <meta property="article:modified_time" content={modifiedAt} />
      ) : null}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={ogTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={ogDescription}
      />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta key="twitter:image:alt" name="twitter:image:alt" content={ogTitle} />
    </Head>
  );
}
