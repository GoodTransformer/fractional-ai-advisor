type SectionHeadingProps = {
  number: string;
  label: string;
  heading: string;
  body?: string;
  inverted?: boolean;
};

export function SectionHeading({
  number,
  label,
  heading,
  body,
  inverted = false,
}: SectionHeadingProps) {
  const labelClass = inverted ? "text-paper/62" : "text-ink/52";
  const bodyClass = inverted ? "text-paper/72" : "text-slate";

  return (
    <div className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
      <div className="flex items-baseline gap-4 lg:flex-col lg:gap-2">
        <span className="number-label">{number}</span>
        <span className={`page-eyebrow ${labelClass}`}>{label}</span>
      </div>
      <div className="max-w-4xl">
        <h2
          className={`font-serif text-3xl leading-tight md:text-4xl ${
            inverted ? "text-paper" : "text-ink"
          }`}
        >
          {heading}
        </h2>
        {body ? (
          <p className={`mt-4 max-w-3xl text-base leading-7 md:text-lg ${bodyClass}`}>
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
