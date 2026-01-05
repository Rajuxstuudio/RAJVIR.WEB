import { useState } from "react";
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
  // SAFETY
  if (!template.image || template.image.length < 4) return null;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <>
      {/* CARD */}
      <div
        className="group relative rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* image GRID */}
        <div className="relative z-10 p-4">
          <div
            className="grid grid-cols-[2fr_1fr] gap-2 rounded-xl p-2"
            style={{
              background: `linear-gradient(
                135deg,
                ${template.colors[0] || "#f1f5f9"}20,
                ${template.colors[1] || template.colors[0] || "#e5e7eb"}30
              )`,
            }}
          >
            {/* MAIN image */}
            <button
              onClick={() => openViewer(0)}
              className="relative aspect-[16/9] rounded-lg overflow-hidden"
            >
              <img
                src={template.image[0]}
                alt={template.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>

            {/* THUMBNAILS */}
            <div className="flex flex-col gap-2">
              {template.image.slice(1, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => openViewer(i + 1)}
                  className="relative flex-1 rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="relative z-10 px-4 pb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium truncate text-foreground">
            {template.name}
          </h3>

          <div className="flex items-center gap-2">
            {template.tools.slice(0, 4).map((tool) => {
              const Icon = toolIcons[tool];
              return (
                <div
                  key={tool}
                  className="w-7 h-7 rounded-md flex items-center justify-center
                  bg-white/80 backdrop-blur border border-black/5
                  text-muted-foreground"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* image VIEWER MODAL */}
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

          {/* image */}
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
