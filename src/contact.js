function makeContact() {
    const container = document.createElement("div");
    container.id = "contact-container";
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p2 = document.createElement("p");

    h1.textContent = "Contact";
    img.src =
      "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    h3.textContent = "Contact our Cool People!";
    p2.textContent = "For any inquiries or reservations, please feel free to contact us at (555)555-1234 or send us an email at contact-us@TheCoolRestaurant.com. Our friendly staff will be happy to assist you and provide any information you may need. Don't hesitate to reach out to us with any questions or concerns you may have. We look forward to hearing from you!"

    container.append(h1);
    container.append(img);
    container.append(h3);
    container.append(p2);

    return container;
  }

  function getContact() {
      const main = document.getElementById("main");
      main.innerHTML = "";
      main.appendChild(makeContact());
  }

  export default getContact;
