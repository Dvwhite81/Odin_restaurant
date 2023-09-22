function makeHome() {
  const container = document.createElement("div");
  container.id = "home-container";
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement('p');
  const br = document.createElement('br');

  h1.textContent = "Home";
  img.src =
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
  p1.textContent = "Welcome to The Cool Restaurant!";
  p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies mattis nunc. Donec sed justo vel nulla cursus condimentum at vitae turpis. Morbi ex tellus, vestibulum ac sapien sagittis, molestie ullamcorper nisi. Morbi scelerisque eget velit sit amet volutpat. Maecenas porta magna elit, at interdum mauris congue ut. Donec mollis justo elit, a pretium nibh convallis at. Mauris rutrum fermentum nisi, sed consectetur mauris volutpat vel. Ut pellentesque maximus nibh, eu finibus neque pretium vitae. Sed eleifend commodo turpis id volutpat. Maecenas ac sapien a eros fringilla rhoncus consequat nec velit. Donec ut rutrum lorem. In et elit id purus iaculis fringilla. Mauris consectetur quam vel porttitor vehicula. Sed auctor eros eget ante molestie imperdiet. Ut tristique elit urna, sed tempor felis congue sed."
  p3.textContent = "Proin tincidunt, lorem nec consectetur viverra, sem metus aliquet ligula, ultrices porta mauris diam sollicitudin sem. Suspendisse et odio consectetur, ultrices erat nec, rutrum velit. Ut aliquam lorem massa, et lacinia metus tincidunt sed. Maecenas ut tincidunt orci. Donec eu nunc ligula. Proin bibendum congue ante, id euismod diam tempus et. Nam venenatis tortor risus, in euismod libero blandit eget. Maecenas eu turpis ac magna varius accumsan quis in nulla. Nulla dictum, lectus non fermentum varius, eros urna consequat diam, posuere tincidunt turpis elit id tortor. Vivamus vitae nulla ut justo vulputate condimentum. Integer nec semper metus, ut posuere felis.";

  container.append(h1);
  container.append(img);
  container.append(p1);
  container.append(p2);
  container.append(br);
  container.append(p3);

  return container;
}

function getHome() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(makeHome());
}

export default getHome;
