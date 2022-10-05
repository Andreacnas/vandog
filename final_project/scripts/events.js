const data = [
  {
    id: "card1",
    name: "Farm, Friends and Family",
    content:
      "FFF is an event held during the summer. Have a great time with your family while meeting our little furry friends. ",
    price: 45,
    date: "Sep-15",
    link: "./services.html",
  },

  {
    id: "card2",
    name: "Puppy Fest",
    content: "You like puppies? So do we, come join us this Nov 10th at High Park",
    price: 55,
    date: "Nov-10",
    link: "./uhoh.html",
  },
];
const event_btn = document.querySelectorAll("#event-btn");

event_btn.forEach((e_btn) => {
  e_btn.addEventListener("click", (btn) => {
    let idElement = btn.target.parentElement.id;
    for (let datas in data) {
      if (idElement == data[datas].id) {
        modalOn(data[datas]);
      }
    }
  });
});

function modalOn({ name, content, price, date, link }) {
  document.getElementById("modal_name").textContent = name;
  document.getElementById("modal_content").textContent = content;
  document.getElementById("modal_price").textContent = `Price/person : CAD.${price}`;
  document.getElementById("modal_date").textContent = `Save the date : ${date}`;
  document.getElementById("modal_link").href = link;
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal-active");
  let modalHeight = document.body.scrollHeight;
  modal.style.height = `${modalHeight}px`;
}

function modalOff() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal-active");
}
