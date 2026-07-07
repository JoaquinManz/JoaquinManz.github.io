import type { ExperienceData } from '../data/types'

export function Experience({ data }: { data: ExperienceData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <ol className="mt-6 flex flex-col">
        {data.entries.map((entry, index) => (
          <li
            key={`${entry.company}-${entry.role}`}
            className={`relative border-l border-border pl-6 ${
              index === data.entries.length - 1 ? 'pb-0' : 'pb-8'
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-text">
                <span>{entry.role}</span> · <span>{entry.company}</span>
              </h3>
              <span className="text-sm text-accent-fg">{entry.period}</span>
            </div>
            {entry.location ? <p className="text-sm text-text/70">{entry.location}</p> : null}
            <ul className="mt-2 list-inside list-disc text-text">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
