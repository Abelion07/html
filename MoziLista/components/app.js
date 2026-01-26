import { NavBar } from "./navbar.js";
import { Content } from "./content.js";
export function App() {
  const app = document.createElement("div");
  app.className = "app";

  app.appendChild(NavBar());
  app.appendChild(Content());
  document.body.appendChild(app);
}
