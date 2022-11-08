import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0);

  //const [valores, setValores] = useState([10, 20, 30, 40]);
  const [valores, setValores] = useState([1, 2, 3]);

  const handleFunction = () => {
    // setNumero(numero + 1);
    setValores([...valores, 1]);
  };

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={handleFunction}>Aperte</button>            
      {valores.map((val) => (
        <h2>{val}</h2>
      ))}

    </div>
  );
};

export default App;
