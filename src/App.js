import "./App.css";
import { useState } from "react";
import Box from "./Components/Box";
const boxData = [
  { id: 0, currentState: 0, boxTouched: false, boxWon: false },
  { id: 1, currentState: 1, boxTouched: false, boxWon: false },
  { id: 2, currentState: 2, boxTouched: false, boxWon: false },
  { id: 3, currentState: 3, boxTouched: false, boxWon: false },
  { id: 4, currentState: 4, boxTouched: false, boxWon: false },
  { id: 5, currentState: 5, boxTouched: false, boxWon: false },
  { id: 6, currentState: 6, boxTouched: false, boxWon: false },
  { id: 7, currentState: 7, boxTouched: false, boxWon: false },
  { id: 8, currentState: 8, boxTouched: false, boxWon: false },
];

function App() {
  const [boxes, setBoxes] = useState(boxData);
  const [currentRound, setCurrentRound] = useState("X");
  const [wonPlayer, setWonPlayer] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  //Actions
  const boxSelectedHandler = (id) => {
    let clickedBox = boxes.find((box) => box.id === id);
    if (clickedBox.boxTouched) return;
    clickedBox.currentState = currentRound;
    clickedBox.boxTouched = true;
    checkWin();
    setBoxes((prevBoxes) => {
      return [...prevBoxes];
    });
    nextRound();
  };

  const checkWin = () => {
    let won = null;
    if (
      boxes[0].currentState === boxes[1].currentState &&
      boxes[1].currentState === boxes[2].currentState
    ) {
      won = [0, 1, 2];
    } else if (
      boxes[0].currentState === boxes[3].currentState &&
      boxes[3].currentState === boxes[6].currentState
    ) {
      won = [0, 3, 6];
    } else if (
      boxes[3].currentState === boxes[4].currentState &&
      boxes[4].currentState === boxes[5].currentState
    ) {
      won = [3, 4, 5];
    } else if (
      boxes[6].currentState === boxes[7].currentState &&
      boxes[7].currentState === boxes[8].currentState
    ) {
      won = [6, 7, 8];
    } else if (
      boxes[1].currentState === boxes[4].currentState &&
      boxes[4].currentState === boxes[7].currentState
    ) {
      won = [1, 4, 7];
    } else if (
      boxes[2].currentState === boxes[5].currentState &&
      boxes[5].currentState === boxes[8].currentState
    ) {
      won = [2, 5, 8];
    } else if (
      boxes[0].currentState === boxes[4].currentState &&
      boxes[4].currentState === boxes[8].currentState
    ) {
      won = [0, 4, 8];
    } else if (
      boxes[2].currentState === boxes[4].currentState &&
      boxes[4].currentState === boxes[6].currentState
    ) {
      won = [2, 4, 6];
    }

    if (won) {
      boxes[won[0]].boxWon = true;
      boxes[won[1]].boxWon = true;
      boxes[won[2]].boxWon = true;
      setGameEnded(true);
      setWonPlayer(boxes[won[0]].currentState);
    }
  };

  const nextRound = () => {
    if (currentRound === "X") setCurrentRound("O");
    else setCurrentRound("X");
  };

  const boxDivs = boxes.map((box) => (
    <Box
      key={box.id}
      boxSelected={boxSelectedHandler}
      disabled={gameEnded}
      box={box}
    />
  ));

  return (
    <div className='App'>
      <h2 className='header'>Tic Tac Toe</h2>
      <main>
        <p className={`winStatment ${gameEnded ? "show" : "hide"} `}>
          {wonPlayer} won
        </p>
        <div className='container'>{boxDivs}</div>
      </main>
    </div>
  );
}

export default App;
