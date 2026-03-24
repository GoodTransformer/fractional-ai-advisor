type ArtefactDeckProps = {
  items: string[];
};

export function ArtefactDeck({ items }: ArtefactDeckProps) {
  return (
    <div className="artifact-stack mt-10 md:mt-0">
      {items.map((item, index) => (
        <div
          key={item}
          className="artifact-sheet rounded-[1.8rem] p-5"
          style={{
            bottom: `${index * 0.65}rem`,
            right: `${index * 0.55}rem`,
            transform: `rotate(${[-4, -1, 2, 4][index] ?? 0}deg)`,
            zIndex: index + 1,
          }}
        >
          <p className="page-eyebrow text-ink/42">Sample deliverable</p>
          <h3 className="mt-5 max-w-[12rem] font-serif text-2xl leading-tight text-ink">
            {item}
          </h3>
          <div className="mt-8 space-y-3">
            <div className="artifact-sheet-line" />
            <div className="artifact-sheet-line w-11/12" />
            <div className="artifact-sheet-line w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
