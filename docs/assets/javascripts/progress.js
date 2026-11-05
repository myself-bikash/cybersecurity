(() => {
  "use strict";

  const storageKey = "cybersecurity-course-progress-v1";
  const lessonPathPattern = /\/(phase-\d{2}-[^/]+)\/(\d{2}-[^/]+)\/?$/;
  let completedPaths = new Set();
  let storageAvailable = true;

  function announce(message, state = "info") {
    const node = document.getElementById("course-progress-message");
    if (!node) return;
    node.textContent = message;
    node.dataset.state = state;
  }

  function normalizedPath(path) {
    return path.replace(/\/+$/, "") || "/";
  }

  function loadProgress() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === null) return new Set();
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || parsed.some((path) => typeof path !== "string")) {
        throw new TypeError("Saved course progress has an unexpected format.");
      }
      return new Set(parsed.map(normalizedPath));
    } catch (error) {
      storageAvailable = false;
      console.error("Could not read local course progress.", error);
      announce(
        "Progress storage is unavailable or unreadable in this browser. You can still use the course; this visit's changes may not be saved.",
        "error"
      );
      return new Set();
    }
  }

  function saveProgress() {
    if (!storageAvailable) return false;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify([...completedPaths]));
      return true;
    } catch (error) {
      storageAvailable = false;
      console.error("Could not save local course progress.", error);
      announce(
        "The browser could not save progress. Your course content remains available, but completion changes will not persist.",
        "error"
      );
      return false;
    }
  }

  function courseLessons() {
    const found = new Map();
    document.querySelectorAll(".md-nav--primary .md-nav__link[href]").forEach((link) => {
      const url = new URL(link.href, window.location.href);
      const match = url.pathname.match(lessonPathPattern);
      if (!match) return;
      const path = normalizedPath(url.pathname);
      if (!found.has(path)) {
        found.set(path, {
          path,
          phase: match[1],
          title: link.textContent.trim(),
        });
      }
    });
    return [...found.values()];
  }

  function percent(done, total) {
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  function createProgressBar(value, total, label) {
    const progress = document.createElement("progress");
    progress.max = Math.max(total, 1);
    progress.value = value;
    progress.setAttribute("aria-label", label);
    return progress;
  }

  function renderDashboard(lessons) {
    const dashboard = document.getElementById("course-progress-dashboard");
    if (!dashboard) return;

    dashboard.replaceChildren();
    const doneCount = lessons.filter((lesson) => completedPaths.has(lesson.path)).length;
    const summary = document.createElement("div");
    summary.className = "course-progress-summary";

    const summaryText = document.createElement("strong");
    summaryText.textContent = `${doneCount} of ${lessons.length} lessons marked complete (${percent(doneCount, lessons.length)}%)`;
    summary.append(summaryText, createProgressBar(doneCount, lessons.length, "Overall course progress"));
    dashboard.append(summary);

    const byPhase = new Map();
    lessons.forEach((lesson) => {
      if (!byPhase.has(lesson.phase)) byPhase.set(lesson.phase, []);
      byPhase.get(lesson.phase).push(lesson);
    });

    const phaseList = document.createElement("div");
    phaseList.className = "course-progress-list";
    byPhase.forEach((phaseLessons, phase) => {
      const card = document.createElement("section");
      card.className = "course-phase-progress";
      const done = phaseLessons.filter((lesson) => completedPaths.has(lesson.path)).length;
      const phaseLink = [...document.querySelectorAll(".md-nav--primary .md-nav__link[href]")].find((link) =>
        normalizedPath(new URL(link.href, window.location.href).pathname).endsWith(`/${phase}`)
      );
      const title = document.createElement("a");
      title.href = phaseLink ? phaseLink.href : `${phase}/`;
      title.textContent = phaseLink
        ? phaseLink.textContent.trim()
        : phase.replace(/^phase-/, "Phase ").replaceAll("-", " ");
      const bar = createProgressBar(done, phaseLessons.length, `${phase} lesson progress`);
      const count = document.createElement("small");
      count.textContent = `${done} of ${phaseLessons.length} lessons marked complete`;
      card.append(title, bar, count);
      phaseList.append(card);
    });
    dashboard.append(phaseList);

    if (!storageAvailable) {
      announce(
        "Progress storage is unavailable. You can explore all lessons, but completion changes may not be saved.",
        "error"
      );
    }
  }

  function addLessonControl(lessons) {
    const path = normalizedPath(window.location.pathname);
    if (!lessonPathPattern.test(path)) return;
    const article = document.querySelector(".md-content__inner");
    const heading = article?.querySelector("h1");
    if (!article || !heading) return;

    const panel = document.createElement("div");
    panel.className = "lesson-progress-panel";
    const copy = document.createElement("p");
    copy.className = "lesson-progress-copy";
    const copyTitle = document.createElement("strong");
    copyTitle.textContent = "Your learning record";
    copy.append(
      copyTitle,
      document.createElement("br"),
      document.createTextNode("Mark this lesson after you can explain its key idea or complete its exercise.")
    );
    const button = document.createElement("button");
    button.className = "md-button md-button--primary";
    button.type = "button";
    button.setAttribute("aria-pressed", String(completedPaths.has(path)));

    function updateButton() {
      const isComplete = completedPaths.has(path);
      button.textContent = isComplete ? "Lesson complete ✓" : "Mark this lesson complete";
      button.setAttribute("aria-pressed", String(isComplete));
    }

    updateButton();
    button.addEventListener("click", () => {
      if (completedPaths.has(path)) {
        completedPaths.delete(path);
      } else {
        completedPaths.add(path);
      }
      const saved = saveProgress();
      updateButton();
      renderDashboard(lessons);
      if (saved) {
        announce("Your progress was saved in this browser on this device.");
      }
    });

    panel.append(copy, button);
    heading.insertAdjacentElement("afterend", panel);
  }

  function addResetControl(lessons) {
    const button = document.getElementById("reset-course-progress");
    if (!button) return;
    button.addEventListener("click", () => {
      if (completedPaths.size > 0 && !window.confirm("Clear all course progress saved in this browser on this device?")) {
        return;
      }
      completedPaths.clear();
      const saved = saveProgress();
      renderDashboard(lessons);
      if (saved) announce("Saved course progress was cleared from this browser.");
    });
  }

  function initialize() {
    completedPaths = loadProgress();
    const lessons = courseLessons();
    renderDashboard(lessons);
    addLessonControl(lessons);
    addResetControl(lessons);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
