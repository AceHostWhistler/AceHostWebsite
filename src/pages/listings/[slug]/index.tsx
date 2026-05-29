import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PropertyListingLayout from "@/components/PropertyListingLayout";
import { getListing, listingSlugs } from "@/data/listings";
import type { ListingData } from "@/data/listings/types";

interface ListingPageProps {
  slug: string;
  listingData: ListingData;
}

export default function ListingPage({ slug, listingData }: ListingPageProps) {
  const entry = getListing(slug);
  if (!entry) return null;

  const { Details } = entry;

  return (
    <PropertyListingLayout listing={listingData}>
      <Details photos={listingData.photos} />
    </PropertyListingLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: listingSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ListingPageProps> = async (
  context
) => {
  const slug = context.params?.slug as string;
  const entry = getListing(slug);

  if (!entry) {
    return { notFound: true };
  }

  const { Details: _Details, ...listingData } = entry;

  return {
    props: {
      slug,
      listingData,
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
