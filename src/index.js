import "./styles.css";

const boxSource = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const boxHtml = boxSource.map((id) => `<div class="box" id="${id}"></div>`);

document.getElementById("app").innerHTML = `
<div id="boxContainer">
  ${boxHtml.join("")}
</div>
`;

const boxContainer = document.getElementById("boxContainer");

const memory = [];

const backAnimation = () => {
  let intervalId = setInterval(() => {
    const box = memory.pop();
    box.classList.remove("clicked");

    if (!memory.length) clearInterval(intervalId);
  }, 200);
  return null;
};

boxContainer.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    const target = e.target;
    target.classList.add("clicked");
    memory.push(target);

    if (memory.length === 7) {
      backAnimation();
    }
  }
});
