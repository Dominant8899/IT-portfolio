/**
 * Skills & Technologies Catalog
 * Personalized with user's learned stack and active learning technologies
 */

const DEFAULT_SKILLS = [
  // --- Programming Languages ---
  {
    id: 'skill-js',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 95,
    icon: 'fa-brands fa-js',
    iconColor: '#f7df1e',
    description: 'Core web logic, dynamic DOM manipulation, async/await, API integration, and ESNext features used across full-stack applications.'
  },
  {
    id: 'skill-react',
    name: 'React.js',
    category: 'frameworks',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 92,
    icon: 'fa-brands fa-react',
    iconColor: '#61dafb',
    description: 'Component architecture, custom hooks, state management, SPA routing, and interactive UIs (e.g. GravaStar & Rental Car platforms).'
  },
  {
    id: 'skill-python',
    name: 'Python',
    category: 'languages',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 90,
    icon: 'fa-brands fa-python',
    iconColor: '#3776ab',
    description: 'Backend services, scripting, data manipulation, algorithm implementation, and web applications with Django.'
  },
  {
    id: 'skill-django',
    name: 'Django',
    category: 'frameworks',
    level: 'Proficient',
    levelClass: 'badge-proficient',
    percentage: 85,
    icon: 'fa-solid fa-server',
    iconColor: '#092e20',
    description: 'Model-View-Template (MVT) architecture, REST API design, ORM querying, user authentication, and admin portals.'
  },
  {
    id: 'skill-cpp',
    name: 'C++',
    category: 'languages',
    level: 'Proficient',
    levelClass: 'badge-proficient',
    percentage: 86,
    icon: 'fa-solid fa-code',
    iconColor: '#00599c',
    description: 'Object-oriented programming, memory management, pointers, and high-performance Data Structures & Algorithms (DSA).'
  },
  {
    id: 'skill-dsa',
    name: 'Data Structures & Algorithms (DSA)',
    category: 'tools',
    level: 'Proficient',
    levelClass: 'badge-proficient',
    percentage: 88,
    icon: 'fa-solid fa-diagram-project',
    iconColor: '#a855f7',
    description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables, Sorting, Binary Search, and Big-O complexity analysis.'
  },
  {
    id: 'skill-html-css',
    name: 'HTML5 & CSS3',
    category: 'languages',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 96,
    icon: 'fa-brands fa-html5',
    iconColor: '#e34f26',
    description: 'Semantic markup, accessibility, responsive Flexbox/Grid, CSS custom properties, and UI animations.'
  },

  // --- Databases & DBMS ---
  {
    id: 'skill-postgres',
    name: 'PostgreSQL',
    category: 'databases',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 90,
    icon: 'fa-solid fa-database',
    iconColor: '#336791',
    description: 'Relational data modeling, foreign key constraints, indexes, joins, ACID transactions, and full-stack backend integration.'
  },
  {
    id: 'skill-mysql',
    name: 'MySQL',
    category: 'databases',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 90,
    icon: 'fa-solid fa-server',
    iconColor: '#00758f',
    description: 'Database schema design, SQL query optimization, CRUD operations, relationships, and user permissions.'
  },
  {
    id: 'skill-sql-server',
    name: 'SQL Server & SSMS (VS Code)',
    category: 'databases',
    level: 'Learning / Adv',
    levelClass: 'badge-learning',
    percentage: 75,
    icon: 'fa-solid fa-table',
    iconColor: '#cc292b',
    description: 'Currently learning advanced database management, SQL Server Management Studio (SSMS), queries, and VS Code SQL tooling.'
  },
  {
    id: 'skill-ms-access',
    name: 'DBMS with MS Access',
    category: 'databases',
    level: 'Proficient',
    levelClass: 'badge-proficient',
    percentage: 85,
    icon: 'fa-solid fa-table-cells',
    iconColor: '#a4373a',
    description: 'Database creation, table relationships, queries, forms, reports, and foundational relational DBMS concepts.'
  },

  // --- Active Learning (C#, PHP, Laravel) ---
  {
    id: 'skill-csharp',
    name: 'C# (.NET)',
    category: 'languages',
    level: 'Learning',
    levelClass: 'badge-learning',
    percentage: 70,
    icon: 'fa-solid fa-bolt',
    iconColor: '#9b4993',
    description: 'Currently learning C# syntax, object-oriented concepts, strongly-typed backend logic, and .NET tooling in VS Code.'
  },
  {
    id: 'skill-php',
    name: 'PHP',
    category: 'languages',
    level: 'Learning',
    levelClass: 'badge-learning',
    percentage: 72,
    icon: 'fa-brands fa-php',
    iconColor: '#777bb4',
    description: 'Server-side scripting, form handling, dynamic request processing, session management, and MySQL connectivity.'
  },
  {
    id: 'skill-laravel',
    name: 'Laravel Framework',
    category: 'frameworks',
    level: 'Learning',
    levelClass: 'badge-learning',
    percentage: 70,
    icon: 'fa-brands fa-laravel',
    iconColor: '#ff2d20',
    description: 'Currently mastering MVC structure, Eloquent ORM, Blade templating, routing, migrations, and modern PHP web architecture.'
  },

  // --- Tools & Hosting ---
  {
    id: 'skill-fullstack-hosting',
    name: 'Full-Stack Hosting & Vercel',
    category: 'tools',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 92,
    icon: 'fa-solid fa-cloud-arrow-up',
    iconColor: '#000000',
    description: 'Deploying frontend and backend web applications to cloud hosts (Vercel), managing DNS, environment variables, and builds.'
  },
  {
    id: 'skill-git',
    name: 'Git, GitHub & VS Code',
    category: 'tools',
    level: 'Mastered',
    levelClass: 'badge-mastered',
    percentage: 94,
    icon: 'fa-brands fa-github',
    iconColor: '#f05032',
    description: 'Version control, repositories, branching, merge conflict management, and productive developer workflows in VS Code.'
  }
];

const SKILLS_STORAGE_KEY = 'portfolio_custom_skills_v2';

let currentSkills = [];

function getStoredSkills() {
  const custom = localStorage.getItem(SKILLS_STORAGE_KEY);
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SKILLS;
    } catch (e) {
      console.error('Error parsing stored skills:', e);
      return DEFAULT_SKILLS;
    }
  }
  return DEFAULT_SKILLS;
}

function renderSkills(category = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? currentSkills 
    : currentSkills.filter(s => s.category === category);

  container.innerHTML = '';

  filtered.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.innerHTML = `
      <div>
        <div class="skill-card-top">
          <div class="skill-icon-wrap">
            <div class="skill-icon" style="color: ${skill.iconColor};">
              <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
          </div>
          <span class="skill-level-badge ${skill.levelClass}">${skill.level}</span>
        </div>
        <p class="skill-desc">${skill.description}</p>
      </div>
      <div class="skill-progress-bar-wrap">
        <div class="skill-progress-meta">
          <span>Proficiency & Experience</span>
          <span>${skill.percentage}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${skill.percentage}%;"></div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Re-trigger scroll reveal observation
  if (window.observeRevealElements) {
    window.observeRevealElements();
  }
}

function setupSkillFilters() {
  const filterBtns = document.querySelectorAll('.skills-filter-nav .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const category = e.currentTarget.getAttribute('data-filter');
      renderSkills(category);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  currentSkills = getStoredSkills();
  renderSkills('all');
  setupSkillFilters();
});
