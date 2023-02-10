import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [label, setLabel] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newGuess = {
      id: Math.random(),
      word: label,
    };

    console.log(newGuess);
    const nextItem = [...guesses, newGuess];
    setGuesses(nextItem);
    setLabel("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={label}
        maxLength="5"
        minLength="5"
        onChange={(event) => {
          setLabel(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
