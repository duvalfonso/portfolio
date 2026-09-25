type ArchitectureItem = {
  layer: string;
  description: string;
};

type ProjectArchitectureProps = {
  items: ArchitectureItem[];
};

export default function ProjectArchitecture({
  items,
}: ProjectArchitectureProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.layer}
          className="group grid gap-4 rounded-xl border border-white/10 bg-[#111113] p-5 transition-colors hover:border-violet-400/30 sm:grid-cols-[140px_1fr]"
        >
          <div className="flex items-start gap-3">
            <span className="mono text-xs text-violet-400">0{index + 1}</span>

            <span className="font-medium text-white">{item.layer}</span>
          </div>

          <p className="text-sm leading-7 text-zinc-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
