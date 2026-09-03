/**
 * Project Management & Interactive Showcase
 * Includes user's live full-stack projects: GravaStar and Odemine Rental Car
 * Features LocalStorage persistence, Add/Edit/Delete Project modals, Live Search & Filtering
 */

const DEFAULT_PROJECTS = [
  {
    id: "proj-gravastar",
    title: "GravaStar — Sci-Fi Gaming Gear E-Commerce Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    summary:
      "Full-stack futuristic e-commerce platform for gaming peripherals with dynamic product catalogs, cart drawer, search overlay, and live cloud deployment.",
    description:
      "Developed and deployed an end-to-end full-stack e-commerce web application inspired by GravaStar gaming gadgets. Features responsive modern UI built with React.js, animated hero banners, category navigation (Keyboards, Mice, Speakers, Bundle Sets), interactive cart drawer with real-time total calculations, search suggestions overlay, and production hosting on Vercel.",
    problem:
      "Create a polished shopping experience for a visually distinctive gaming hardware catalog.",
    role: "Full-stack developer responsible for the interface, product flows, API integration, and deployment.",
    challenges:
      "Balancing an animated visual identity with fast product discovery, responsive layouts, and reliable cart totals.",
    outcome:
      "Delivered a live, responsive storefront with searchable products, category browsing, and a working cart experience.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5 & CSS3",
      "REST API",
      "Full-Stack",
      "E-Commerce",
      "Vercel",
    ],
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://gravastar-frontend-nine.vercel.app/",
    githubUrl: "",
    isCustom: false,
  },
  {
    id: "proj-rental-car",
    title: "Odemine — Premium Vehicle Rental & Booking System",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    summary:
      "Full-stack vehicle rental management platform featuring online booking, active rental tracking, database connectivity, and cloud hosting.",
    description:
      "Engineered a complete vehicle rental management web application from frontend to backend. Implemented interactive vehicle browsing, customer reservation management, active rental status tracking, database integration with PostgreSQL/MySQL, and live cloud hosting on Vercel.",
    problem:
      "Give customers a clear way to browse vehicles and reserve them while keeping rental status organized.",
    role: "Full-stack developer covering the booking interface, backend workflows, database connectivity, and hosting.",
    challenges:
      "Modeling reservation and active-rental states while keeping the booking journey simple on smaller screens.",
    outcome:
      "Shipped a live rental platform with vehicle browsing, reservations, rental tracking, and relational data integration.",
    tags: [
      "React.js",
      "Python",
      "Django",
      "PostgreSQL",
      "MySQL",
      "Full-Stack",
      "Vercel",
    ],
    status: "Featured",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://rental-car-frontend-hazel.vercel.app/",
    githubUrl: "",
    isCustom: false,
  },
  {
    id: "proj-sql-server",
    title: "Advanced Database Systems & SQL Server Analytics Hub",
    category: "backend",
    categoryLabel: "Databases & Management",
    summary:
      "Relational database architecture, stored procedures, and complex query optimization across SQL Server (SSMS/VS Code), PostgreSQL, and MySQL.",
    description:
      "Comprehensive database design and management implementation covering ACID transactions, indexing strategies, complex relational joins, data modeling in PostgreSQL, MySQL, MS Access DBMS, and advanced SQL Server Management Studio (SSMS) workflows with VS Code.",
    problem:
      "Practice designing dependable relational systems that remain understandable as query and reporting needs grow.",
    role: "Database designer and developer focused on schemas, queries, indexing, and transaction behavior.",
    challenges:
      "Comparing SQL dialects and choosing indexes that improve read performance without overcomplicating writes.",
    outcome:
      "Built a reusable body of relational database patterns covering normalization, joins, transactions, and optimization.",
    tags: [
      "SQL Server (SSMS)",
      "PostgreSQL",
      "MySQL",
      "MS Access DBMS",
      "VS Code",
      "Database Modeling",
    ],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "",
    githubUrl: "",
    isCustom: false,
  },
  {
    id: "proj-dsa-cpp",
    title: "Data Structures & Algorithms (DSA) Engine",
    category: "backend",
    categoryLabel: "Core CS & Algorithms",
    summary:
      "High-performance implementations of core data structures, graph traversals, and algorithmic problem-solving in C++ and Python.",
    description:
      "Engineered efficient algorithmic solutions covering Binary Search Trees, Heaps, Hash Maps, Graph Algorithms (Dijkstra, BFS/DFS), Sorting, and Dynamic Programming with optimal Big-O time and space complexity in C++ and Python.",
    problem:
      "Strengthen the algorithmic reasoning needed to design efficient and maintainable software.",
    role: "Developer implementing and evaluating core data structures and algorithms.",
    challenges:
      "Selecting appropriate data structures and validating time and space complexity across different problem shapes.",
    outcome:
      "Created a practical reference set of DSA implementations with explicit complexity considerations.",
    tags: [
      "C++",
      "Python",
      "DSA",
      "Algorithms",
      "Data Structures",
      "Problem Solving",
    ],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    demoUrl: "",
    githubUrl: "",
    isCustom: false,
  },
  {
    id: "proj-laravel-php",
    title: "Laravel & PHP Dynamic Web Portal",
    category: "fullstack",
    categoryLabel: "Full-Stack & MVC",
    summary:
      "Web application built with PHP and the Laravel framework, demonstrating MVC architecture, database migrations, and Eloquent ORM.",
    description:
      "Active exploration and development with PHP and Laravel. Covers MVC application structure, RESTful routing, Blade templating, Eloquent ORM relations, database migrations in MySQL, and authentication workflows.",
    problem:
      "Learn a structured MVC workflow for building maintainable PHP applications backed by relational data.",
    role: "Developer exploring Laravel conventions, server-rendered views, ORM relationships, and authentication.",
    challenges:
      "Translating existing full-stack experience into Laravel routing, migrations, and Eloquent patterns.",
    outcome:
      "Established a working foundation for future Laravel applications and database-backed portals.",
    tags: ["PHP", "Laravel", "MySQL", "MVC", "Blade", "Learning"],
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1599507593499-a3f7f7d9a2cc?auto=format&fit=crop&w=800&q=80",
    demoUrl: "",
    githubUrl: "",
    isCustom: false,
  },
  {
    id: "proj-csharp-net",
    title: "C# / .NET Application & Backend Architecture",
    category: "backend",
    categoryLabel: "Languages & Systems",
    summary:
      "Object-oriented programming, asynchronous tasks, and backend API engineering using C# and the .NET ecosystem in VS Code.",
    description:
      "Hands-on development in C# and .NET exploring strongly-typed object-oriented systems, LINQ data queries, asynchronous controllers, and modern C# developer tooling in VS Code.",
    problem:
      "Build stronger typed-backend fundamentals for services and applications in the .NET ecosystem.",
    role: "Developer studying C# language features, OOP design, LINQ, and asynchronous API patterns.",
    challenges:
      "Applying strong typing and async programming patterns while learning the .NET toolchain.",
    outcome:
      "Expanded backend capability toward production C#/.NET systems and API development.",
    tags: ["C#", ".NET", "OOP", "VS Code", "APIs", "Learning"],
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    demoUrl: "",
    githubUrl: "",
    isCustom: false,
  },
];

