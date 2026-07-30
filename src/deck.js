import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight";
import RevealNotes from "reveal.js/plugin/notes";
import "reveal.js/reveal.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./course.css";

const homeLink = document.createElement("a");
homeLink.className = "deck-home-link";
homeLink.href = "../";
homeLink.textContent = "Hub";
homeLink.setAttribute("aria-label", "Back to course hub");
document.body.append(homeLink);

const deck = new Reveal({
  hash: true,
  history: true,
  margin: 0.055,
  minScale: 0.2,
  maxScale: 1.8,
  controlsTutorial: false,
  progress: true,
  slideNumber: "c/t",
  transition: "slide",
  backgroundTransition: "fade",
  plugins: [RevealHighlight, RevealNotes],
});

deck.initialize();

const previewFrameStyle = `
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #f5f7fb;
      color: #18202f;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main {
      width: min(78vw, 520px);
      padding: 2rem;
      border: 2px solid #172033;
      background: white;
      box-shadow: 12px 12px 0 #efc84a;
    }
    h1 { margin: 0 0 0.8rem; font-size: 2rem; }
    p { font-size: 1.1rem; line-height: 1.55; }
    button {
      border: 0;
      border-radius: 999px;
      background: #1f7a68;
      color: white;
      padding: 0.75rem 1rem;
      font: inherit;
      font-weight: 800;
    }
  </style>
`;

function renderEditor(textarea, iframe) {
  iframe.srcdoc = `${previewFrameStyle}${textarea.value}`;
}

document.querySelectorAll("[data-preview-for]").forEach((iframe) => {
  const textarea = document.getElementById(iframe.dataset.previewFor);
  if (!textarea) return;

  renderEditor(textarea, iframe);
  textarea.addEventListener("input", () => renderEditor(textarea, iframe));
});
