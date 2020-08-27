// import Breadcrumb from 'components/atoms/breadcrumb';

import Breadcrumb from 'components/atoms/breadcrumb';

export default function Nextjs() {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h1>JAMStack</h1>
            <p>
              Javscript, API, Markup: no es más que tener un contenido pre-renderizado y servido al cliente de una manera "estática".
              <br />
              Beneficios:
              <ul>
                <li>Seguridad</li>
                <li>Escalabilidad</li>
                <li>Más barata de mantener</li>
                <li>Mejor rendimiento</li>
              </ul>
            </p>
            <p>Players más conocidos: Hugo, Gatsby, Next, Nuxt...</p>
            <p>
              <small>Más información en <a href="https://jamstack.org/">https://jamstack.org/</a></small>
            </p>
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
