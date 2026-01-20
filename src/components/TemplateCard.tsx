import { useEffect, useState } from "react";
import {
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface TemplateCardProps {
  template: {
    name: string;
    image: string[];
    colors: string[];
    tools: string[];
  };
  index: number;
}

const toolIcons: Record<string, any> = {
  figma: SiFigma,
  canva: SiCanva,
  photoshop: SiAdobephotoshop,
  illustrator: SiAdobeillustrator,
};

const TemplateCard = ({ template, index }: TemplateCardProps) => {
  if (!template.image || template.image.length < 1) return null;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % template.image.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? template.image.length - 1 : prev - 1
    );

  /* Keyboard navigation */
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* CARD */}
      <div
        className="group relative rounded-2xl border border-border/40 bg-card
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* IMAGE AREA */}
        <div className="p-4">
          <div className="grid grid-cols-[1fr_auto] gap-3 aspect-[16/9]">
            {/* HERO IMAGE */}
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openViewer(hoverIndex ?? 0)}
            >
              <img
                src={template.image[hoverIndex ?? 0]}
                alt={template.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* RIGHT IMAGE RAIL */}
            {template.image.length > 1 && (
              <div className="flex flex-col gap-2">
                {template.image.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openViewer(i)}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="relative h-full w-[80px] rounded-md overflow-hidden border border-border/40"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    {/* +N overlay */}
                    {i === 3 && template.image.length > 4 && (
                      <div className="absolute inset-0 bg-black/60 text-white text-xs font-medium flex items-center justify-center">
                        +{template.image.length - 3}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground truncate">
            {template.name}
          </h3>

          <div className="flex items-center gap-3">
            {template.tools.slice(0, 4).map((tool) => {
              const Icon = toolIcons[tool];
              return (
                Icon && (
                  <Icon
                    key={tool}
                    className="w-4 h-4 text-muted-foreground
                    hover:text-foreground transition-colors"
                  />
                )
              );
            })}
          </div>
        </div>
      </div>

      {/* IMAGE VIEWER */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md
          flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          {/* PREV */}
          <button
            className="absolute left-6 text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          {/* IMAGE */}
          <img
            src={template.image[activeIndex]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* NEXT */}
          <button
            className="absolute right-6 text-white"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
};

export default TemplateCard;
