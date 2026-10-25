/*
  PERSONALISE THIS FILE
  ---------------------
  1. Add Drive / Notion / portfolio URLs in the `url` fields below.
     Example: url: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
  2. Buttons become real links automatically when a non-empty URL is supplied.
  3. Replace copy or dates whenever you want to update the site.

  Note: QuickVerse is intentionally not published as an internship here because
  the owner previously described that internship as fabricated. If there is
  genuine work worth showcasing, add it as an accurately described project or
  contribution instead of presenting a false employment history.
*/

const timelineItems = [
  {
    date: "Jun 2025 — Present",
    title: "Independent exploration",
    organisation: "Self-directed",
    tag: "Current",
    description: "Since graduating, I've been in a period of self-directed exploration—thinking through the kind of work I want to do and the problems I want to help solve. I'm drawn to product, startups, psychology, and AI/technology-led businesses, and I'm open to high-ownership opportunities across Product, Growth, and Founder’s Office.",
    points: [],
    material: null
  },
  {
    date: "Jul — Oct 2025",
    title: "Product management learning",
    organisation: "NextLeap",
    tag: "Partial coursework",
    description: "Worked through selected modules in product management. The full fellowship and its required assignments/projects were not completed.",
    points: [],
    // Add a link to relevant notes or completed learning materials here (not a certificate).
    material: { label: "View learning materials", url: "" }
  },
  {
    date: "Nov 2021 — Jun 2025",
    title: "B.Tech in Mining Engineering",
    organisation: "IIT Kharagpur",
    tag: "Education",
    description: "Undergraduate study in Mining Engineering, alongside campus leadership, creative production, sports, and case competitions.",
    points: [],
    material: null
  },
  {
    date: "May — Jul 2024",
    title: "Product & Growth Intern",
    organisation: "Togethr · Remote",
    tag: "Experience",
    description: "Worked with co-founders, developers, and a designer on the revamp and launch of an online shopping platform, with work spanning product development and growth.",
    points: [
      "Contributed to product requirements documents for the website and two features, collaborated on Figma mockups, and compiled a dataset of 170+ smartphones and laptops.",
      "Worked on the phone and laptop recommendation experience, including logic intended to match user preferences.",
      "Supported pre-launch go-to-market activity for an LLM-powered personalised shopping assistant; the campaign generated 250+ waitlist sign-ups in two weeks."
    ],
    // Add a Drive / Notion folder with work samples, mockups, PRDs, or other shareable materials.
    material: { label: "View work materials", url: "" }
  },
  {
    date: "Feb — Mar 2024",
    title: "Bajaj Genuine Spare Parts — case study",
    organisation: "General Championship · IIT Kharagpur",
    tag: "Case study",
    description: "Developed a strategic proposal to strengthen Bajaj Genuine Parts' market presence, address counterfeit-product challenges, and foster customer loyalty.",
    points: [
      "Proposed an Educate, Empower, and Equip strategy and a mascot-led campaign to communicate the value of genuine parts.",
      "Outlined a mechanic certification concept intended to build customer trust."
    ],
    // Add the case-study deck, report, or supporting files here.
    material: { label: "View case study", url: "" }
  },
  {
    date: "Jan — Feb 2024",
    title: "Go-to-market strategy for TradeX",
    organisation: "Mind the Product case study · E-Summit ’24, IIT Roorkee",
    tag: "Case study",
    description: "Developed a go-to-market proposal for a prediction-market platform. The team advanced to the final round, among the top eight teams out of 100+ participants, according to the CV.",
    points: [
      "Proposed user-acquisition channels including content, influencer partnerships, communities, and referrals.",
      "Prepared a pitch deck covering target-market analysis, user personas, competitors, KPIs, and technology recommendations."
    ],
    // Add the pitch deck, case write-up, or supporting files here.
    material: { label: "View case study", url: "" }
  },
  {
    date: "During IIT Kharagpur",
    title: "Student leadership & production",
    organisation: "Azad Hall of Residence",
    tag: "Leadership",
    description: "Held student leadership roles spanning short filmmaking, sports, budgets, vendor coordination, and event logistics.",
    points: [
      "As Vice Captain for Short Filmmaking, coordinated crew, cast, props, costumes, and shoot logistics for an Inter-Hall General Championship-winning production.",
      "As Secretary of Sports and Games, administered budgets for weightlifting and table tennis and helped coordinate a training programme for 30+ players."
    ],
    // Optional: add a short film reel, production notes, or public event evidence.
    material: { label: "View selected work", url: "" }
  }
];

