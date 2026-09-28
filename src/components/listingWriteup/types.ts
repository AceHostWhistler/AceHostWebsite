export type WriteupImage = {
  photoIndex: number;
  alt: string;
};

export type WriteupSplitSection = {
  title: string;
  paragraphs: string[];
  image: WriteupImage;
  /** Desktop image side. Copy stays first on mobile. */
  imageSide?: "left" | "right";
};

export type WriteupBedroom = {
  name: string;
  details: string;
};

export type WriteupFloor = {
  label: string;
  note?: string;
  /** Hide the floor kicker for compact one-level homes. */
  hideLabel?: boolean;
  bedrooms: WriteupBedroom[];
};

export type WriteupWalkthrough = {
  reelId: string;
  title: string;
};

export type ListingWriteupContent = {
  intro: {
    paragraphs: string[];
    highlights: string[];
  };
  walkthrough?: WriteupWalkthrough;
  residence?: WriteupSplitSection;
  location?: WriteupSplitSection;
  bedrooms?: {
    title: string;
    summary?: string;
    floors: WriteupFloor[];
    footnote?: string;
  };
  service?: {
    title: string;
    lead: string[];
    body: string[];
  };
  stay?: {
    title: string;
    includedTitle: string;
    included: string[];
    requestTitle: string;
    request: string[];
    closing?: string;
  };
  other?: {
    title: string;
    guestAccess?: string[];
    notes?: string[];
    registration?: string[];
  };
};
