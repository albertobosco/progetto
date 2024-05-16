import ButtonProva from "./components/ButtonProva";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useReducer, useState } from "react";

function App() {
  let items = ["New York", "Roma", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hai cancellato la selezione
        </Alert>
      )}

      <ButtonProva
        color="danger"
        onClick={() => setAlertVisibility(true)}
        onReset={() => console.log("-1")} /*force update*/
      >
        Cancella Seleziona
      </ButtonProva>
    </div>
  );
}

export default App;
