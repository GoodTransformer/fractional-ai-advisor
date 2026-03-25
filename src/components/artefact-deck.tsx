import type { ProofArtefact } from "@/content/site-content";

type ArtefactDeckProps = {
  items: ProofArtefact[];
};

const sheetClasses = [
  "artifact-sheet artifact-sheet--direction",
  "artifact-sheet artifact-sheet--scorecard",
  "artifact-sheet artifact-sheet--playbook",
  "artifact-sheet artifact-sheet--governance",
] as const;

export function ArtefactDeck({ items }: ArtefactDeckProps) {
  return (
    <div className="artifact-stack" aria-label="Example deliverables">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={sheetClasses[index] ?? "artifact-sheet"}
        >
          <p className="artifact-sheet-label">{item.label}</p>
          <h3 className="artifact-sheet-title">{item.title}</h3>
          <p className="artifact-sheet-subtitle">{item.subtitle}</p>
          <div className="artifact-sheet-lines">
            {item.rows.map((row) => (
              <div key={row} className="artifact-sheet-row">
                <span>{row}</span>
                <div className="artifact-sheet-line" />
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
