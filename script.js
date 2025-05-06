const appcards = document.querySelectorAll(".app-card");
appcards.forEach((card, index) => {
  card.addEventListener("click", () => {
    location.href = szovegek[index].url;
  });
  const app_icon_div = document.createElement("div");
  app_icon_div.classList.add("app-icon");

  const app_icon_img = document.createElement("img");
  app_icon_img.classList.add("app-icon-img");
  app_icon_img.src = `icons/${szovegek[index].icon}`;
  app_icon_img.alt = "ikonok"
  app_icon_div.appendChild(app_icon_img);
  card.appendChild(app_icon_div);

  const app_name = document.createElement("h1");
  app_name.classList.add("app-name");
  app_name.innerHTML = `${szovegek[index].name}`;
  card.appendChild(app_name)

  const app_description = document.createElement("p");
  app_description.classList.add("description");
  app_description.innerHTML = `${szovegek[index].description}`;
  card.appendChild(app_description);
});
