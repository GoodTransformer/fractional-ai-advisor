type SamplePlanItem = {
  phase: string;
  title: string;
  body: string;
};

type SamplePlanProps = {
  items: SamplePlanItem[];
};

export function SamplePlan({ items }: SamplePlanProps) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <div
          key={item.phase}
          className="grid gap-4 border-b border-line py-6 lg:grid-cols-[180px_minmax(0,1fr)]"
        >
          <p className="page-eyebrow text-ink/48">{item.phase}</p>
          <div>
            <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
