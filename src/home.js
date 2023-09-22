function makeHome() {
  const container = document.createElement("div");
  container.id = "home-container";
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p2 = document.createElement("p");

  h1.textContent = "Home";
  img.src =
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";
  h3.textContent = "Welcome to The Cool Restaurant!";
  p2.textContent = "We are thrilled to have you join us for a memorable dining experience. Our goal is to provide not only delicious food but also exceptional service in a stylish and welcoming atmosphere. Whether you're celebrating a special occasion or simply looking to enjoy a fantastic meal, we guarantee that you'll leave The Cool Restaurant with a smile on your face and a satisfied stomach. So sit back, relax, and get ready to embark on a culinary journey like no other. Welcome to The Cool Restaurant!"

  container.append(h1);
  container.append(img);
  container.append(h3);
  container.append(p2);

  return container;
}

function getHome() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(makeHome());
}

export default getHome;
