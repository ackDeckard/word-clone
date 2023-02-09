import React from "react";

function GuessInput() {
  const [label, setLabel] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(label);
    setLabel("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
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
