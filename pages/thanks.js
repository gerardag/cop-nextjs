import Breadcrumb from 'components/atoms/breadcrumb';
import Joke from 'components/molecules/joke';

export default function Thanks({ joke }) {
  document.title = 'Hola';

  return (
    <>
      <div className="container">
        <main>
          <Breadcrumb />
          <section>
            <h2>Gracias</h2>
            <p>
              ¿Alguna preegunta?
            </p>
            {/* Joke */}
            <Joke punchline={joke.value.joke} />
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const req = await fetch('http://api.icndb.com/jokes/random');
  const res = await req.json();

  console.log(res);

  return {
    props: {
      joke: res,
    },
    revalidate: 60,
  };
}
