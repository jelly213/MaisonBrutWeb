import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP = '(min-width: 1024px)';
const MOBILE = '(max-width: 1023px)';

let lenis: Lenis | null = null;
let context: gsap.Context | null = null;
let lastWidth = window.innerWidth;

/**
 * Smooth scroll, desktop only.
 * Mobile browsers already have momentum scrolling; layering Lenis on top of it
 * produces a floaty, unresponsive feel.
 */
function startLenis() {
  if (lenis || !window.matchMedia(DESKTOP).matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  lenis = new Lenis({ duration: 1.1, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function stopLenis() {
  lenis?.destroy();
  lenis = null;
}

/* ------------------------------------------------------------------ *
 * Line splitting
 * ------------------------------------------------------------------ */

/**
 * Rebuild a heading as one masked span per rendered line, so the lines can
 * rise out from behind their own edge. Splitting has to happen after layout,
 * because where the text breaks is what defines a line.
 */
function splitIntoLines(el: HTMLElement): HTMLElement[] {
  if (el.dataset.lineSplit === 'done') {
    return Array.from(el.querySelectorAll<HTMLElement>('.line > span'));
  }

  if (!el.dataset.originalHtml) el.dataset.originalHtml = el.innerHTML;

  const words = (el.textContent ?? '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  el.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(' ');

  // Group words by the vertical position they landed on.
  const grouped: string[][] = [];
  let lastTop: number | null = null;

  el.querySelectorAll<HTMLElement>('.word').forEach((word) => {
    const top = word.offsetTop;
    if (lastTop === null || Math.abs(top - lastTop) > 2) {
      grouped.push([]);
      lastTop = top;
    }
    grouped[grouped.length - 1].push(word.textContent ?? '');
  });

  el.innerHTML = grouped
    .map((line) => `<span class="line"><span>${line.join(' ')}</span></span>`)
    .join('');

  el.dataset.lineSplit = 'done';
  return Array.from(el.querySelectorAll<HTMLElement>('.line > span'));
}

/** Put split headings back the way they were found. */
function restoreSplits() {
  document.querySelectorAll<HTMLElement>('[data-lines][data-line-split="done"]').forEach((el) => {
    if (el.dataset.originalHtml) el.innerHTML = el.dataset.originalHtml;
    delete el.dataset.lineSplit;
  });
}

/** Headings rise line by line from behind their own baseline. */
function lineReveals() {
  gsap.utils.toArray<HTMLElement>('[data-lines]').forEach((heading) => {
    const lines = splitIntoLines(heading);
    if (lines.length === 0) return;

    gsap.from(lines, {
      yPercent: 108,
      duration: 1.15,
      ease: 'power4.out',
      stagger: 0.09,
      scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
    });
  });
}

/* ------------------------------------------------------------------ *
 * Scroll-driven effects
 * ------------------------------------------------------------------ */

/** Reveal anything tagged with data-reveal as it enters the viewport. */
function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = Number(el.dataset.revealDelay ?? 0);
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/**
 * Images uncover from the bottom edge upward while the picture itself settles
 * out of a slight over-scale — the same gesture as a coat being drawn over a
 * surface, which is what this studio actually does.
 */
function curtains() {
  gsap.utils.toArray<HTMLElement>('[data-curtain]').forEach((frame) => {
    const media = frame.querySelector('img, div');

    const timeline = gsap.timeline({
      scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
    });

    timeline.to(frame, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.4,
      ease: 'power3.inOut',
    });

    if (media) {
      timeline.from(media, { scale: 1.18, duration: 1.6, ease: 'power3.out' }, 0);
    }
  });
}

/** Hero headline: words rise one after another on load. */
function heroWords() {
  const target = document.querySelector<HTMLElement>('[data-split]');
  if (!target) return;

  const words = target.textContent?.trim().split(/\s+/) ?? [];
  target.innerHTML = words
    .map(
      (word) =>
        `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block will-change-transform" data-word>${word}</span></span>`,
    )
    .join(' ');

  gsap.from(target.querySelectorAll('[data-word]'), {
    yPercent: 115,
    duration: 1.2,
    ease: 'power4.out',
    stagger: 0.08,
    delay: 0.15,
  });
}

/** Hero image: slow drift as the visitor scrolls away from it. */
function heroParallax() {
  const image = document.querySelector<HTMLElement>('[data-hero-image]');
  if (!image) return;

  gsap.to(image, {
    yPercent: 12,
    scale: 1.06,
    ease: 'none',
    scrollTrigger: {
      trigger: image.closest('section'),
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * The hero fills the screen, so nothing announces that there is more below.
 * A drawn line answers that, and gets out of the way at the first scroll.
 */
function scrollCue() {
  const cue = document.querySelector<HTMLElement>('[data-scroll-cue]');
  if (!cue) return;

  const line = cue.querySelector('[data-scroll-cue-line]');
  if (line) {
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 1.6, ease: 'power2.inOut', repeat: -1, repeatDelay: 0.2, yoyo: true },
    );
  }

  gsap.to(cue, {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: { trigger: document.body, start: '80px top', toggleActions: 'play none none reverse' },
  });
}

/**
 * Statement text that lights up sentence by sentence.
 * The trigger is the block, not each span — inline spans share a line box, so
 * per-span triggers fire at nearly the same scroll position and the effect is
 * lost. Staggering off one timeline keeps the sequence readable.
 */
function fadeLines() {
  gsap.utils.toArray<HTMLElement>('[data-fade-lines]').forEach((block) => {
    const parts = block.children.length ? block.children : [block];

    gsap.fromTo(
      parts,
      { opacity: 0.3 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.4,
        scrollTrigger: { trigger: block, start: 'top 85%', end: 'top 40%', scrub: true },
      },
    );
  });
}

/**
 * Featured work rail.
 * Desktop: the section pins and the track slides horizontally with the scroll,
 * cards drifting at slightly different rates so the band reads as space rather
 * than a flat strip.
 * Mobile: untouched — the same markup is a native snap carousel.
 */
function workRail() {
  const rail = document.querySelector<HTMLElement>('[data-rail]');
  const track = rail?.querySelector<HTMLElement>('[data-rail-track]');
  if (!rail || !track) return;

  const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 96);
  // The horizontal travel is short compared to the content sliding past, so
  // stretching the pinned scroll distance keeps the slide from whipping by.
  const pinDistance = () => distance() * 1.6;

  const trigger: ScrollTrigger.Vars = {
    trigger: rail,
    start: 'top top',
    end: () => `+=${pinDistance()}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  };

  gsap.to(track, { x: () => -distance(), ease: 'none', scrollTrigger: trigger });

  gsap.utils.toArray<HTMLElement>('[data-rail-card]').forEach((card, index) => {
    const drift = index % 2 === 0 ? 3.5 : -3.5;
    gsap.fromTo(
      card,
      { yPercent: -drift },
      {
        yPercent: drift,
        ease: 'none',
        scrollTrigger: {
          trigger: rail,
          start: 'top top',
          end: () => `+=${pinDistance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}

/**
 * Materials band. It loops on its own, then speeds up and reverses with the
 * scroll — the page feels connected to the hand on the wheel.
 */
function marquee() {
  const track = document.querySelector<HTMLElement>('[data-marquee-track]');
  if (!track) return;

  const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 30, repeat: -1 });
  let settle: number | undefined;

  ScrollTrigger.create({
    onUpdate: (self) => {
      const velocity = self.getVelocity();
      const direction = velocity > 0 ? 1 : -1;
      const boost = gsap.utils.clamp(1, 4, 1 + Math.abs(velocity) / 900);

      gsap.to(loop, { timeScale: direction * boost, duration: 0.3, overwrite: true });

      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        gsap.to(loop, { timeScale: direction, duration: 0.9, overwrite: true });
      }, 180);
    },
  });
}

/** Close-up material shot: widens from the centre while pinned. */
function matterExpand() {
  const block = document.querySelector<HTMLElement>('[data-expand]');
  if (!block) return;

  gsap.fromTo(
    block,
    { width: '62%' },
    {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: block.closest('section'),
        start: 'top 70%',
        end: 'bottom bottom',
        scrub: true,
      },
    },
  );
}

/**
 * The page warms by a couple of degrees through the media-heavy middle, then
 * cools again. Barely nameable while scrolling, plainly felt in a screenshot
 * comparison — which is exactly the right weight for a background.
 */
function pageTint() {
  const anchor = document.querySelector<HTMLElement>('[data-tint]');
  if (!anchor) return;

  gsap
    .timeline({
      scrollTrigger: { trigger: anchor, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    .to(document.body, { backgroundColor: '#ece5d9', ease: 'none' })
    .to(document.body, { backgroundColor: '#f4f1ec', ease: 'none' });
}

/** Process: the connecting line draws itself, steps light up in turn. */
function processSteps() {
  const line = document.querySelector<HTMLElement>('[data-process-line]');
  const steps = gsap.utils.toArray<HTMLElement>('[data-process-step]');
  if (!line || steps.length === 0) return;

  gsap.fromTo(
    line,
    { scaleY: 0 },
    {
      scaleY: 1,
      transformOrigin: 'top center',
      ease: 'none',
      scrollTrigger: {
        trigger: line.parentElement,
        start: 'top 65%',
        end: 'bottom 75%',
        scrub: true,
      },
    },
  );

  steps.forEach((step) => {
    gsap.to(step, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: step, start: 'top 78%', once: true },
    });
  });
}

/**
 * Final CTA: the block deepens from stone to ink as it arrives.
 * It starts mid-tone rather than light so the bone text keeps its contrast
 * through the whole transition.
 */
function finalTilt() {
  const block = document.querySelector<HTMLElement>('[data-final]');
  if (!block) return;

  gsap.fromTo(
    block,
    { backgroundColor: '#7a7168' },
    {
      backgroundColor: '#2b2724',
      ease: 'none',
      scrollTrigger: { trigger: block, start: 'top 90%', end: 'top 35%', scrub: true },
    },
  );
}

/** Primary calls to action lean toward the pointer, then spring back. */
function magnetic() {
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const pull = (event: MouseEvent) => {
      const box = el.getBoundingClientRect();
      const x = event.clientX - (box.left + box.width / 2);
      const y = event.clientY - (box.top + box.height / 2);
      gsap.to(el, { x: x * 0.3, y: y * 0.35, duration: 0.6, ease: 'power3.out' });
    };

    const release = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
    };

    el.addEventListener('mousemove', pull);
    el.addEventListener('mouseleave', release);
  });
}

