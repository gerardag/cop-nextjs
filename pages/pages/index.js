import Breadcrumb from 'components/atoms/breadcrumb';

export default function Pages() {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>Pages</h2>
            <p>
              Automáticamente cada fichero (componente React) creado dentro de la carpeta `pages` se renderizará como una ruta nueva.
              <code>
                pages/about.js
              </code>
              Podemos tambien hacer rutas de manera dinámica. La sintaxis de la ruta/ficheros seria la siguiente:
              <code>
                <span>pages/[foo].js</span>
                <span>[bar]/[foo].js</span>
              </code>
            </p>
            <p>
              <small><a href="https://next-code-elimination.now.sh/" target="_blank">https://next-code-elimination.now.sh/</a></small>
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
