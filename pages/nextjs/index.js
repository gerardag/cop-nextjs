import Head from 'next/head';
import Breadcrumb from 'components/atoms/breadcrumb';

import styles from './index.module.css';

export default function Nextjs() {
  return (
    <>
      <div className="container">
        <Head>
          <title>CoP - Nextjs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Breadcrumb />
          <section>
            <p>Nextjs es un <u>framework de React</u> listo para producción: renderizado hibrido-estático y en servidor.</p>
            <code>
              $ npx create-next-app
            </code>
          </section>
        </main>
      </div>
      <style jsx>{`
        code {
          max-width: 50%;
        }
      `}</style>
    </>
  );
}
