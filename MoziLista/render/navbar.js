import { searchMovies } from "../api/api.js";

function ensureModal() {
  let backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    return backdrop;
  }
  backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>Valassz filmet</h3>
        <button class="modal-close" aria-label="Bezaras">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-results"></div>
        <div class="modal-empty">Nincs találat.</div>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);
  return backdrop;
}

function openModal(backdrop) {
  backdrop.classList.add("is-open");
}

function closeModal(backdrop) {
  backdrop.classList.remove("is-open");
}

export function bindNavbar(root = document) {
  const input = root.querySelector(".search-bar input");
  const button = root.querySelector(".search-bar button");
  if (!input || !button) {
    return;
  }

  const backdrop = ensureModal();
  const results = backdrop.querySelector(".modal-results");
  const emptyState = backdrop.querySelector(".modal-empty");
  const closeButton = backdrop.querySelector(".modal-close");

  function updateResults(list) {
    if (!results || !emptyState) {
      return;
    }
    if (!list.length) {
      results.innerHTML = "";
      emptyState.style.display = "block";
      return;
    }
    emptyState.style.display = "none";
    const fallbackPoster =
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400";
    results.innerHTML = list
      .map(
        (movie) => {
          const poster =
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : fallbackPoster;
          return `
      <div class="modal-card">
        <img src="${poster}" alt="${movie.Title}">
        <div class="modal-card-info">
          <h4>${movie.Title}</h4>
          <span>${movie.Year}</span>
        </div>
        <button class="modal-add" data-title="${movie.Title}">Hozzaad</button>
      </div>
      `;
        },
      )
      .join("");
  }

  async function runSearch() {
    const title = input.value.trim();
    if (!title) {
      return;
    }
    const list = await searchMovies(title);
    updateResults(list);
    openModal(backdrop);
  }

  function addMovie(title) {
    const list = JSON.parse(localStorage.getItem("MyMovies")) || [];
    const exists = list.some(
      (item) => item.title.toLowerCase() === title.toLowerCase(),
    );
    if (!exists) {
      list.push({ title, watched: 0 });
      localStorage.setItem("MyMovies", JSON.stringify(list));
      window.dispatchEvent(new CustomEvent("movies:updated"));
    }
    input.value = "";
    closeModal(backdrop);
  }

  button.addEventListener("click", runSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runSearch();
    }
  });

  closeButton?.addEventListener("click", () => closeModal(backdrop));
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeModal(backdrop);
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(backdrop);
    }
  });
  results?.addEventListener("click", (event) => {
    const buttonEl = event.target.closest(".modal-add");
    if (!buttonEl) {
      return;
    }
    addMovie(buttonEl.dataset.title);
  });
}
