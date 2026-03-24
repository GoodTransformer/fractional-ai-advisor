type FaqItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FaqItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-line py-6 open:bg-white/30"
        >
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
            <span className="font-serif text-2xl leading-tight text-ink">
              {item.question}
            </span>
            <span className="mt-1 text-xl text-copper transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
