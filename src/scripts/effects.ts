const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
}

function initSpotlight(): void {
  document.querySelectorAll<HTMLElement>(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });
  });
}

function initScrollEffects(): void {
  if (prefersReducedMotion) return;

  const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
  const tiltItems = CSS.supports("animation-timeline: view()")
    ? []
    : Array.from(document.querySelectorAll<HTMLElement>(".hero-tilt"));

  if (parallaxItems.length === 0 && tiltItems.length === 0) return;

  let ticking = false;

  const update = (): void => {
    const viewportHeight = window.innerHeight;

    parallaxItems.forEach((el) => {
      const speed = Number(el.dataset.parallax) || 0;
      const rect = el.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - viewportHeight / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    });

    tiltItems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight * 0.9), 0), 1);
      el.style.setProperty("--tilt", `${(14 * (1 - progress)).toFixed(2)}deg`);
      el.style.setProperty("--tilt-scale", `${(0.96 + 0.04 * progress).toFixed(3)}`);
    });

    ticking = false;
  };

  const onScroll = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function formatCount(value: number, decimals: number): string {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString("es-CR");
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (counters.length === 0) return;

  const render = (el: HTMLElement, value: number): void => {
    const decimals = Number(el.dataset.countDecimals) || 0;
    el.textContent = `${el.dataset.countPrefix ?? ""}${formatCount(value, decimals)}${el.dataset.countSuffix ?? ""}`;
  };

  const animate = (el: HTMLElement): void => {
    const target = Number(el.dataset.countTo) || 0;
    if (prefersReducedMotion) {
      render(el, target);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    const step = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      render(el, target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  counters.forEach((el) => render(el, 0));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );

  counters.forEach((el) => observer.observe(el));
}

initReveal();
initSpotlight();
initScrollEffects();
initCounters();
