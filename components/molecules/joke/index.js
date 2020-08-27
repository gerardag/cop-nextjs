const Joke = ({ setup, punchline }) => (
  <>
    <h3>Chiste del día</h3>
    <p>
      <strong>{setup}</strong><br />
      {punchline}
    </p>
  </>
);

export default Joke;
