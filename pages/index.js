import Head from 'next/head';
import Link from 'next/link';

import Header from 'components/molecules/header';
import Joke from 'components/molecules/joke';

import styles from 'styles/Home.module.css';

export default function Home({ joke }) {
  return (
    <div className="container">
      <Head>
        <title>CoP - Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>CoP NextJS</h1>
        {/* Summary */}
        <nav className={styles.summary}>
          <ol>
            <li><Link href="/jamstack/"><a>JAM stack</a></Link></li>
            <li>¿Que es <Link href="/nextjs/"><a>Next.JS</a></Link>?</li>
            <li><Link href="/pages/"><a>Pages</a></Link></li>
            <li><Link href="/prerendering/"><a>Pre-rendering</a></Link></li>
            <li><Link href="/specs/"><a>Caracteristicas</a></Link></li>
            <li><Link href="/thanks/"><a>Fin</a></Link></li>
          </ol>
        </nav>

        {/* Joke */}
        <Joke setup={joke.setup} punchline={joke.punchline} />
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const req = await fetch('https://official-joke-api.appspot.com/random_joke');
  const res = await req.json();

  return {
    props: {
      joke: res,
    },
    revalidate: 60,
  };
}
