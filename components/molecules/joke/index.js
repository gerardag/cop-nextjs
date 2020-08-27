const Joke = ({ setup, punchline }) => (
  <>
    <div>
      <h3>Chiste del día</h3>
      <p>
        <strong>{setup}</strong><br />
        {punchline}
      </p>
    </div>
    <style jsx>{`
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1.1rem;
      }
    `}</style>
  </>
);

export default Joke;
