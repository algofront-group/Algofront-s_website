import { useInView } from 'react-intersection-observer';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref and a boolean indicating if element is in view.
 */
export function useScrollReveal(threshold = 0.15) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
}
