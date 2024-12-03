import "./App.css";

import { title as initialTitle } from "./data/news.js";
import notizieInitial from "./data/news.js";
import Notizia from "./components/Notizia.jsx";
import Form from "./components/Form.jsx";
import { useState } from "react";

function App() {
  console.log('Render App');

  const [notizie, setNotizie] = useState(notizieInitial);

  const changeTitleHandler = (indexToChange, titleNew) => {
    setNotizie(notizie.map((notizia, index) => {
      if (index === indexToChange) {
        return {
          ...notizia,
          titolo: titleNew
        };
      } else {
        return notizia;
      }
    }));
  };

  return (
    <>
      <h1>{initialTitle}</h1>
      <section>
        <Form/>
      </section>
      <section>
        {notizie.map(({ titolo, contenuto }, i) => {
          return (
            <Notizia
              titolo={titolo}
              cont={contenuto}
              onChangeTitle={(titleNew) => {
                changeTitleHandler(i, titleNew);
              }}
              key={i}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
