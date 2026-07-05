import type { AboutData } from '../data/types'

export function About({ data }: { data: AboutData }) {
  return (
    <div className="grid gap-8 md:grid-cols-[200px_1fr]">
      {data.portrait ? (
        <img
          src={data.portrait}
          alt={data.portraitAlt}
          className="aspect-square w-full rounded-2xl object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={data.portraitAlt}
          className="aspect-square w-full rounded-2xl bg-accent/20"
        />
      )}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-text">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
