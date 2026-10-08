// @ts-nocheck
/* Mosaic Frontend Interactions, Custom Elements & Site Helpers Runtime */
export function initMosaicRuntime(): void {
  if (typeof window === 'undefined' || (window as any).__mosaicRuntimeInitialized) {
    return;
  }
  (window as any).__mosaicRuntimeInitialized = true;

  class FrameTaskQueue {
    private readQueue: Array<{
      fn: (s?: AbortSignal) => any;
      resolve?: (v: any) => void;
      reject?: (e: any) => void;
      signal?: AbortSignal;
    }> = [];
    private writeQueue: Array<{
      fn: (s?: AbortSignal) => any;
      resolve?: (v: any) => void;
      reject?: (e: any) => void;
      signal?: AbortSignal;
    }> = [];
    private scheduled = false;
    private lastFrameTime = 0;

    constructor() {
      (window as any).FrameTaskQueue = this;
    }

    queueRead(fn: (s?: AbortSignal) => any, { signal }: { signal?: AbortSignal } = {}) {
      if (signal?.aborted) return;
      this.readQueue.push({ fn, signal });
      this.schedule();
    }

    queueWrite(fn: (s?: AbortSignal) => any, { signal }: { signal?: AbortSignal } = {}) {
      if (signal?.aborted) return;
      this.writeQueue.push({ fn, signal });
      this.schedule();
    }

    private schedule() {
      if (this.scheduled) return;
      this.scheduled = true;
      queueMicrotask(() => {
        const flush = () => {
          this.flushQueue(this.readQueue);
          this.flushQueue(this.writeQueue);
          queueMicrotask(() => {
            if (this.readQueue.length || this.writeQueue.length) {
              flush();
            } else {
              this.scheduled = false;
            }
          });
        };
        if (!this.lastFrameTime || performance.now() - this.lastFrameTime > 10) {
          requestAnimationFrame(() => {
            this.lastFrameTime = performance.now();
            flush();
          });
        } else {
          flush();
        }
      });
    }

    private flushQueue(queue: typeof this.readQueue) {
      const items = queue.splice(0);
      for (const { fn, resolve, reject, signal } of items) {
        if (signal?.aborted) continue;
        try {
          const res = fn(signal);
          resolve?.(res);
        } catch (err) {
          reject?.(err);
        }
      }
    }
  }

  const frameQueue = new FrameTaskQueue();

  // Element prototype extensions for Mosaic transforms & interactions
  if (!(HTMLElement.prototype as any).mosaicAddAnimationWrapper) {
    (HTMLElement.prototype as any).mosaicAddAnimationWrapper = (
      SVGElement.prototype as any
    ).mosaicAddAnimationWrapper = function (controller: any) {
      this.animationDisplayControllerInterfaces =
        this.animationDisplayControllerInterfaces || new Set();
      this.animationDisplayControllerInterfaces.add(controller);
      frameQueue.queueWrite(() => {
        this.mosaicUpdateDisplay?.();
      });
      return () => {
        this.animationDisplayControllerInterfaces.delete(controller);
        this.mosaicUpdateDisplay?.();
      };
    };

    (HTMLElement.prototype as any).mosaicUpdateDisplay = (
      SVGElement.prototype as any
    ).mosaicUpdateDisplay = function () {
      if (!this.animationDisplayControllerInterfaces) return;
      let displayVal: string | undefined;
      for (const ctrl of [...this.animationDisplayControllerInterfaces.values()].slice().reverse()) {
        if (ctrl.display !== undefined) {
          displayVal = ctrl.display;
          break;
        }
      }
      if (displayVal !== undefined) {
        if (displayVal !== null) this.style.setProperty('display', displayVal);
      } else {
        this.style.removeProperty('display');
      }
    };
  }

  if (!(Element.prototype as any).addMosaicTranslate) {
    (Element.prototype as any).mosaicTranslateRequestLegacyRender = () => {};
    (Element.prototype as any).addMosaicTranslate = function () {
      frameQueue.queueWrite(() => {
        this.style.setProperty(
          'translate',
          'var(--mosaic-translate-x) var(--mosaic-translate-y) var(--mosaic-translate-z)'
        );
      });
      return () => {
        frameQueue.queueWrite(() => {
          this.style.removeProperty('translate');
        });
      };
    };
  }

  if (!(Element.prototype as any).addMosaicScale) {
    (Element.prototype as any).mosaicScaleRequestLegacyRender = () => {};
    (Element.prototype as any).addMosaicScale = function () {
      frameQueue.queueWrite(() => {
        this.style.setProperty(
          'scale',
          'calc(var(--mosaic-scale) * var(--mosaic-scale-x)) calc(var(--mosaic-scale) * var(--mosaic-scale-y)) var(--mosaic-scale-z)'
        );
      });
      return () => {
        frameQueue.queueWrite(() => {
          this.style.removeProperty('scale');
        });
      };
    };
  }

  // Register custom elements <mosaic-slider>, <mosaic-slider-slide>, and <mosaic-youtube> if not already registered
  if (typeof customElements !== 'undefined') {
    if (!customElements.get('mosaic-slider-slide')) {
      class MosaicSliderSlide extends HTMLElement {}
      customElements.define('mosaic-slider-slide', MosaicSliderSlide);
    }
    if (!customElements.get('mosaic-slider')) {
      class MosaicSlider extends HTMLElement {}
      customElements.define('mosaic-slider', MosaicSlider);
    }
    if (!customElements.get('mosaic-youtube')) {
      class MosaicYoutube extends HTMLElement {}
      customElements.define('mosaic-youtube', MosaicYoutube);
    }
  }

  // Initialize DOM-based helpers (.tm-tab-btn, .tm-latest-card, #gCleanNavWrapper)
  const bindDomHelpers = () => {
    const tabBtns = document.querySelectorAll('.tm-tab-btn');
    const cards = document.querySelectorAll('.tm-latest-card');
    tabBtns.forEach((btn) => {
      if ((btn as any).__tmBound) return;
      (btn as any).__tmBound = true;
      btn.addEventListener('click', function (this: HTMLElement) {
        tabBtns.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        cards.forEach((card) => {
          const isFeatured = card.getAttribute('data-featured') === '1';
          if (filter === 'all' || (filter === 'featured' && isFeatured)) {
            card.classList.remove('hide');
          } else {
            card.classList.add('hide');
          }
        });
      });
    });

    const navWrapper = document.getElementById('gCleanNavWrapper');
    if (navWrapper && !(navWrapper as any).__gCleanBound) {
      (navWrapper as any).__gCleanBound = true;
      const handleScroll = () => {
        const threshold = window.innerHeight * 0.5;
        if (window.scrollY >= threshold) {
          navWrapper.classList.add('is-sticky');
        } else {
          navWrapper.classList.remove('is-sticky');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindDomHelpers);
  } else {
    setTimeout(bindDomHelpers, 0);
  }
}
