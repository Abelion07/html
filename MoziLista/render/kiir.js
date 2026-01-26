import { fetchMovie } from "../api/api.js";

export async function bindMovies(root = document) {
  const movieGrid = document.querySelector(".movie-grid");
  const filters = Array.from(document.querySelectorAll(".filters span"));
  let myMovies = JSON.parse(localStorage.getItem("MyMovies")) || [];
  const cache = new Map();

  async function getMovie(title) {
    if (cache.has(title)) {
      return cache.get(title);
    }
    const film = await fetchMovie(title);
    cache.set(title, film);
    return film;
  }

  function setActiveFilter(target) {
    filters.forEach((el) => el.classList.remove("active"));
    target.classList.add("active");
  }

  function filterList(filter) {
    if (filter === "watched") {
      return myMovies.filter((m) => m.watched === 1);
    }
    if (filter === "unwatched") {
      return myMovies.filter((m) => m.watched === 0);
    }
    return myMovies;
  }

  function refreshFromStorage() {
    myMovies = JSON.parse(localStorage.getItem("MyMovies")) || [];
    const active = document.querySelector(".filters span.active");
    const filter = active?.dataset.filter || "all";
    renderList(filterList(filter));
  } 

  async function renderList(list) {
    const films = await Promise.all(
      list.map(async (element) => {
        const film = await getMovie(element.title);
        return { film, element };
      }),
    );
    const fallbackPoster =
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400";
    movieGrid.innerHTML = films
      .map(
        ({ film, element }) => {
          const poster =
            film.Poster && film.Poster !== "N/A"
              ? film.Poster
              : fallbackPoster;
          return `
      <div class="movie-card">
        <div class="poster-container">
          <img src="${poster}" alt="${film.Title}">
          <span class="rating-badge">★ ${film.imdbRating}</span>
        </div>
        <div class="movie-info">
          <h3>${film.Title}</h3>
          <span class="movie-meta">${film.Genre} • ${film.Year}</span>
          <div class="card-actions">
            <button class="${element.watched === 1 ? "green" : "btn-status"}" data-title="${element.title}">Már láttam</button>
            <button class="btn-delete">✕</button>
          </div>
        </div>
      </div>
      `;
        },
      )
      .join("");
  }

  filters.forEach((el) => {
    el.addEventListener("click", () => {
      setActiveFilter(el);
      const filter = el.dataset.filter || "all";
      renderList(filterList(filter));
    });
  });

  movieGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-status, .green");
    if (!button) {
      return;
    }
    const title = button.dataset.title;
    const movie = myMovies.find((m) => m.title === title);
    if (!movie) {
      return;
    }
    movie.watched = movie.watched === 1 ? 0 : 1;
    localStorage.setItem("MyMovies", JSON.stringify(myMovies));
    refreshFromStorage();
  });

  movieGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-delete");
    if (!button) {
      return;
    }
    const card = button.closest(".movie-card");
    const title = card?.querySelector("h3")?.textContent?.trim();
    if (!title) {
      return;
    }
    const next = myMovies.filter(
      (item) => item.title.toLowerCase() !== title.toLowerCase(),
    );
    localStorage.setItem("MyMovies", JSON.stringify(next));
    refreshFromStorage();
  });

  window.addEventListener("movies:updated", refreshFromStorage);

  await renderList(myMovies);
}
