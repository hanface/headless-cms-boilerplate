import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={styles.container}>
      <h1>Nunc scelerisque leo leo</h1>
      <p>
        Curabitur vestibulum, dolor laoreet varius blandit, tellus turpis
        vehicula dui, in dignissim orci neque eget nulla. Vivamus mollis justo
        malesuada, facilisis orci pulvinar, elementum magna. Vivamus lacinia sed
        nisl sit amet sodales. Praesent luctus lobortis arcu hendrerit
        imperdiet. Vestibulum mattis eu nibh eu lacinia. Quisque ut rhoncus
        augue, sit amet fringilla turpis. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Aliquam quis
        vulputate velit, a ultrices massa.
      </p>
    </section>
  );
};

export default Welcome;
