import Head from "next/head";
import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";
import { Fragment } from "react";

import styles from "../styles/Home.module.css";

import Welcome from "./components/welcome/Welcome";
import Header from "./components/header/Header";
import ArticleListing from "./components/articleListing/ArticleListing";

const Home = ({ articles }) => {
  return (
    <Fragment>
      <Head>
        <title>Colosl White Label</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.welcome}>
          <Welcome />
        </div>
        <section className={styles.articleListing}>
          {articles &&
            articles.results.map((article) => {
              return (
                <ArticleListing
                  key={article.uid}
                  date={article.first_publication_date}
                  title={article.data.title}
                  intro={article.data.introduction}
                  uid={article.uid}
                  readTime={calculateReadingTime(article.data.content)}
                />
              );
            })}
        </section>
      </div>
    </Fragment>
  );
};

export default Home;

const calculateReadingTime = (paragraphs) => {
  const wordsPerMinute = 150;
  let concatParagraphs = "";

  paragraphs.map((paragraph) => {
    concatParagraphs += paragraph.text;
  });

  const noOfWords = concatParagraphs.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} Mins Read`;
};

export const getStaticProps = async () => {
  const articles = await client.query(
    Prismic.Predicates.at("document.type", "article"),
    { orderings: "[my.article.date]" }
  );

  return {
    props: {
      articles,
    },
  };
};
