type WriteupHighlightsProps = {
  items: string[];
};

export default function WriteupHighlights({ items }: WriteupHighlightsProps) {
  return (
    <ul className="space-y-3 border-t border-stone-200 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-snug text-stone-800 sm:text-[15px]"
        >
          <span
            className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-stone-800"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
