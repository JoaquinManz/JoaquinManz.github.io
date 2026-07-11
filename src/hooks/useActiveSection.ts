import { useEffect, useRef, useState } from 'react'

const BOTTOM_GUARD_THRESHOLD_PX = 2

function isAtBottomOfPage(): boolean {
  return (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - BOTTOM_GUARD_THRESHOLD_PX
  )
}

/**
 * Tracks which section id is currently "active" while scrolling, for scroll-spy
 * navigation highlighting.
 *
 * - Uses an IntersectionObserver with a center-band rootMargin so a section is
 *   considered active once it crosses the vertical middle of the viewport.
 * - Keeps the last-known active id when nothing currently intersects, to avoid
 *   flicker between sections.
 * - Forces the last id in `ids` active when the page is scrolled to the bottom,
 *   since short trailing sections (e.g. a footer/contact section) may never
 *   cross the center band on their own.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')
  const activeIdRef = useRef(activeId)
  activeIdRef.current = activeId

  useEffect(() => {
    if (ids.length === 0) return

    const setActive = (id: string) => {
      if (activeIdRef.current !== id) {
        activeIdRef.current = id
        setActiveId(id)
      }
    }

    const checkBottomGuard = () => {
      if (isAtBottomOfPage()) {
        setActive(ids[ids.length - 1])
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.find((entry) => entry.isIntersecting)
        if (intersecting) {
          setActive(intersecting.target.id)
        }
        checkBottomGuard()
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    window.addEventListener('scroll', checkBottomGuard, { passive: true })
    checkBottomGuard()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkBottomGuard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join()])

  return activeId
}
