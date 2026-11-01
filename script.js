const projects = [
  {
    category: "01 / TECHNICAL DRAFTING",
    title: "Residential Architectural Drafting",
    image: "assets/images/project-residential-drafting.jpg",
    alt: "Residential floor plans from the supplied architectural drawing PDF",
    pdf: "assets/projects/Residential Architectural Drafting.pdf",
    overview: "The supplied three-page drawing set is for a proposed two-storey residence with a roof deck. It presents coordinated floor-plan sheets and architectural views.",
    objective: "Present the residential layout and roof plan together as a readable, dimensioned drawing set.",
    scope: ["Ground-floor plan", "Second-floor plan", "Roof floor plan", "Room labels, dimensions, and drawing-sheet information"],
    tools: "The attached PDF drawing set. Editable CAD source files were not included.",
    workflow: "Review the supplied sheets for floor-to-floor coordination, dimensions, room labels, and clear sheet organization.",
    deliverables: ["Three-page residential drawing PDF", "Ground- and second-floor plans", "Roof plan", "Dimensioned architectural views"],
  },
  {
    category: "02 / STRUCTURAL DETAILING",
    title: "Structural & Reinforcement Detailing",
    image: "assets/images/project-structural-reinforcement.jpg",
    alt: "Transformer vault framing plan and section from the supplied structural drawing PDF",
    pdf: "assets/projects/Structural & Reinforcement Detailing.pdf",
    overview: "The supplied two-page structural drawing set covers a transformer vault room framing plan and section for a proposed 30-storey building.",
    objective: "Present the transformer-vault framing layout, structural references, dimensions, and section information in coordinated drawing sheets.",
    scope: ["Transformer vault room framing plan", "Grid and location references", "Structural framing dimensions and callouts", "Transformer room section"],
    tools: "The attached PDF drawing set. Editable CAD source files were not included.",
    workflow: "Review the framing plan and section together, check grid references and dimensions, and coordinate the drawing annotations with the governing structural documents.",
    deliverables: ["Two-page structural drawing PDF", "Transformer vault room framing plan", "Transformer room section", "Structural dimensions and callouts"],
  },
  {
    category: "03 / CONSTRUCTION ESTIMATING",
    title: "Quantity Takeoff & BOQ",
    image: "assets/images/project-quantity-takeoff-boq.jpg",
    alt: "Bill of quantities from the supplied quantity takeoff PDF",
    pdf: "assets/projects/Quantity Takeoff & BOQ.pdf",
    overview: "The supplied six-page BOQ covers a proposed five-storey commercial building and organizes work items with quantities and associated material and labor costs.",
    objective: "Organize measured work items and associated cost information in a structured bill of quantities.",
    scope: ["General requirements", "Earthworks and civil works", "Bore piling and structural works", "Architectural items and cost summary"],
    tools: "The attached PDF BOQ. Editable spreadsheet source was not included.",
    workflow: "Review work-item descriptions, units and quantities, trace cost columns and subtotals, and verify figures against current drawings and specifications before reuse.",
    deliverables: ["Six-page BOQ PDF", "Trade and work-item breakdown", "Quantity and unit-cost schedules", "Summary of area and project costs"],
  },
  {
    category: "04 / MATERIAL SCHEDULES",
    title: "Rebar & Structural Steel Cutting List",
    image: "assets/images/project-rebar-steel-details.jpg",
    alt: "Beam reinforcement drawings from the supplied structural details PDF",
    pdf: "assets/projects/rebar-structural-steel-cutting-list.pdf",
    overview: "The supplied seven-page structural drawing PDF contains beam reinforcement details with member marks, dimensions, grid or location references, and reinforcement callouts.",
    objective: "Communicate beam reinforcement information through coordinated labeled details and schedules.",
    scope: ["Beam marks and member locations", "Dimensions and span references", "Longitudinal reinforcement callouts", "Stirrup and reinforcement annotations"],
    tools: "The attached PDF drawing set. Editable CAD or schedule source files were not included.",
    workflow: "Review member identifiers, dimensions, locations, and reinforcement notes against the governing structural documents before using any detail.",
    deliverables: ["Seven-page beam detail PDF", "Labeled beam reinforcement drawings", "Member and location references", "Reinforcement annotations"],
  },
  {
    category: "05 / PROJECT REPORTING",
    title: "Construction Progress Reporting",
    image: "assets/images/project-progress-report.jpg",
    alt: "Cover of the supplied weekly construction progress report",
    pdf: "assets/projects/Construction Progress Reporting.pdf",
    overview: "The supplied 22-page document is a weekly progress report for a proposed commercial building covering November 19–25, 2021.",
    objective: "Provide a dated weekly record of project progress in a structured report.",
    scope: ["Weekly reporting period and project identification", "Progress information arranged in report tables", "Submitted and received fields on the cover sheet"],
    tools: "The attached PDF report. Editable report source files were not included.",
    workflow: "Review the reporting period, project references, tables, and cover-sheet details; confirm all project data with the responsible team before redistribution.",
    deliverables: ["22-page weekly progress report PDF", "Cover sheet with project and period information", "Tabulated progress records"],
  },
  {
    category: "06 / PROJECT MONITORING & SCHEDULING",
    title: "Project Monitoring & Scheduling",
    image: "assets/images/project-monitoring-scheduling.jpg",
    alt: "Five-storey building work schedule and timeline from the supplied project scheduling PDF",
    pdf: "assets/projects/Project Scheduling.pdf",
    overview: "The supplied one-page schedule is for a five-storey building. It pairs a work-activity table with a timeline/Gantt-style chart and colored schedule bars.",
    objective: "Show project activities and their scheduled time ranges together in a single-page monitoring view.",
    scope: ["Building work-activity schedule", "Timeline/Gantt-style chart", "Colored schedule bars and legend", "Single-sheet project schedule layout"],
    tools: "The attached PDF schedule. Editable spreadsheet source was not included.",
    workflow: "Review work items, time ranges, chart bars, and schedule legend; confirm the latest dates and progress status with the project team before reuse.",
    deliverables: ["One-page project scheduling PDF", "Work-activity table", "Gantt-style schedule chart", "Schedule legend"],
  },
];

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#project-dialog-content");
const dialogClose = document.querySelector(".dialog-close");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
    navMenu.classList.toggle("is-open", !expanded);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      navMenu.classList.remove("is-open");
    }
  });
}

