import { App } from "./components/app.js";
import { bindMovies } from "./render/kiir.js";
import { bindNavbar } from "./render/navbar.js";

App();
if (!localStorage.getItem("MyMovies")) {
  localStorage.setItem("MyMovies", JSON.stringify([]));
}
bindNavbar(document);
bindMovies(document);
