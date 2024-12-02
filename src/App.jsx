import './App.css'

import { title as initialTitle } from './data/news.js';
import notizie from './data/news.js';
import Notizia from './components/Notizia.jsx';

function App() {
  function clickHandler(index) {
    console.log("Click " + index);
  }

  return (
    <>
      <h1>{initialTitle}</h1>
      <section>
        {notizie.map(({titolo, contenuto}, i) => {
          return <Notizia titolo={titolo} cont={contenuto}
            callback={() => {
              clickHandler(i);
            }}
            key={i} />
        })}
      </section>
    </>
  )
}

export default App