const selectedWork = [
  {
    category: "Market strategy · Case study",
    year: "2024",
    title: "Bajaj Genuine Spare Parts",
    description: "A proposal focused on customer trust, counterfeit parts, mechanic engagement, and strengthening the brand's market presence.",
    material: { label: "View case study", url: "" }
  },
  {
    category: "Go-to-market · Case study",
    year: "2024",
    title: "TradeX go-to-market strategy",
    description: "A growth proposal outlining acquisition channels, target users, competitor analysis, KPIs, and product recommendations.",
    material: { label: "View case study", url: "" }
  },
  {
    category: "Product development · Startup",
    year: "2024",
    title: "Togethr shopping experience",
    description: "Work across product requirements, recommendation logic, product-data organisation, mockups, and pre-launch growth activity.",
    material: { label: "View work materials", url: "" }
  },
  {
    category: "Leadership · Production",
    year: "IIT Kharagpur",
    title: "Short filmmaking & campus operations",
    description: "Selected examples of coordinating people, logistics, budgets, suppliers, and production schedules as part of campus activities.",
    material: { label: "View selected work", url: "" }
  }
];

function makeMaterialLink(material) {
  if (!material) return "";
  const label = escapeHTML(material.label || "View materials");
  const url = (material.url || "").trim();
  if (url) {
    // Material URLs are supplied manually by the site owner.
    return `<a class="material-link" href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
  }
  return `<span class="material-placeholder" title="Add the URL in script.js">${label} · link to add</span>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function escapeAttribute(value) {
  // URLs are authored by the owner in script.js; escape attribute-breaking characters.
  return escapeHTML(value);
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  container.innerHTML = timelineItems.map((item) => {
    const points = item.points && item.points.length
      ? `<ul class="timeline-points">${item.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>`
      : "";
    return `
      <article class="timeline-item">
        <div class="timeline-date">${escapeHTML(item.date)}</div>
        <div class="timeline-body">
          <div class="timeline-title-row"><h3 class="timeline-title">${escapeHTML(item.title)}</h3><span class="pill">${escapeHTML(item.tag)}</span></div>
          <div class="timeline-org">${escapeHTML(item.organisation)}</div>
          <p class="timeline-description">${escapeHTML(item.description)}</p>
          ${points}
          ${makeMaterialLink(item.material)}
        </div>
      </article>`;
  }).join("");
}

function renderWork() {
  const container = document.getElementById("work-list");
  container.innerHTML = selectedWork.map((item) => `
    <article class="work-card">
      <div class="work-card-top"><span class="work-category">${escapeHTML(item.category)}</span><span class="work-year">${escapeHTML(item.year)}</span></div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      ${makeMaterialLink(item.material)}
    </article>`).join("");
}

function initialiseTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  // Dark mode is the default. A previously selected theme is remembered on this device.
  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem("kk-theme") || "dark"; } catch (_) { /* storage may be unavailable */ }
  applyTheme(savedTheme === "light" ? "light" : "dark");

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try { localStorage.setItem("kk-theme", nextTheme); } catch (_) { /* theme still changes for this page */ }
  });

  function applyTheme(theme) {
    root.dataset.theme = theme;
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#111210" : "#f7f8f3");
  }
}

function initialiseNav() {
  const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-24% 0px -65% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderWork();
  initialiseTheme();
  initialiseNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
