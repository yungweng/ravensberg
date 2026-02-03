interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullBleed?: boolean;
}

export function Section({ id, children, className = "", fullBleed = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${fullBleed ? "" : "max-w-6xl mx-auto px-6"} ${className}`}
    >
      {children}
    </section>
  );
}
