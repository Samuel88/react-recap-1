import { useState } from "react";

export default function Notizia({ titolo, cont, onChangeTitle }) {
  console.log("Render Notizia " + titolo);

  const [inputShow, setInputShow] = useState(false);

  return (
    <div>
      {inputShow ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setInputShow(false);
          }}
        >
          <input
            type="text"
            name="titoloUpdateWrong"
            value={titolo}
            onChange={(event) => onChangeTitle(event.target.value)}
          />
        </form>
      ) : (
        <h3 onClick={() => setInputShow(true)}>{titolo}</h3>
      )}
      <p>{cont}</p>
    </div>
  );
}
