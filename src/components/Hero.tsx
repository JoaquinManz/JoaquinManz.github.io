import type { HeroData } from '../data/types'

export function Hero({ data }: { data: HeroData }) {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, white 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, white 30%, transparent 85%)',
        }}
      >
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-accent/8 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent-glow/8 blur-[90px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {data.photo ? (
          <img
            src={data.photo}
            alt={data.photoAlt}
            className="aspect-square w-40 rounded-2xl object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={data.photoAlt}
            className="aspect-square w-40 rounded-2xl bg-accent/20"
          />
        )}
        <p className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-accent-fg">
          {data.title}
        </p>
        <h1 className="bg-gradient-to-r from-accent-fg via-accent to-accent-glow bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
          {data.name}
        </h1>
        <p className="max-w-xl text-text">{data.tagline}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={data.ctaHref}
            download
            className="rounded-full bg-accent px-6 py-3 font-medium text-bg"
          >
            {data.ctaLabel}
          </a>
          <a
            href={data.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 font-medium text-text hover:text-accent-fg"
          >
            GitHub
          </a>
          <a
            href={data.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 font-medium text-text hover:text-accent-fg"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
