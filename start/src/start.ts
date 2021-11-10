const main = document.createElement("main");
{
  const test = document.createElement("p") as HTMLParagraphElement;
  test.textContent = "test";
  main.appendChild(test);
}
{
  const div = document.createElement("div");
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttributeNS(null, "width", "100%");
  svg.setAttributeNS(null, "height", "100%");
  div.appendChild(svg);
  const rect = document.createElementNS(ns, "rect");
  rect.setAttributeNS(null, "width", "100");
  rect.setAttributeNS(null, "height", "100");
  rect.setAttributeNS(null, "fill", "#f06");
  svg.appendChild(rect);
  const img = document.createElementNS(ns, "image");
  img.setAttributeNS(null, "href", "cards/0.jpg");
  img.setAttributeNS(null, "width", "50");
  img.setAttributeNS(null, "transform", "translate(100,5) rotate(90)");
  svg.appendChild(img);
  div.appendChild(svg);
  main.appendChild(div);
}
document.body.appendChild(main);
