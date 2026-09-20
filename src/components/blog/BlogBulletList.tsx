import React from "react";

type BlogBulletListProps = {
  items: string[];
  /** Use two columns for short names such as buildings and neighbourhoods. */
  columns?: 1 | 2;
};

export default function BlogBulletList({
  items,
  columns = 1,
}: BlogBulletListProps) {
  return (
    <ul
      className={
        columns === 2
          ? "not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none pl-0"
          : "not-prose my-8 flex flex-col gap-2.5 list-none pl-0"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
        >
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100"
            aria-hidden
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
          </span>
          <span className="text-[15px] sm:text-base text-gray-800 leading-snug">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
