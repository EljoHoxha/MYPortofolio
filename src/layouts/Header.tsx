import { Link } from "@tanstack/react-router";

const Header = () => {
  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
  ];
  return (
    <div className="sticky top-0 right-0 z-1 order-1 flex justify-end items-center ">
      <div className="flex gap-7.5 rounded-bl-4xl bg-black-nav-bg px-5 border-black-300 border border-t-0 border-r-0">
        {links.map((link) => {
          return (
            <Link
              to={link.href}
              key={link.label}
              className="text-white-100 text-[15px] font-bold hover:text-gray-300 px-[7px] py-5 data-[status=active]:text-primary-100"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
