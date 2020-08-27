import Breadcrumb from 'components/atoms/breadcrumb';

export default function StaticFileServing({ hello }) {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>API Routes</h2>
            <p>
              Nos permite crear una "API" integrada dentro de la aplicación.
            </p>
            <p>Funcion igual que una `page`, cualquier componente creado dentro de la carpeta `pages/api` es mapeado a `/api` y se tratará como si fuese un endpoint normal y corriente.</p>
            <code>
              <span>{'const req = await fetch(\'http://localhost:3000/api/hello/\');'}</span>
              <span>// { hello }</span>
            </code>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const req = await fetch('http://localhost:3000/api/hello/');
  const res = await req.json();

  return {
    props: res,
  };
}
