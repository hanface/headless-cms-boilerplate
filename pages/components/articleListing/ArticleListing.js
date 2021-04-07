import Link from "next/link";
import { RichText, Date as PrismicDate } from "prismic-reactjs";
import { format } from "date-fns";
import styles from "./ArticleListing.module.css";

const ArticleListing = ({ date, readTime, title, intro, uid }) => {
  const dateFormat = PrismicDate(date);

  return (
    <article className={styles.article}>
      <div className={styles.dateWrapper}>
        <p className={styles.readTime}>{readTime}</p>
        <time className={styles.date} dateTime={date}>
          {format(dateFormat, "d LLL yyyy")}
        </time>
      </div>
      <div className={styles.articleContent}>
        {RichText.render(title)}
        {RichText.render(intro)}
      </div>
      <Link href="articles/[uid]" as={`/articles/${uid}`}>
        <a className={styles.button}> View</a>
      </Link>
    </article>
  );
};

export default ArticleListing;
