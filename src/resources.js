import "./course.css";

const tabs = [...document.querySelectorAll("[role='tab']")];
const panels = [...document.querySelectorAll("[role='tabpanel']")];

function activatePanel(id, updateHash = false) {
  const panelId = panels.some((panel) => panel.id === id) ? id : "lesson-01";

  for (const tab of tabs) {
    const isActive = tab.getAttribute("aria-controls") === panelId;
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  }

  for (const panel of panels) {
    panel.hidden = panel.id !== panelId;
  }

  if (updateHash) {
    history.pushState(null, "", `#${panelId}`);
  }
}

for (const tab of tabs) {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    activatePanel(tab.getAttribute("aria-controls"), true);
  });

  tab.addEventListener("keydown", (event) => {
    const currentIndex = tabs.indexOf(tab);
    const nextKey = event.key === "ArrowRight" || event.key === "ArrowDown";
    const previousKey = event.key === "ArrowLeft" || event.key === "ArrowUp";

    if (!nextKey && !previousKey) return;

    event.preventDefault();
    const direction = nextKey ? 1 : -1;
    const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    activatePanel(tabs[nextIndex].getAttribute("aria-controls"), true);
  });
}

window.addEventListener("hashchange", () => {
  activatePanel(location.hash.slice(1));
});

activatePanel(location.hash.slice(1));
