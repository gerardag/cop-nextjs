import Head from 'next/head';

import Breadcrumb from 'components/atoms/breadcrumb';
import Header from 'components/molecules/header';

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
          <Header />
          <section>
            <p>Nextjs es un <u>framework de React</u> creado por <a href="https://vercel.com/" target="_blank">Vercel</a> (antes Zeit) y que nos permite crear un proyecto de manera muy rápida,
            fácil, sin configuración y listo para ser desplegado en producción.</p>
            <p>El gettiing started no puede ser más sencillo</p>
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
