import type { EducationData } from '../data/types'

export function Education({ data }: { data: EducationData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.entries.map((entry) => (
          <li
            key={`${entry.institution}-${entry.title}`}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-text">
                <span>{entry.title}</span> · <span>{entry.institution}</span>
              </h3>
              <span className="text-sm text-accent-fg">{entry.period}</span>
            </div>
            {entry.location ? <p className="text-sm text-text/70">{entry.location}</p> : null}
            {entry.highlights ? (
              <ul className="mt-2 list-inside list-disc text-text">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}
