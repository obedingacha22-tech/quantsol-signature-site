import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeader = ({ label, title, description, align = "center", light = false }: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <ScrollReveal className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${light ? "text-gold" : "text-accent"}`}>
          {label}
        </span>
      )}
      <div className={`gold-line ${align === "center" ? "mx-auto" : ""}`} />
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeader;
