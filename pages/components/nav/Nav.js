import { useState, useEffect } from "react";

import styles from "./Nav.module.css";

const Nav = () => {
  const [active, setActive] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  const activeButton = active ? styles.buttonOpen : "";
  const activeMenu = active ? styles.menuOpen : "";

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <nav className={styles.mobileNav}>
      <a className={`${styles.button} ${activeButton}`} onClick={clickHandler}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>

      <ul className={`${styles.menu} ${activeMenu}`}>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
