import styles from "./Header.module.css";
import SocialIcons from "../socialIcons/SocialIcons";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SocialIcons />
      <Nav />
    </header>
  );
};

export default Header;
