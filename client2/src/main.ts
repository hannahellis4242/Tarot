const start = (images: string[]) => {
  const table = document.getElementById("table");
  if (!table) {
    return;
  }
  table.replaceChildren();
  const cards = new Array(78).fill(0).map((_, i) => {
    const card = document.createElement("div");
    card.id = `card-${i}`;
    card.classList.add("card", "clickable");
    {
      const img = document.createElement("img") as HTMLImageElement;
      img.src = "img/back.jpg";

      card.onclick = () => {
        console.log("clicked");
        img.src = images[i];
        card.classList.remove("clickable");
        card.onclick = () => {};
      };

      card.appendChild(img);
    }
    return card;
  });
  table.replaceChildren(...cards);
};

const contoler = document.getElementById("control");
if (contoler) {
  const button = document.createElement("button") as HTMLButtonElement;
  button.innerText = "start";
  button.onclick = () => {
    button.innerText = "refresh";
    start(["img/img_0.jpg"]);
  };
  contoler.replaceChildren(button);
}
