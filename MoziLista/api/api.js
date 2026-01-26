export function fetchMovie(title) {
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(
    title,
  )}&apikey=949caf55`;
  return fetch(url)
    .then((r) => {
      if (!r.ok) {
        throw new Error(`HTTP ${r.status}`);
      }
      return r.json();
    })
    .then((data) => {
      return data;
    });
}

export function searchMovies(query) {
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
    query,
  )}&type=movie&apikey=949caf55`;
  return fetch(url)
    .then((r) => {
      if (!r.ok) {
        throw new Error(`HTTP ${r.status}`);
      }
      return r.json();
    })
    .then((data) => {
      if (data.Response === "True") {
        return data.Search;
      }
      return [];
    });
}
