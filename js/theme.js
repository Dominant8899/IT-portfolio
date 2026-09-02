/**
 * Theme Management (Dark & Light Mode)
 */

(function () {
  const THEME_STORAGE_KEY = 'portfolio_theme';
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark mode for developer portfolio aesthetics
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      } else {
        themeIcon.className = 'fa-solid fa-sun';
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      }
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    if (window.showToast) {
      window.showToast(`Switched to ${nextTheme.toUpperCase()} mode`, 'info');
    }
  }

  // Initial theme load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Setup click listener once DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
  });

  // Expose global for programmatic usage
  window.toggleTheme = toggleTheme;
  window.currentTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';
})();
