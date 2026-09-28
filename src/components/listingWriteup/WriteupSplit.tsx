import WriteupHeading from "./WriteupHeading";
import WriteupImage from "./WriteupImage";
import WriteupProse from "./WriteupProse";
import type { WriteupSplitSection } from "./types";

type WriteupSplitProps = {
  section: WriteupSplitSection;
  photoSrc: string;
};

export default function WriteupSplit({ section, photoSrc }: WriteupSplitProps) {
  const imageFirst = section.imageSide === "left";

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`order-2 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
        <WriteupImage src={photoSrc} alt={section.image.alt} />
      </div>
      <div className={`order-1 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
        <WriteupHeading title={section.title} />
        <WriteupProse paragraphs={section.paragraphs} className="max-w-xl" />
      </div>
    </div>
  );
}
