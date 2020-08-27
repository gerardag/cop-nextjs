const Joke = ({ setup, punchline }) => (
  <>
    <div>
      <p>
        <strong>Chiste random:</strong><br />
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
