import styles from "./SocialIcons.module.css";

const SocialIcons = () => {
  return (
    <div className={styles.socialContainer}>
      <a className={styles.icon} href="">
        f
      </a>
      <a className={styles.icon} href="">
        i
      </a>
      <a className={styles.icon} href="">
        t
      </a>
    </div>
  );
};

export default SocialIcons;
