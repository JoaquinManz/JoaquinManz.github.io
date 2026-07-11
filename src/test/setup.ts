import '@testing-library/jest-dom'
import { vi } from 'vitest'

export class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = []

  readonly root: Element | Document | null = null
  readonly rootMargin: string = ''
  readonly scrollMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []

  callback: IntersectionObserverCallback
  options?: IntersectionObserverInit
  observedTargets: Element[] = []
  observe = vi.fn((target: Element) => {
    this.observedTargets.push(target)
  })
  unobserve = vi.fn((target: Element) => {
    this.observedTargets = this.observedTargets.filter((t) => t !== target)
  })
  disconnect = vi.fn()
  takeRecords = (): IntersectionObserverEntry[] => []

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    MockIntersectionObserver.instances.push(this)
  }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
