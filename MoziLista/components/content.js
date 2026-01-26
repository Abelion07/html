function elFromHTML(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function Content() {
  return elFromHTML(`<main>
        <section class="header-flex">
            <h2>Mentett filmjeim</h2>
            <div class="filters">
                <span class="active" data-filter="all">Összes</span>
                <span data-filter="unwatched">Megnézendő</span>
                <span data-filter="watched">Befejezett</span>
            </div>
        </section>

        <div class="movie-grid"></div>
    </main>`);
}
