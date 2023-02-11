import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess() {
  return (
    <>
      {Range(NUM_OF_GUESSES_ALLOWED).map(() => (
        <div className="guess">
          <span className="cell"></span>
        </div>
      ))}
    </>
  );
}

export default Guess;
