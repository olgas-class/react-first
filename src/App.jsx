function App() {
  const greeting = "classe 135";

  const names = ["Adriano", "Luca", "Sofia", "Filippo", "Olga"];

  // Vogliamo trasformare l'array nemaes in array di elementi jsx dove per ogni nome creo un li corrispondente
  // const namesElems = [<li>Adriano</li>, <li>Luca</li>, <li>Sofia</li>, <li>Filippo</li>, <li>Olga</li>];

  const getListItems = () => {
    // key nelle liste serve a React per migliorare la gestione di aggiornamento del DOM
    return names.map((curName, index) => <li key={index}>{curName}</li>);
  };

  const person = {
    name: "Adriano",
    age: 32,
  };

  const oggetti = [
    { id: 1, nome: "Mela" },
    { id: 2, nome: "Arancia" },
    { id: 3, nome: "Mandarino" },
  ];

  // La funzione che deve ritornare array di elementi jsx creati per ogni elemento dell'array
  const printObjList = () => {
    return oggetti.map((obj) => <li key={obj.id}>{obj.nome}</li>);
  };

  return (
    <>
      <h1 className="title underline">Hello {greeting}</h1>
      <p>Nostri migliori insegnanti:</p>
      <ul>
        {/* {names.map((curName) => (
          <li>{curName}</li>
        ))} */}
        {getListItems()}
      </ul>
      <div>
        {person.name} {person.age} anni
      </div>
      <h2>Lista della spesa</h2>
      <ul>{printObjList()}</ul>
    </>
  );
}

export default App;
