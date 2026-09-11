document.querySelectorAll('[data-tabs]').forEach((group) => {
  const controls = group.querySelector('[data-tab-controls]');
  const tabs = [...controls.querySelectorAll('[role="tab"]')];
  const panels = [...group.querySelectorAll('[data-tab-panel]')];
  controls.hidden = false;

  const selectTab = (index, focus = false) => {
    tabs.forEach((tab, tabIndex) => {
      const selected = index === tabIndex;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].hidden = !selected;
    });
    if (focus) tabs[index].focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selectTab(next, true);
      }
    });
  });
});
