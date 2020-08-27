import Breadcrumb from 'components/atoms/breadcrumb';

export default function Pages() {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>Pre-rendering</h2>
            <p>
              Por defecto se pre-renderiza cada página que hemos creado, y tiene 2 maneras para hacerlo:
              <ul>
                <li><b>Static Generation</b>: la recomendada por ellos y es que cada página se renderiza en el build del proyecto.</li>
                <li><b>Server-side Rendering</b>: se renderiza cada vez que pedimos la página (como la shop).</li>
              </ul>
            </p>
            <p>Las páginas puede contener datos dinámicos o no, en el caso que tengan tenemos 2 formas para hacer el fetch:</p>
            <ul>
              <li>
                <b>`getStaticProps`</b>: este método es el que nos permite recuperar la información y renderizar en tiempo de build.
                <br />
                En el caso que tengamos rutas dinámicas necesitamos acompañarlo de `getStaticPaths` para que sepa que tiene que renderizar para cada una de las rutas.
              </li>
              <li><b>`getServerSideProps`</b>: para cada petición del usuario la página es renderizada. Mucho peor para el rendimineto, por lo que es la opción menos recomendable a no ser que sea estrictamente necesaria.</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
