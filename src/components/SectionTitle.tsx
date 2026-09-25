type SectionTitleProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  number,
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <p className="mono text-sm text-violet-400">
        {number} / {eyebrow}
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
