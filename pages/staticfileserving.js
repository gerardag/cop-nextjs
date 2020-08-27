import Breadcrumb from 'components/atoms/breadcrumb';

export default function Specs() {
  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>Static File Serving</h2>
            <p>
              Al ser un proyecto 100% estático, Nextjs nos permite tener ficheros estáticos como imágenes, videos, fuentes, jsons... dentro del mismo proyecto.
            </p>
            <p>Automáticamente todo el contenido dentro de la carpeta `/public` será servido en el path `/`.</p>
            <code>
              <span>{'<img src="/giphy.gif" alt="my image" />'}</span>
            </code>
            <img src="/giphy.gif" />
          </section>
        </main>
      </div>
    </>
  );
}
