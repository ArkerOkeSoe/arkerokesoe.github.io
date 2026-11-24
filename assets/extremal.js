(() => {
  const graph = document.getElementById("incidence-graph");
  const highlight = document.getElementById("incidence-highlight");
  const previous = document.getElementById("previous-point");
  const next = document.getElementById("next-point");
  const status = document.getElementById("incidence-status");
  const controls = document.getElementById("incidence-controls");
  if (!graph || !highlight || !previous || !next || !status || !controls) return;

  // Positions of the three neighboring line vertices, counted from the left.
  const neighbors = [
    [1, 4, 7], [3, 4, 5], [1, 2, 3], [2, 4, 6],
    [3, 6, 7], [2, 5, 7], [1, 5, 6]
  ];
  const drawing = highlight.getAttribute("href").split("#")[0];
  let selected = 0;

  function selectPoint(index) {
    selected = (index + neighbors.length) % neighbors.length;
    const [a, b, c] = neighbors[selected];
    const label = `Point ${selected + 1} of ${neighbors.length}`;
    highlight.setAttribute("href", `${drawing}#incidence-focus-${selected + 1}`);
    graph.setAttribute("aria-label", `Fano plane incidence graph. ${label} connects to lower vertices ${a}, ${b}, and ${c}, counted from the left.`);
    status.textContent = label;
  }

  previous.addEventListener("click", () => selectPoint(selected - 1));
  next.addEventListener("click", () => selectPoint(selected + 1));
  selectPoint(0);
  controls.hidden = false;
})();
