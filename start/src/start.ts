const main = document.createElement("main");
{
  const test = document.createElement("p") as HTMLParagraphElement;
  test.textContent = "test";
  main.appendChild(test);
}
document.body.appendChild(main);
