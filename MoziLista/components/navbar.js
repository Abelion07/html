function elFromHTML(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function NavBar() {
  return elFromHTML(`
        <nav>
        <div class="logo">Mozi<span>Listám</span></div>
        <div class="search-bar">
            <input type="text" placeholder="Film címe vagy URL...">
            <button>Keresés</button>
        </div>
    </nav>
        `);
}
