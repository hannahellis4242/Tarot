const main = document.createElement("main");
{
  const header = document.createElement("header") as HTMLHeadingElement;
  header.classList.add("page-title");
  header.textContent = "Tarot Practice";
  main.appendChild(header);
}
{
  const start = document.createElement("span") as HTMLSpanElement;
  start.classList.add("button");
  start.classList.add("centre");
  start.textContent = "Start";
  start.addEventListener("click", (e) => {
    location.href = "/start.html";
  });
  main.appendChild(start);
}
document.body.appendChild(main);
