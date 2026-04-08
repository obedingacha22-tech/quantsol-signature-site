import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface SiteGalleryProps {
  siteName: string;
  images: string[];
}

const SiteGallery = ({ siteName, images }: SiteGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const navigate = (dir: number) => {
    setCurrentIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <>
      <div>
        <p className="text-sm font-semibold tracking-[0.15em] uppercase text-gold mb-3">{siteName}</p>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group/thumb relative aspect-square overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src={img}
                alt={`${siteName} — Photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                loading="lazy"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover/thumb:bg-navy/30 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 text-white/80 hover:text-white z-10"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={images[currentIndex]}
            alt={`${siteName} — Photo ${currentIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 text-white/60 text-sm">
            {siteName} — {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
};

export default SiteGallery;
