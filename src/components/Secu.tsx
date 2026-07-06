import type { SecuData } from '../data/types'

export function Secu({ data }: { data: SecuData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <article className="mt-6 flex flex-col gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-8">
        {data.image ? (
          <img
            src={data.image}
            alt={data.imageAlt}
            className="aspect-video w-full rounded-xl object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={data.imageAlt}
            className="aspect-video w-full rounded-xl bg-accent/20"
          />
        )}
        <h3 className="text-xl font-medium text-text">{data.name}</h3>
        <p className="text-text">{data.summary}</p>
        {data.role ? <p className="text-text">{data.role}</p> : null}
        <ul className="flex flex-wrap gap-2">
          {data.tech.map((tech) => (
            <li key={tech} className="rounded-full border border-black/10 px-3 py-1 text-sm text-text">
              {tech}
            </li>
          ))}
        </ul>
        <ul className="list-inside list-disc text-text">
          {data.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="flex gap-4">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </article>
    </div>
  )
}
