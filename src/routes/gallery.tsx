import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG, VIDEO } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Atelier Gallery — Pearl Gifts" },
      { name: "description", content: "A glimpse inside Pearl Gifts' Lagos atelier: recent commissions, bespoke bamboo cases, engraved keepsakes and the people behind each gift." },
      { property: "og:title", content: "Atelier Gallery — Pearl Gifts" },
      { property: "og:description", content: "Recent commissions and behind-the-scenes from our Lagos atelier." },
      { property: "og:image", content: IMG.product3 },
      { name: "twitter:image", content: IMG.product3 },
    ],
  }),
  component: GalleryPage,
});

type Tile =
  | { kind: "image"; src: string; alt: string; span?: string }
  | { kind: "video"; src: string; span?: string };

const TILES: Tile[] = [
  { kind: "image", src: IMG.product1, alt: "Bespoke corporate hamper", span: "md:col-span-2 md:row-span-2" },
  { kind: "video", src: VIDEO.reel1 },
  { kind: "image", src: IMG.product2, alt: "Bamboo signature set" },
  { kind: "image", src: IMG.product3, alt: "Engraved keepsake detail", span: "md:row-span-2" },
  { kind: "video", src: VIDEO.reel2 },
  { kind: "image", src: IMG.product4, alt: "Crystal award piece" },
  { kind: "image", src: IMG.product5, alt: "Presentation set close-up" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Atelier Gallery"
        title={<>A glimpse inside our <em className="not-italic text-gradient-gold">recent commissions</em></>}
        description="Every piece below was hand-finished in our Lagos atelier and delivered within the past quarter."
      />

      <section className="pb-28 md:pb-40">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
            {TILES.map((t, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-3xl bg-[var(--secondary)] ${t.span ?? ""}`}>
                {t.kind === "image" ? (
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={t.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/65 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-5 bottom-5 translate-y-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-widest text-[var(--gold)]">Commission</p>
                  <p className="font-display text-lg">Bespoke piece №{i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
