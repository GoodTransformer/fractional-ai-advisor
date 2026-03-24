import Link from "next/link";

type CTA = {
  href: string;
  label: string;
};

type CTAGroupProps = {
  primary: CTA;
  secondary?: CTA;
  light?: boolean;
};

export function CTAGroup({ primary, secondary, light = false }: CTAGroupProps) {
  const primaryClasses = light
    ? "bg-paper text-ink hover:bg-white"
    : "bg-copper text-paper hover:bg-[#a85231]";
  const secondaryClasses = light
    ? "text-paper/84 hover:text-paper"
    : "text-ink/76 hover:text-ink";

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link
        href={primary.href}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${primaryClasses}`}
      >
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          href={secondary.href}
          className={`inline-flex items-center text-sm font-semibold ${secondaryClasses} calm-link`}
        >
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
