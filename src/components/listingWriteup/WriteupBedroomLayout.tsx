import WriteupHeading from "./WriteupHeading";
import { writeupLabelClass } from "./writeupStyles";
import type { ListingWriteupContent } from "./types";

type WriteupBedroomLayoutProps = {
  bedrooms: NonNullable<ListingWriteupContent["bedrooms"]>;
};

export default function WriteupBedroomLayout({
  bedrooms,
}: WriteupBedroomLayoutProps) {
  return (
    <div>
      <WriteupHeading title={bedrooms.title} />
      {bedrooms.summary ? (
        <p className="mb-10 max-w-xl text-base leading-relaxed text-stone-700">
          {bedrooms.summary}
        </p>
      ) : null}

      <div className="space-y-12">
        {bedrooms.floors.map((floor) => (
          <section
            key={floor.label}
            aria-labelledby={
              floor.hideLabel
                ? undefined
                : `floor-${floor.label.replace(/\s+/g, "-").toLowerCase()}`
            }
          >
            {floor.hideLabel ? null : (
              <h3
                id={`floor-${floor.label.replace(/\s+/g, "-").toLowerCase()}`}
                className={`${writeupLabelClass} mb-2`}
              >
                {floor.label}
              </h3>
            )}
            {floor.note ? (
              <p className="mb-4 max-w-2xl text-sm leading-relaxed text-stone-500">
                {floor.note}
              </p>
            ) : null}
            <ul className="divide-y divide-stone-200 border-y border-stone-200">
              {floor.bedrooms.map((room) => (
                <li
                  key={room.name}
                  className="grid gap-1 py-3.5 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-8 sm:py-4"
                >
                  <p className="text-sm font-medium text-stone-900">
                    {room.name}
                  </p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    {room.details}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {bedrooms.footnote ? (
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-500">
          {bedrooms.footnote}
        </p>
      ) : null}
    </div>
  );
}
