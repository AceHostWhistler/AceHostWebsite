import { writeupHeadingClass, writeupLabelClass } from "./writeupStyles";

type WriteupHeadingProps = {
  title: string;
  kicker?: string;
};

export default function WriteupHeading({ title, kicker }: WriteupHeadingProps) {
  return (
    <div className="mb-8">
      {kicker ? <p className={`${writeupLabelClass} mb-3`}>{kicker}</p> : null}
      <h2 className={writeupHeadingClass}>{title}</h2>
    </div>
  );
}
