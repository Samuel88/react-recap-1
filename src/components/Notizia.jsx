import { useState } from "react";

export default function Notizia({ titolo, cont, onChangeTitle }) {
  console.log("Render Notizia " + titolo);

  const [inputShow, setInputShow] = useState(false);
  const [titoloUpdate, setTitoloUpdate] = useState(titolo);

  return (
    <div>
      {inputShow ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onChangeTitle(titoloUpdate);
            setInputShow(false);
          }}
        >
          <input
            type="text"
            name="titoloUpdate"
            value={titoloUpdate}
            onChange={(event) => setTitoloUpdate(event.target.value)}
          />
        </form>
      ) : (
        <h3 onClick={() => setInputShow(true)}>{titolo}</h3>
      )}
      <p>{cont}</p>
    </div>
  );
}