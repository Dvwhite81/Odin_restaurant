import getHome from "./home";
import getMenu from "./menu";
import getContact from "./contact";

function makeNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('nav-btn');
    homeBtn.addEventListener("click", (e) => {
        setActiveBtn(homeBtn);
        getHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.classList.add('nav-btn');
    menuBtn.addEventListener("click", (e) => {
        setActiveBtn(menuBtn);
        getMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.classList.add('nav-btn');
    contactBtn.addEventListener("click", (e) => {
        setActiveBtn(contactBtn);
        getContact();
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function setActiveBtn(btn) {
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
}

function makeMain() {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
}


function pageSetup() {
  const content = document.getElementById("content");

  content.append(makeNav());
  content.append(makeMain());

  setActiveBtn(document.querySelector('.nav-btn'));
  getHome();
}

export {
    pageSetup
}
