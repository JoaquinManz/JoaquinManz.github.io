import type { HeroData } from '../data/types'

export function Hero({ data }: { data: HeroData }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
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
      <h1 className="text-4xl font-semibold text-text">{data.name}</h1>
      <p className="text-xl text-accent">{data.title}</p>
      <p className="max-w-xl text-text">{data.tagline}</p>
      <a
        href={data.ctaHref}
        download
        className="rounded-full bg-accent px-6 py-3 font-medium text-bg"
      >
        {data.ctaLabel}
      </a>
      <ul className="flex gap-4">
        <li>
          <a
            href={data.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href={data.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
