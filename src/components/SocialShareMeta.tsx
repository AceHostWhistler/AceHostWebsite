import Head from "next/head";
import {
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
}: SocialShareMetaProps) {
  const imageUrl = toAbsoluteImageUrl(image);

  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:type" content={type} />
      {type === "article" && publishedAt ? (
        <meta property="article:published_time" content={publishedAt} />
      ) : null}
      {type === "article" && modifiedAt ? (
        <meta property="article:modified_time" content={modifiedAt} />
      ) : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
