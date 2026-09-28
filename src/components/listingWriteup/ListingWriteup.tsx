import LazyInstagramEmbed from "@/components/LazyInstagramEmbed";
import WriteupBedroomLayout from "./WriteupBedroomLayout";
import WriteupHeading from "./WriteupHeading";
import WriteupHighlights from "./WriteupHighlights";
import WriteupProse from "./WriteupProse";
import WriteupSplit from "./WriteupSplit";
import WriteupStayLists from "./WriteupStayLists";
import { writeupBodyClass, writeupLabelClass, writeupMeasureClass } from "./writeupStyles";
import type { ListingWriteupContent } from "./types";

type ListingWriteupProps = {
  photos: string[];
  content: ListingWriteupContent;
};

function photoAt(photos: string[], index: number): string {
  return photos[index] ?? photos[0] ?? "";
}

export default function ListingWriteup({
  photos,
  content,
}: ListingWriteupProps) {
  return (
    <div id="details" className="scroll-mt-24 bg-white text-stone-900">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-16">
          <div className={writeupMeasureClass}>
            <h2 className={`${writeupLabelClass} mb-6`}>Introduction</h2>
            <WriteupProse
              paragraphs={content.intro.paragraphs}
              className="max-w-xl"
            />
          </div>
          <WriteupHighlights items={content.intro.highlights} />
        </div>
        {content.walkthrough ? (
          <div className="mt-12 max-w-xs">
            <p className={`${writeupLabelClass} mb-4`}>Walkthrough</p>
            <LazyInstagramEmbed
              reelId={content.walkthrough.reelId}
              title={content.walkthrough.title}
              loadStrategy="inView"
              className="w-full"
            />
          </div>
        ) : null}
      </section>

      {content.residence ? (
        <section className="border-t border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <WriteupSplit
              section={content.residence}
              photoSrc={photoAt(photos, content.residence.image.photoIndex)}
            />
          </div>
        </section>
      ) : null}

      {content.location ? (
        <section className="border-t border-stone-200 bg-[#f6f3ed]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <WriteupSplit
              section={content.location}
              photoSrc={photoAt(photos, content.location.image.photoIndex)}
            />
          </div>
        </section>
      ) : null}

      {content.bedrooms ? (
        <section className="border-t border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <WriteupBedroomLayout bedrooms={content.bedrooms} />
          </div>
        </section>
      ) : null}

      {content.service ? (
        <section className="border-t border-stone-200 bg-[#f6f3ed]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <WriteupHeading title={content.service.title} />
              <div className="space-y-4">
                {content.service.lead.map((line) => (
                  <p
                    key={line}
                    className="text-lg font-medium leading-snug tracking-tight text-stone-900 sm:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
              <WriteupProse
                paragraphs={content.service.body}
                className="mt-8"
              />
            </div>
          </div>
        </section>
      ) : null}

      {content.stay ? (
        <section className="border-t border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <WriteupHeading title={content.stay.title} />
            <WriteupStayLists
              includedTitle={content.stay.includedTitle}
              included={content.stay.included}
              requestTitle={content.stay.requestTitle}
              request={content.stay.request}
              closing={content.stay.closing}
            />
          </div>
        </section>
      ) : null}

      {content.other ? (
        <section className="border-t border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <WriteupHeading title={content.other.title} />
              {content.other.guestAccess?.length ? (
                <div className="mb-10">
                  <h3 className="mb-3 text-sm font-medium text-stone-900">
                    Guest access
                  </h3>
                  <WriteupProse paragraphs={content.other.guestAccess} />
                </div>
              ) : null}
              {content.other.notes?.length ? (
                <div className="mb-10 space-y-5">
                  {content.other.notes.map((note) => (
                    <p key={note.slice(0, 48)} className={writeupBodyClass}>
                      {note}
                    </p>
                  ))}
                </div>
              ) : null}
              {content.other.registration?.length ? (
                <div>
                  <h3 className="mb-3 text-sm font-medium text-stone-900">
                    Registration details
                  </h3>
                  {content.other.registration.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-relaxed text-stone-600"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
