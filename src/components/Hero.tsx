import type { HeroData } from '../data/types'

export function Hero({ data }: { data: HeroData }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-4xl font-semibold text-text">{data.name}</h1>
      <p className="text-xl text-accent">{data.title}</p>
      <p className="max-w-xl text-text">{data.tagline}</p>
      <a
        href={data.ctaHref}
        className="rounded-full bg-accent px-6 py-3 font-medium text-bg"
      >
        {data.ctaLabel}
      </a>
    </div>
  )
}
