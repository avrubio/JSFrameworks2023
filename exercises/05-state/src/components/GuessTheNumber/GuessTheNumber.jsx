import { useState } from 'react';

export function GuessingTheNumber() {
  const [num, setNum] = useState(""); //set the number inputed
  const [error, setError] = useState(""); //error message

  const [success, setSuccess] = useState(""); //error message

  const sumbit = (e) => {
    e.preventDefault(); //prevent from page refreshing

    if (!num && num < 10 && num < 1) {
      setError("input a number between 1 and 10");
    }

    const computer = Math.floor(Math.random() * 10) + 1;
    if (num > computer) {
      setError(`Too high! The correct number was ${computer}`);
    } else if (num === computer) {
      setSuccess(`You guessed RIGHT!`);
    } else if (num < computer) {
      setError(`Too low! The correct number was ${computer}`);
    }
  };

  return (
    <div>
      <p>Guess my number! I'm thinking of a number between 1 and 10</p>
      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
        min="1"
        max="10"
      />
      <button value={num} onClick={sumbit}>
        Input a number
      </button>
      {error && <p className="text-danger">{error}</p>}{" "}
      {/* Display the error message */}
      {success && <p className="text-success">{success}</p>}{" "}
      {/* Display the success message */}
    </div>
  );
}
