const table = document.getElementById("table");
console.log(table);
if (table) {
  table.replaceChildren();
  const cards = new Array(78).fill(0).map((_, i) => {
    const card = document.createElement("div");
    card.id = `card-${i}`;
    card.classList.add("card");
    card.innerText = `Card ${i}`;
    return card;
  });
  table.replaceChildren(...cards);
}
