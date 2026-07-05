import type { SkillsData } from '../data/types'

export function Skills({ data }: { data: SkillsData }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {data.categories.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-medium text-accent">{category.category}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm text-text"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
