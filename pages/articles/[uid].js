import Head from "next/head";
import Prismic from "prismic-javascript";
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { Fragment } from "react";
import styles from "./Article.module.css";

import Header from "../components/header/Header";

const Article = ({ data }) => {
  return (
    <Fragment>
      <Head>
        <title>{data.title[0]?.text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <article className={styles.article}>
        <div className={(styles.container, styles.heading)}>
          {data?.title && RichText.render(data.title)}
          {data?.introduction && RichText.render(data.introduction)}
        </div>
        {data.image?.url && (
          <img className={styles.image} src={data.image.url} alt="alt text" />
        )}
        <div className={styles.container}>
          {data?.subtitle && RichText.render(data.subtitle)}

          {data?.content &&
            data.content.map((paragraph, i) => {
              return <p key={i}>{paragraph.text}</p>;
            })}
        </div>
      </article>
    </Fragment>
  );
};

export default Article;

export const getStaticProps = async ({ params }) => {
  const { uid } = params;
  const { data } = await client.getByUID("article", uid);
  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "article")
  );

  const paths = results.map((article) => ({
    params: {
      uid: article.uid,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
