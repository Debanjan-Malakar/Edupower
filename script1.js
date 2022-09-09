let staffs = {
    data: [
      {
        staffName: "Mr.Roy",
        category: "MATHS",
        status: "Loves to solve mathematical problems",
        image: "boy-avatar-3.png",
      },
      {
        staffName: "Mrs.Sharma",
        category: "BIOLOGY",
        status: "Biology expert",
        image: "pic-1.png",
      },
      {
        staffName: "Mr.Ahmed",
        category: "PHYSICS",
        status: "\"PHYSICS IS MY ARENA\"",
        image: "pic-2.png",
      },
      {
        staffName: "Mr.Narang",
        category: "CHEMISTRY" ,
        status: "\"I am Reactive\"",
        image: "pic-3.png",
      },
      {
        staffName: "Mr.Zebra",
        category: "GATE",
        status: "GATE FACULTY",
        image: "pic-4.png",
      },
      {
        staffName: "Mr. Ghosh",
        category: "GATE",
        status: "There is no overflow of knowledge \n -DSA faculty",
        image: "pic-5.png",
      },
      {
        staffName: "Mr.Singh",
        category: "GATE",
        status: "CO AND CA FACULTY",
        image: "pic-3.png",
      },
      {
        staffName: "Mr.Dey",
        category: "GATE",
        status: "Aptitute Faculty",
        image: "pic-2.png",
      },
      {
        staffName: "Mr.Nobita",
        category: "GATE",
        status: "ENGLISH",
        image: "pic-5.png",
      },
    ],
  };
  
  for (let i of staffs.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("staff-name");
    name.innerText = i.staffName.toUpperCase();
    container.appendChild(name);
    let status = document.createElement("h6");
    status.innerText = i.status;
    container.appendChild(status);
  
    card.appendChild(container);
    document.getElementById("staffs").appendChild(card);
  }
  
  function filterstaff(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".staff-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  window.onload = () => {
    filterstaff("all");
  };
  let popup = document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }