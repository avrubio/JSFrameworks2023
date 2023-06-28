import { useState } from "react";

export function CharacterCount() {
  const [char, setChar] = useState(0);
  const charCount = () => setChar(char + 1);

  return (
    <div>
      <h3>Record the amount of words you type!</h3>
      <textarea
        name=""
        id=""
        cols="60"
        rows="2"
        onChange={charCount}
      ></textarea>
      <p>Character Count: {char}</p>
    </div>
  );
}
