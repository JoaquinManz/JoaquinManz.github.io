import type { ReactElement } from 'react'

const ICON_PATHS: Record<string, ReactElement> = {
  hero: (
    <path d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h3v-5.5h4V20h3a1 1 0 0 0 1-1v-9" />
  ),
  about: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
    </>
  ),
  skills: (
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 5.5l-3 13" />
  ),
  experience: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
    </>
  ),
  education: (
    <>
      <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11" />
    </>
  ),
  secu: (
    <path d="M12 3.5 14.5 9l6 .8-4.3 4.1 1 6-5.2-2.9-5.2 2.9 1-6-4.3-4.1 6-.8 2.5-5.5Z" />
  ),
  projects: (
    <path d="M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4l1.5 2h8a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 17V7Z" />
  ),
  contact: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
}

/**
 * Decorative section icon for the mobile bottom nav. Purely supplementary —
 * the accessible name lives on the parent link's aria-label/text, so each
 * icon is aria-hidden.
 */
export function NavIcon({ id }: { id: string }) {
  const path = ICON_PATHS[id]

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  )
}