function renderProject(project) {
  const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
  return `
    <div class="dialog-hero">
      <img src="${project.image}" alt="${project.alt}">
      <span class="dialog-status ${project.pdf ? "dialog-status-file" : ""}">${project.pdf ? "USER-PROVIDED PROJECT PDF" : "DEMONSTRATION PROJECT · NOT CLIENT WORK"}</span>
    </div>
    <div class="dialog-body">
      <p class="eyebrow"><span class="eyebrow-line"></span> ${project.category}</p>
      <h2 id="dialog-title">${project.title}</h2>
      <p class="dialog-summary">${project.overview}</p>
      <div class="dialog-columns">
        <section><h3>Project overview &amp; objective</h3><p>${project.objective}</p></section>
        <section><h3>Scope of work</h3><ul>${list(project.scope)}</ul></section>
        <section><h3>Tools used</h3><p>${project.tools}</p></section>
        <section><h3>Workflow</h3><p>${project.workflow}</p></section>
        <section><h3>Deliverables</h3><ul>${list(project.deliverables)}</ul></section>
      </div>
      ${project.pdf ? `<a class="button button-navy project-document-link" href="${project.pdf}" target="_blank" rel="noopener noreferrer">Open supplied project PDF <span aria-hidden="true">↗</span></a>` : ""}
      <p class="dialog-footnote">${project.pdf ? "The linked PDF is included as supplied and may contain project identifiers. Its inclusion does not independently establish authorship or responsibility for the work shown." : "This sample is a demonstration project and not client work."}</p>
    </div>`;
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[Number(card.getAttribute("data-project"))];
    if (!project || !projectDialog || !dialogContent) {
      return;
    }
    dialogContent.innerHTML = renderProject(project);
    projectDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function closeProjectDialog() {
  if (projectDialog?.open) {
    projectDialog.close();
  }
}

dialogClose?.addEventListener("click", closeProjectDialog);
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    closeProjectDialog();
  }
});
projectDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const contactEmail = "belilamark31@gmail.com";

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(contactForm instanceof HTMLFormElement) || !formStatus) {
    return;
  }

  const formData = new FormData(contactForm);
  const subject = `Construction support inquiry - ${formData.get("service")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Company: ${formData.get("company") || "Not provided"}`,
    `Service required: ${formData.get("service")}`,
    "",
    "Project details:",
    formData.get("details"),
  ].join("\n");
  formStatus.textContent = "Your default email app should open with the inquiry prepared. The website does not send or store messages.";
  formStatus.setAttribute("role", "status");
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const copyrightYear = document.querySelector("#copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = String(new Date().getFullYear());
}
