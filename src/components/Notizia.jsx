export default function Notizia({ titolo, cont, callback }) {
  return (
    <div onClick={callback}>
      <h3>{titolo}</h3>
      <p>{cont}</p>
    </div>
  );
}

//export { Notizia };