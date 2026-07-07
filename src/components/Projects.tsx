import type { ProjectsData } from '../data/types'

export function Projects({ data }: { data: ProjectsData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project) => (
          <article key={project.name} className="flex flex-col gap-3 rounded-2xl border border-border p-4">
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-video w-full rounded-xl object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={project.imageAlt}
                className="aspect-video w-full rounded-xl bg-accent/20"
              />
            )}
            <span
              data-testid="project-category-badge"
              className="w-fit rounded-full border border-border bg-surface px-2 py-1 text-xs text-text"
            >
              {project.tech[0]}
            </span>
            <h3 className="text-lg font-medium text-text">{project.name}</h3>
            <p className="text-text">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="rounded-full border border-border px-3 py-1 text-sm text-text">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-fg underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
