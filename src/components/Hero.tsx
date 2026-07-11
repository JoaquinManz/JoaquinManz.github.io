import type { HeroData } from '../data/types'

export function Hero({ data }: { data: HeroData }) {
  return (
    <div className="flex flex-col items-center gap-4 overflow-x-hidden text-center">
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
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-r from-accent-fg via-accent to-accent-glow opacity-25 blur-2xl"
        />
        <h1 className="bg-gradient-to-r from-accent-fg via-accent to-accent-glow bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
          {data.name}
        </h1>
      </div>
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
  )
}
