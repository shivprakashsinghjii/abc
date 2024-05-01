import Link from "next/link"; // Import Link from Next.js

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {" "}
          {/* Use 'href' for Next.js Link */}
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
