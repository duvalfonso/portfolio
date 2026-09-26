import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const [mainImage, ...secondaryImages] = images;

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <Image
          src={mainImage}
          alt={`${title} - captura principal`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
          priority
          className="object-cover transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>

      {secondaryImages.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {secondaryImages.map((image, index) => (
            <div
              key={image}
              className="relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >
              <Image
                src={image}
                alt={`${title} - captura ${index + 2}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
