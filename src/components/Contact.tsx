import type { ContactData } from '../data/types'

export function Contact({ data }: { data: ContactData }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl font-semibold text-text">{data.heading}</h2>
      <p className="text-text">{data.message}</p>
      <a href={`mailto:${data.email}`} className="font-medium text-accent underline">
        {data.email}
      </a>
      <p className="text-text">{data.phone}</p>
      <p className="text-text">{data.location}</p>
      <ul className="flex gap-4">
        {data.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
