// Bind before first paint; deferred listeners can miss an incoming page transition.
(() => {
  if (!('onpagereveal' in window) || !('onpageswap' in window)) return;
  const reportTransitionFailure = (error) => {
    if (error.name === 'AbortError' || error.name === 'InvalidStateError') {
      console.debug('Optional page animation skipped; standard navigation remains active.');
      return;
    }
    console.error('The optional page animation failed.', error);
  };
  const observeTransition = (event) => {
    if (!event.viewTransition) return;
    const transition = event.viewTransition;
    transition.ready.catch(reportTransitionFailure);
    transition.finished.catch(reportTransitionFailure);
    transition.updateCallbackDone.catch(reportTransitionFailure);
  };
  window.addEventListener('pageswap', observeTransition);
  window.addEventListener('pagereveal', observeTransition);
  const style = document.createElement('style');
  style.textContent = '@view-transition { navigation: auto; } @media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }';
  document.head.append(style);
})();
