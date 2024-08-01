const accordionList = [
  {
    name: "Ques 1",
    desc: "This is Ques 1 description",
  },
  {
    name: "Ques 2",
    desc: "This is Ques 2 description",
  },
  {
    name: "Ques 3",
    desc: "This is Ques 3 description",
  },
  {
    name: "Ques 4",
    desc: "This is Ques 4 description",
  },
];

const accordionContainer = document.getElementById("accordionContainer");

function createAccordion(index, obj) {
  let accordion = document.createElement("div");
  accordion.id = "accordion" + index;
  accordion.classList.add("accordion");

  let titleDiv = document.createElement("div");
  titleDiv.id = "accordion" + index;
  titleDiv.classList.add("title-container");

  let h3 = document.createElement("h3");
  h3.id = "title" + index;
  h3.textContent = obj.name;

  let button = document.createElement("button");
  button.id = "toggler" + index;
  button.textContent = "Open/Close";

  let descDiv = document.createElement("div");
  descDiv.id = "desc" + index;
  descDiv.textContent = obj.desc;

  button.addEventListener("click", () => {
    const getDescDiv = document.getElementById("desc" + index);
    if (getDescDiv.style.display === "none") {
      getDescDiv.style.display = "block";
    } else {
      getDescDiv.style.display = "none";
    }
  });

  titleDiv.append(h3);
  titleDiv.appendChild(button);

  accordion.appendChild(titleDiv);
  accordion.appendChild(descDiv);

  accordionContainer.appendChild(accordion);
}

accordionList.forEach((acc, index) => {
  createAccordion(index, acc);
});
