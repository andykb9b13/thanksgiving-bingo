import { Button, Col, Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import bingoBackground1 from "../../assets/bingo-background-1.png";
import bingoBackground2 from "../../assets/bingo-background-2.png";
import bingoBackground3 from "../../assets/bingo-background-3.png";

const BingoBoard = () => {
  const [clickedArr, setClickedArr] = useState([]);
  const [winner, setWinner] = useState(false);
  const [randomArr, setRandomArr] = useState(generateShuffledArray());

  const questions = [
    "'What time are we eating?",
    "What time are we eating? (2)",
    "Veiled reference to politics",
    "Non-cook samples turkey",
    "Unsolicited pie baking advice given",
    "'What's for dinner?'",
    "Mom gives kids big snack < 1hr from dinner",
    "Dad offers scotch",
    "Sirius table-surfs",
    "Girls ask for desert early",
    "Self-criticism of cooking",
    "'Should I open a bottle of wine?'",
    "'Does anyone want more wine?'",
    "Dad invites menfolk to seconds",
    "Paula told to stop piano playing",
    "Dad samples everything in kitchen",
    "'Do I have to eat that?'",
    "'Can we watch a movie before 2pm'",
    "Dinner before 3:30pm",
    "Fireworks",
    "Sirius barks in the house",
    "Basil and Sirius in the same room",
    "All 3 Peroutka girls play music together",
    "Spill",
    "Leave by 7:30pm",
  ];

  function generateShuffledArray() {
    const arr = Array.from({ length: 25 }, (_, i) => i); // Create array [1, 2, ..., 25]

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }

    return arr;
  }

  useEffect(() => {
    const randomArr = generateShuffledArray();
    setRandomArr(randomArr);
  }, []);

  const winCons = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
    [1, 7, 13, 19, 25],
    [5, 9, 13, 17, 21],
  ];

  const boxData = [
    {
      id: 1,
      clicked: false,
      data: questions[randomArr[0]],
    },
    {
      id: 2,
      clicked: false,
      data: questions[randomArr[1]],
    },
    {
      id: 3,
      clicked: false,
      data: questions[randomArr[2]],
    },
    {
      id: 4,
      clicked: false,
      data: questions[randomArr[3]],
    },
    {
      id: 5,
      clicked: false,
      data: questions[randomArr[4]],
    },
    {
      id: 6,
      clicked: false,
      data: questions[randomArr[5]],
    },
    {
      id: 7,
      clicked: false,
      data: questions[randomArr[6]],
    },
    {
      id: 8,
      clicked: false,
      data: questions[randomArr[7]],
    },
    {
      id: 9,
      clicked: false,
      data: questions[randomArr[8]],
    },
    {
      id: 10,
      clicked: false,
      data: questions[randomArr[9]],
    },
    {
      id: 11,
      clicked: false,
      data: questions[randomArr[10]],
    },
    {
      id: 12,
      clicked: false,
      data: questions[randomArr[11]],
    },
    {
      id: 13,
      clicked: false,
    },
    {
      id: 14,
      clicked: false,
      data: questions[randomArr[13]],
    },
    {
      id: 15,
      clicked: false,
      data: questions[randomArr[14]],
    },
    {
      id: 16,
      clicked: false,
      data: questions[randomArr[15]],
    },
    {
      id: 17,
      clicked: false,
      data: questions[randomArr[16]],
    },
    {
      id: 18,
      clicked: false,
      data: questions[randomArr[17]],
    },
    {
      id: 19,
      clicked: false,
      data: questions[randomArr[18]],
    },
    {
      id: 20,
      clicked: false,
      data: questions[randomArr[19]],
    },
    {
      id: 21,
      clicked: false,
      data: questions[randomArr[20]],
    },
    {
      id: 22,
      clicked: false,
      data: questions[randomArr[21]],
    },
    {
      id: 23,
      clicked: false,
      data: questions[randomArr[22]],
    },
    {
      id: 24,
      clicked: false,
      data: questions[randomArr[23]],
    },
    {
      id: 25,
      clicked: false,
      data: questions[randomArr[24]],
    },
  ];

  const [boxState, setBoxState] = useState(boxData);

  function checkWinCons(numArr, winCons) {
    return winCons.some((winCon) =>
      winCon.every((num) => numArr.includes(num))
    );
  }

  const handleClickedArr = (boxId) => {
    const foundId = clickedArr.find((id) => id === boxId);
    if (foundId) {
      const filteredArr = clickedArr.filter((id) => id !== foundId);
      setClickedArr([...filteredArr]);
    } else {
      setClickedArr([...clickedArr, boxId]);
    }
  };

  const handleClick = (boxId) => {
    handleClickedArr(boxId);
  };

  useEffect(() => {
    const didWin = checkWinCons(clickedArr, winCons);
    if (didWin) {
      setWinner(true);
    }
    console.log("didWin: ", didWin);
  }, [clickedArr]);

  console.log("clickedArr", clickedArr);

  const getBoxStyle = (id) => {
    if (clickedArr.includes(id)) {
      return {
        backgroundColor: "lightblue",
      };
    } else return {};
  };

  const [backgroundImage, setBackgroundImage] = useState(bingoBackground1);

  const imageChoices = [bingoBackground1, bingoBackground2, bingoBackground3];

  useEffect(() => {
    setInterval(() => {
      const randomNum = Math.floor(Math.random() * 3);
      console.log(randomNum);
      setBackgroundImage(imageChoices[randomNum]);
    }, 10 * 60 * 1000);
  }, []);

  return (
    <Container
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Thanksgiving Bingo!</h1>
      {winner && (
        <>
          <h2>You Won!!!</h2>
          {winner && (
            <Button
              onClick={() => {
                setClickedArr([]);
                setWinner(false);
                setRandomArr(generateShuffledArray());
              }}
            >
              Play Again
            </Button>
          )}
        </>
      )}

      <Container className="bingoBoard">
        <Row>
          {boxState &&
            boxState.map(
              (box, i) =>
                box.id < 6 && (
                  <Col
                    key={i}
                    id={`box${box.id}`}
                    className="bingoSquare"
                    style={getBoxStyle(box.id)}
                    onClick={() => handleClick(box.id)}
                  >
                    <p className="boxData">{box.data}</p>
                  </Col>
                )
            )}
        </Row>
        <Row>
          {boxState &&
            boxState.map(
              (box, i) =>
                box.id > 5 &&
                box.id < 11 && (
                  <Col
                    key={i}
                    id={`box${box.id}`}
                    className="bingoSquare"
                    style={getBoxStyle(box.id)}
                    onClick={() => handleClick(box.id)}
                  >
                    <p className="boxData">{box.data}</p>
                  </Col>
                )
            )}
        </Row>
        <Row>
          {boxState &&
            boxState.map(
              (box, i) =>
                box.id > 10 &&
                box.id < 16 && (
                  <Col
                    key={i}
                    id={`box${box.id}`}
                    className="bingoSquare"
                    style={getBoxStyle(box.id)}
                    onClick={() => handleClick(box.id)}
                  >
                    <p className="boxData">{box.data}</p>
                  </Col>
                )
            )}
        </Row>
        <Row>
          {boxState &&
            boxState.map(
              (box, i) =>
                box.id > 15 &&
                box.id < 21 && (
                  <Col
                    key={i}
                    id={`box${box.id}`}
                    className="bingoSquare"
                    style={getBoxStyle(box.id)}
                    onClick={() => handleClick(box.id)}
                  >
                    <p className="boxData">{box.data}</p>
                  </Col>
                )
            )}
        </Row>
        <Row>
          {boxState &&
            boxState.map(
              (box, i) =>
                box.id > 20 &&
                box.id < 26 && (
                  <Col
                    key={i}
                    id={`box${box.id}`}
                    className="bingoSquare"
                    style={getBoxStyle(box.id)}
                    onClick={() => handleClick(box.id)}
                  >
                    <p className="boxData">{box.data}</p>
                  </Col>
                )
            )}
        </Row>
      </Container>
    </Container>
  );
};

export default BingoBoard;
