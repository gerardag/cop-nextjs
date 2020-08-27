import Breadcrumb from 'components/atoms/breadcrumb';
import Joke from 'components/molecules/joke';

export default function Thanks() {
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
            <Joke setup={joke.setup} punchline={joke.punchline} />
          </section>
        </main>
      </div>
    </>
  );
}
