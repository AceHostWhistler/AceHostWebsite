import { writeupBodyClass } from "./writeupStyles";

type WriteupProseProps = {
  paragraphs: string[];
  className?: string;
};

export default function WriteupProse({
  paragraphs,
  className = "",
}: WriteupProseProps) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className={writeupBodyClass}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
