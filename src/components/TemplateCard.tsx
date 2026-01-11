// import { useEffect, useState } from "react";
// import {
//   SiFigma,
//   SiCanva,
//   SiAdobephotoshop,
//   SiAdobeillustrator,
// } from "react-icons/si";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";

// interface TemplateCardProps {
//   template: {
//     name: string;
//     image: string[];
//     colors: string[];
//     tools: string[];
//   };
//   index: number;
// }

// const toolIcons: Record<string, any> = {
//   figma: SiFigma,
//   canva: SiCanva,
//   photoshop: SiAdobephotoshop,
//   illustrator: SiAdobeillustrator,
// };

// const TemplateCard = ({ template, index }: TemplateCardProps) => {
//   if (!template.image || template.image.length < 1) return null;

//   const [open, setOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const openViewer = (index: number) => {
//     setActiveIndex(index);
//     setOpen(true);
//   };

//   const next = () =>
//     setActiveIndex((prev) => (prev + 1) % template.image.length);

//   const prev = () =>
//     setActiveIndex((prev) =>
//       prev === 0 ? template.image.length - 1 : prev - 1
//     );

//   /* KEYBOARD NAVIGATION */
//   useEffect(() => {
//     if (!open) return;

//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [open]);

//   return (
//     <>
//       {/* CARD */}
//       <div
//         className="group relative rounded-2xl overflow-hidden
//         transition-all duration-300 ease-out
//         hover:-translate-y-1 hover:shadow-xl
//         dark:hover:bg-muted/50 dark:hover:shadow-black/20"
//         style={{ animationDelay: `${index * 80}ms` }}
//       >

// {/* IMAGE STACK */}
// <div className="relative z-10 p-4">
//   <button
//     onClick={() => openViewer(0)}
//     className="relative w-full aspect-[18/9] rounded-2xl overflow-hidden"
//   >
//     {template.image
//       .slice(0, 4)
//       .map((img, i) => {
//         const depth = template.image.slice(0, 4).length - 1 - i;

//         return (
//           <div
//             key={i}
//             className="absolute top-0 left-0 rounded-2xl overflow-hidden pointer-events-none"
//             style={{
//               width: "100%",
//               transform: `translateY(-${depth * 8}px)`,
//               zIndex: 10 - depth,
//             }}
//           >
//             <div className="w-full h-full bg-muted/50 flex items-center justify-center">
//               <img
//                 src={img}
//                 alt=""
//                 className="max-w-full max-h-full object-contain"
//               />
//             </div>
//           </div>
//         );
//       })}

//     {/* IMAGE COUNT */}
//     {template.image.length > 1 && (
//       <div
//         className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full
//         text-xs font-medium bg-black/70 text-white backdrop-blur"
//       >
//         +{template.image.length}
//       </div>
//     )}
//   </button>
// </div>



//         {/* FOOTER */}
//         <div className="relative z-10 px-4 pb-4 flex items-center justify-between">
//           <h3 className="text-sm font-medium truncate text-foreground">
//             {template.name}
//           </h3>

//           <div className="flex items-center gap-3">
//             {template.tools.slice(0, 4).map((tool) => {
//               const Icon = toolIcons[tool];
//               return (
//                 Icon && (
//                   <Icon
//                     key={tool}
//                     className="w-4 h-4 text-muted-foreground
//                     hover:text-foreground transition-colors"
//                   />
//                 )
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* IMAGE VIEWER MODAL */}
//       {open && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md
//           flex items-center justify-center"
//           onClick={() => setOpen(false)}
//         >
//           {/* CLOSE */}
//           <button
//             className="absolute top-6 right-6 text-white"
//             onClick={() => setOpen(false)}
//           >
//             <X size={28} />
//           </button>

//           {/* PREV */}
//           <button
//             className="absolute left-6 text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               prev();
//             }}
//           >
//             <ChevronLeft size={32} />
//           </button>

//           {/* IMAGE */}
//           <img
//             src={template.image[activeIndex]}
//             alt=""
//             className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
//             onClick={(e) => e.stopPropagation()}
//           />

//           {/* NEXT */}
//           <button
//             className="absolute right-6 text-white"
//             onClick={(e) => {
//               e.stopPropagation();
//               next();
//             }}
//           >
//             <ChevronRight size={32} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default TemplateCard;
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

  const openViewer = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);


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
        {/* IMAGE PREVIEW */}
        <div className="p-4">
          <div
            className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => openViewer(0)}
          >
            <img
              src={template.image[hoverIndex ?? 0]}
              alt={template.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          {/* IMAGE RAIL */}
          {template.image.length > 1 && (
            <div className="mt-3 flex gap-2">
              {template.image.slice(0, 4).map((img, i) => (
                <button
                  key={i}
                  onClick={() => openViewer(i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)} className="relative h-14 w-20 rounded-md overflow-hidden border border-border/40"
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
                    className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors"
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
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-6 text-white"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={template.image[activeIndex]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

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
