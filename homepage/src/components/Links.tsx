interface Link {
  href: string;
  text: string;
  tag: string;
}
const links: Link[] = [
  { href: "/tarot", text: "Tarot Card Generator", tag: "tarot" },
];
const Links = () => {
  return (
    <section>
      <ul>
        {links.map(({ href, text }, index) => (
          <li key={index}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Links;
