import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink text={text} href={href} key={text} />
      ))}
    </nav>
  );
};