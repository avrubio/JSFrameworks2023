import { useState } from "react";

export function LessText({ text = "", maxLength }) {
  const [hideText, setHideText] = useState(false);

  return (
    <div>
      <p>{!hideText ? text.substring(0, maxLength).trim() : text}</p>
      <div>
        <button
          type="button"
          className="btn btn-dark mr-2"
          onClick={() => setHideText(true)}
        >
          Read More
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => setHideText(false)}
        >
          Read Less
        </button>
      </div>
    </div>
  );
}

export function TempConverter({ temp = "" }) {
  const [convert, setConvert] = useState(false);

  return (
    <div>
      <p>{!convert ? (5 / 9) * (temp - 32) + " c" : temp + " f"} </p>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => setConvert(!convert)}
      >
        Convert
      </button>
    </div>
  );
}
