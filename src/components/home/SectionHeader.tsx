export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">{title}</h2>
      {desc && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
}