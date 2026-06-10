import { vi } from 'vitest';

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
if (typeof global !== 'undefined') {
  global.ResizeObserver = ResizeObserver;
}
if (typeof window !== 'undefined') {
  window.ResizeObserver = ResizeObserver;
}

// Mock fetch
if (typeof global !== 'undefined') {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );
}

// Mock Lottie
vi.mock('lottie-react', () => ({
  __esModule: true,
  default: () => null
}));

vi.mock('lottie-web', () => ({
  __esModule: true,
  default: {
    loadAnimation: vi.fn(),
    setQuality: vi.fn(),
    stop: vi.fn(),
    play: vi.fn(),
    pause: vi.fn(),
    setSpeed: vi.fn(),
    setDirection: vi.fn(),
  }
}));

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
  ToastContainer: () => null,
}));

import '@testing-library/jest-dom';

const mockScrollIntoView = vi.fn();

if (typeof window !== 'undefined' && window.HTMLElement) {
  Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
    configurable: true,
    value: mockScrollIntoView,
  });
}
