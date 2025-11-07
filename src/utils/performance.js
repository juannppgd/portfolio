// Performance optimization utilities
export const lazyLoadImage = (target) => {
  if ('loading' in HTMLImageElement.prototype) {
    target.loading = 'lazy';
  }
};

export const optimizeScroll = (callback) => {
  let timeout;
  return () => {
    if (timeout) window.cancelAnimationFrame(timeout);
    timeout = window.requestAnimationFrame(() => {
      callback();
    });
  };
};

export const deferNonCriticalStyles = (stylesheetUrls) => {
  stylesheetUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  });
};

export const prefetchAssets = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};