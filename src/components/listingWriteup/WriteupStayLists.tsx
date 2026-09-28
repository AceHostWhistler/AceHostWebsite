import { writeupLabelClass } from "./writeupStyles";

type WriteupStayListsProps = {
  includedTitle: string;
  included: string[];
  requestTitle: string;
  request: string[];
  closing?: string;
};

function QuietList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-stone-700 sm:text-[15px]"
        >
          <span
            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-stone-800"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WriteupStayLists({
  includedTitle,
  included,
  requestTitle,
  request,
  closing,
}: WriteupStayListsProps) {
  return (
    <div>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className={`${writeupLabelClass} mb-5`}>{includedTitle}</h3>
          <QuietList items={included} />
        </div>
        <div>
          <h3 className={`${writeupLabelClass} mb-5`}>{requestTitle}</h3>
          <QuietList items={request} />
        </div>
      </div>
      {closing ? (
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-500">
          {closing}
        </p>
      ) : null}
    </div>
  );
}
