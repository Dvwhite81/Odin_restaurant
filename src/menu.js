function makeMenu() {
    const container = document.createElement("div");
    container.id = "menu-container";
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p2 = document.createElement("p");

    h1.textContent = "Menu";
    img.src =
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg";
    h3.textContent = "Check out our Cool Menu!";
    p2.textContent = "We invite you to check out our extensive menu options. With a wide variety of delicious dishes to choose from, we guarantee there's something for everyone to enjoy. Whether you're craving a juicy steak, a fresh seafood dish, or a vegetarian delight, our menu has it all. From appetizers to desserts, we have carefully curated each item to satisfy your taste buds. So come on in, explore our menu, and get ready for a culinary experience like no other!"

    container.append(h1);
    container.append(img);
    container.append(h3);
    container.append(p2);

    return container;
  }

  function getMenu() {
      const main = document.getElementById("main");
      main.innerHTML = "";
      main.appendChild(makeMenu());
  }

  export default getMenu;
