import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useActiveSection } from './useActiveSection'
import { MockIntersectionObserver } from '../test/setup'

function setViewport({
  scrollY,
  innerHeight,
  scrollHeight,
}: {
  scrollY: number
  innerHeight: number
  scrollHeight: number
}) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, configurable: true })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: scrollHeight,
    configurable: true,
  })
}

function mountSections(ids: string[]) {
  for (const id of ids) {
    const el = document.createElement('section')
    el.id = id
    document.body.appendChild(el)
  }
}

function makeEntry(target: Element, isIntersecting: boolean): IntersectionObserverEntry {
  return {
    target,
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    boundingClientRect: {} as DOMRectReadOnly,
    intersectionRect: {} as DOMRectReadOnly,
    rootBounds: null,
    time: 0,
  }
}

describe('useActiveSection', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    MockIntersectionObserver.instances = []
    // default: at the top of a tall page, nowhere near the bottom
    setViewport({ scrollY: 0, innerHeight: 800, scrollHeight: 5000 })
  })

  it('returns the id of the section that enters the center band', () => {
    const ids = ['hero', 'about', 'contact']
    mountSections(ids)

    const { result } = renderHook(() => useActiveSection(ids))

    const observer = MockIntersectionObserver.instances[0]
    const aboutEl = document.getElementById('about')!

    act(() => {
      observer.callback([makeEntry(aboutEl, true)], observer)
    })

    expect(result.current).toBe('about')
  })

  it('keeps the last-known active id when nothing currently intersects (no flicker)', () => {
    const ids = ['hero', 'about', 'contact']
    mountSections(ids)

    const { result } = renderHook(() => useActiveSection(ids))

    const observer = MockIntersectionObserver.instances[0]
    const aboutEl = document.getElementById('about')!
    const heroEl = document.getElementById('hero')!
    const contactEl = document.getElementById('contact')!

    act(() => {
      observer.callback([makeEntry(aboutEl, true)], observer)
    })
    expect(result.current).toBe('about')

    act(() => {
      observer.callback(
        [makeEntry(heroEl, false), makeEntry(aboutEl, false), makeEntry(contactEl, false)],
        observer,
      )
    })

    expect(result.current).toBe('about')
  })

  it('forces the last section id active when scrolled to the bottom of the document', () => {
    const ids = ['hero', 'about', 'contact']
    mountSections(ids)

    setViewport({ scrollY: 4200, innerHeight: 800, scrollHeight: 5000 })

    const { result } = renderHook(() => useActiveSection(ids))

    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('contact')
  })

  it('disconnects the observer on unmount', () => {
    const ids = ['hero', 'about']
    mountSections(ids)

    const { unmount } = renderHook(() => useActiveSection(ids))
    const observer = MockIntersectionObserver.instances[0]

    unmount()

    expect(observer.disconnect).toHaveBeenCalledTimes(1)
  })
})