const PROJECTS_STORAGE_KEY = "portfolio_user_projects_v2";

let projectsList = [];
let activeCategory = "all";
let searchKeyword = "";
let editingProjectId = null;

// Initialize Projects
function initProjects() {
  const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
  if (saved) {
    try {
      projectsList = JSON.parse(saved);
    } catch (e) {
      console.error("Error loading saved projects, loading defaults:", e);
      projectsList = [...DEFAULT_PROJECTS];
    }
  } else {
    projectsList = [...DEFAULT_PROJECTS];
    saveProjectsToStorage();
  }
}

function saveProjectsToStorage() {
  localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(projectsList));
}

// Render Projects List
function renderProjects() {
  const container = document.getElementById("projects-grid");
  const emptyState = document.getElementById("projects-empty-state");
  if (!container) return;

  const filtered = projectsList.filter((proj) => {
    const matchesCategory =
      activeCategory === "all" || proj.category === activeCategory;
    const query = searchKeyword.toLowerCase().trim();
    if (!query) return matchesCategory;

    const inTitle = proj.title.toLowerCase().includes(query);
    const inSummary = proj.summary.toLowerCase().includes(query);
    const inDesc = (proj.description || "").toLowerCase().includes(query);
    const inTags = proj.tags.some((tag) => tag.toLowerCase().includes(query));
    const inCategory = (proj.categoryLabel || "").toLowerCase().includes(query);

    return (
      matchesCategory &&
      (inTitle || inSummary || inDesc || inTags || inCategory)
    );
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  filtered.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.id = `card-${proj.id}`;

    const tagsHtml = proj.tags
      .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
      .join("");

    const statusBadge = proj.status
      ? `<span class="project-overlay-badge ${proj.status === "Featured" ? "badge-featured" : ""}">${escapeHtml(proj.status)}</span>`
      : "";

    card.innerHTML = `
      <div class="project-card-image">
        <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'">
        ${statusBadge}
      </div>
      <div class="project-card-body">
        <div class="project-category">${escapeHtml(proj.categoryLabel || proj.category)}</div>
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-desc">${escapeHtml(proj.summary)}</p>
        <div class="project-tech-tags">
          ${tagsHtml}
        </div>
        <div class="project-card-footer">
          <div class="project-links">
            <button class="project-link-btn" onclick="openProjectDetails('${proj.id}')" title="View Full Project Details">
              <i class="fa-solid fa-eye"></i> Details
            </button>
            ${proj.demoUrl ? `<a href="${escapeHtml(proj.demoUrl)}" target="_blank" rel="noopener noreferrer" class="project-link-btn btn-demo-link" title="Open Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ""}
            ${proj.githubUrl ? `<a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View GitHub Code"><i class="fa-brands fa-github"></i> Code</a>` : ""}
          </div>
          <div>
            <button class="btn btn-sm btn-outline" onclick="openEditProjectModal('${proj.id}')" title="Edit this project">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-sm btn-outline" style="color: var(--accent-danger); border-color: rgba(239, 68, 68, 0.4);" onclick="deleteProject('${proj.id}')" title="Delete project">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Re-observe scroll elements
  if (window.observeRevealElements) {
    window.observeRevealElements();
  }
}

// Helpers
function escapeHtml(text) {
  if (!text) return "";
  return text
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Open Project Details Modal
window.openProjectDetails = function (projectId) {
  const proj = projectsList.find((p) => p.id === projectId);
  if (!proj) return;

  const modalBackdrop = document.getElementById("project-detail-modal");
  const modalContent = document.getElementById("project-detail-body");
  const modalTitle = document.getElementById("project-detail-title");

  if (!modalBackdrop || !modalContent) return;

  modalTitle.textContent = proj.title;

  const tagsHtml = proj.tags
    .map(
      (tag) =>
        `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">${escapeHtml(tag)}</span>`,
    )
    .join("");

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem; border-radius: var(--radius-md); overflow: hidden; max-height: 320px; background: var(--bg-tertiary);">
      <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
      <span class="section-tag" style="margin-bottom: 0;">${escapeHtml(proj.categoryLabel || proj.category)}</span>
      ${proj.status ? `<span class="skill-level-badge badge-mastered">${escapeHtml(proj.status)}</span>` : ""}
    </div>
    <div class="case-study-grid">
      <div class="case-study-item"><span class="case-study-label">Problem</span><p>${escapeHtml(proj.problem || proj.description || proj.summary)}</p></div>
      <div class="case-study-item"><span class="case-study-label">My Role</span><p>${escapeHtml(proj.role || "Developer and implementation owner.")}</p></div>
      <div class="case-study-item"><span class="case-study-label">Challenges</span><p>${escapeHtml(proj.challenges || "Designing a clear, maintainable implementation.")}</p></div>
      <div class="case-study-item"><span class="case-study-label">Outcome</span><p>${escapeHtml(proj.outcome || "Completed a working technical implementation.")}</p></div>
    </div>
    
    <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--text-heading);">Technologies, Languages & Tools Used</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
      ${tagsHtml}
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
      ${proj.demoUrl ? `<a href="${escapeHtml(proj.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Demo</a>` : ""}
      ${proj.githubUrl ? `<a href="${escapeHtml(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fa-brands fa-github"></i> View GitHub Repository</a>` : ""}
    </div>
  `;

  modalBackdrop.classList.add("active");
};

// Modal Close Handler
window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
};

// Open Add Project Modal
window.openAddProjectModal = function () {
  editingProjectId = null;
  const form = document.getElementById("project-form");
  if (form) form.reset();

  const modalTitle = document.getElementById("project-form-modal-title");
  if (modalTitle) modalTitle.textContent = "Add New Project";

  document.getElementById("form-project-image").value =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

  const modal = document.getElementById("project-form-modal");
  if (modal) modal.classList.add("active");
};

// Open Edit Project Modal
window.openEditProjectModal = function (projectId) {
  const proj = projectsList.find((p) => p.id === projectId);
  if (!proj) return;

  editingProjectId = projectId;
  const modalTitle = document.getElementById("project-form-modal-title");
  if (modalTitle) modalTitle.textContent = "Edit Project";

  document.getElementById("form-project-title").value = proj.title || "";
  document.getElementById("form-project-category").value =
    proj.category || "fullstack";
  document.getElementById("form-project-summary").value = proj.summary || "";
  document.getElementById("form-project-desc").value = proj.description || "";
  document.getElementById("form-project-problem").value = proj.problem || "";
  document.getElementById("form-project-role").value = proj.role || "";
  document.getElementById("form-project-challenges").value =
    proj.challenges || "";
  document.getElementById("form-project-outcome").value = proj.outcome || "";
  document.getElementById("form-project-tags").value = (proj.tags || []).join(
    ", ",
  );
  document.getElementById("form-project-status").value =
    proj.status || "Completed";
  document.getElementById("form-project-demo").value = proj.demoUrl || "";
  document.getElementById("form-project-github").value = proj.githubUrl || "";
  document.getElementById("form-project-image").value = proj.image || "";

  const modal = document.getElementById("project-form-modal");
  if (modal) modal.classList.add("active");
};

// Handle Form Submission for Add / Edit
function handleProjectFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("form-project-title").value.trim();
  const category = document.getElementById("form-project-category").value;
  const summary = document.getElementById("form-project-summary").value.trim();
  const description =
    document.getElementById("form-project-desc").value.trim() || summary;
  const problem = document.getElementById("form-project-problem").value.trim();
  const role = document.getElementById("form-project-role").value.trim();
  const challenges = document
    .getElementById("form-project-challenges")
    .value.trim();
  const outcome = document.getElementById("form-project-outcome").value.trim();
  const rawTags = document.getElementById("form-project-tags").value.trim();
  const status = document.getElementById("form-project-status").value;
  const demoUrl = document.getElementById("form-project-demo").value.trim();
  const githubUrl = document.getElementById("form-project-github").value.trim();
  const image =
    document.getElementById("form-project-image").value.trim() ||
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

  if (!title || !summary) {
    if (window.showToast)
      window.showToast("Please fill in Title and Summary", "error");
    return;
  }

  const tags = rawTags
    ? rawTags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    : ["Full Stack"];

  const categoryLabels = {
    fullstack: "Full-Stack",
    frontend: "Frontend",
    backend: "Backend & APIs",
    cloud: "Cloud & Hosting",
    mobile: "Mobile App",
    ai: "AI & Data",
  };

  if (editingProjectId) {
    const index = projectsList.findIndex((p) => p.id === editingProjectId);
    if (index !== -1) {
      projectsList[index] = {
        ...projectsList[index],
        title,
        category,
        categoryLabel: categoryLabels[category] || category,
        summary,
        description,
        problem,
        role,
        challenges,
        outcome,
        tags,
        status,
        demoUrl,
        githubUrl,
        image,
      };
      if (window.showToast)
        window.showToast(`Updated "${title}" successfully!`, "success");
    }
  } else {
    const newProject = {
      id: "proj-" + Date.now(),
      title,
      category,
      categoryLabel: categoryLabels[category] || category,
      summary,
      description,
      problem,
      role,
      challenges,
      outcome,
      tags,
      status,
      demoUrl,
      githubUrl,
      image,
      isCustom: true,
    };
    projectsList.unshift(newProject);
    if (window.showToast)
      window.showToast(`New project "${title}" added!`, "success");
  }

  saveProjectsToStorage();
  renderProjects();
  closeModal("project-form-modal");
}

// Delete Project
window.deleteProject = function (projectId) {
  const proj = projectsList.find((p) => p.id === projectId);
  if (!proj) return;

  if (confirm(`Are you sure you want to remove the project "${proj.title}"?`)) {
    projectsList = projectsList.filter((p) => p.id !== projectId);
    saveProjectsToStorage();
    renderProjects();
    if (window.showToast) window.showToast(`Project removed.`, "info");
  }
};

// Reset to Default Projects
window.resetProjectsToDefault = function () {
  if (
    confirm(
      "Reset projects list to sample defaults? Any custom added projects will be reset.",
    )
  ) {
    projectsList = [...DEFAULT_PROJECTS];
    saveProjectsToStorage();
    renderProjects();
    if (window.showToast) window.showToast("Reset to default projects", "info");
  }
};

// Export Projects as JSON
window.exportProjectsJSON = function () {
  const jsonStr = JSON.stringify(projectsList, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `my_portfolio_projects_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  if (window.showToast)
    window.showToast("Projects exported as JSON file", "success");
};

// Import Projects from JSON
window.importProjectsJSON = function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported) && imported.length > 0) {
        projectsList = imported;
        saveProjectsToStorage();
        renderProjects();
        if (window.showToast)
          window.showToast(
            `Successfully imported ${imported.length} projects!`,
            "success",
          );
      } else {
        throw new Error("Invalid JSON format");
      }
    } catch (err) {
      if (window.showToast)
        window.showToast(
          "Failed to import JSON file. Please check file format.",
          "error",
        );
    }
  };
  reader.readAsText(file);
};

// Preset Image selection for Add Project
window.selectPresetImage = function (url, el) {
  document.getElementById("form-project-image").value = url;
  document
    .querySelectorAll(".preset-thumb")
    .forEach((thumb) => thumb.classList.remove("selected"));
  if (el) el.classList.add("selected");
};

// Setup Listeners
document.addEventListener("DOMContentLoaded", () => {
  initProjects();
  renderProjects();

  // Project Category Filters
  const filterBtns = document.querySelectorAll(
    ".projects-filter-nav .filter-btn",
  );
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      activeCategory = e.currentTarget.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Project Search Bar
  const searchInput = document.getElementById("project-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value;
      renderProjects();
    });
  }

  // Project Form Submit
  const projectForm = document.getElementById("project-form");
  if (projectForm) {
    projectForm.addEventListener("submit", handleProjectFormSubmit);
  }

  // Close modals on clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".modal-backdrop.active")
        .forEach((m) => m.classList.remove("active"));
    }
  });
});