/* ------------------------------------------------------------------ *
 * Wiring
 * ------------------------------------------------------------------ */

function init() {
  context = gsap.context(() => {
    const mm = gsap.matchMedia();

    // Effects that behave the same at every width.
    lineReveals();
    reveals();
    curtains();
    heroWords();
    scrollCue();
    fadeLines();
    marquee();
    processSteps();
    finalTilt();

    mm.add(DESKTOP, () => {
      startLenis();
      heroParallax();
      workRail();
      matterExpand();
      pageTint();
      magnetic();
      return () => stopLenis();
    });

    mm.add(MOBILE, () => {
      stopLenis();
    });
  });

  ScrollTrigger.refresh();
}

function teardown() {
  stopLenis();
  context?.revert();
  context = null;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  restoreSplits();
}

/** A live context means this page is already wired up. */
function initOnce() {
  if (!context) init();
}

// Line breaks change with the viewport, so the split has to be redone.
let resizeTimer: number | undefined;
window.addEventListener('resize', () => {
  if (Math.abs(window.innerWidth - lastWidth) < 60) return;
  lastWidth = window.innerWidth;
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    teardown();
    init();
  }, 250);
});

document.addEventListener('astro:page-load', initOnce);
document.addEventListener('astro:before-swap', teardown);

// First paint, before the view-transition router takes over.
if (document.readyState !== 'loading') initOnce();
else document.addEventListener('DOMContentLoaded', initOnce);

// Splitting depends on where the text breaks, which depends on the real font.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
