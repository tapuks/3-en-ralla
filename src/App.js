import React, { useContext, useState, useRef, useEffect } from "react";
import "./App.scss"
import { Container, Row, Col, Button } from "react-bootstrap";



function App() {



  const [ficha, setFicha] = useState("white");
  const [turn, setTurn] = useState(undefined);
  const [winner, setWinner] = useState(undefined);
  const [empate, setEmpate] = useState(false);
  const [contadorTurns, setContadorTurns] = useState(0);
  const [classContainer, setClassContainer] = useState("container");

  let refSquare1 = useRef();
  let refSquare2 = useRef();
  let refSquare3 = useRef();
  let refSquare4 = useRef();
  let refSquare5 = useRef();
  let refSquare6 = useRef();
  let refSquare7 = useRef();
  let refSquare8 = useRef();
  let refSquare9 = useRef();

  const ponerFicha = ref => {
    if (turn != undefined) {
      if (turn == "rojas" && ref.current.className == "white") {
        ref.current.className = "red";
        setTurn("amarillas");
        setContadorTurns(contadorTurns + 1);
        console.log("aa", contadorTurns);
      } else if (turn == "amarillas" && ref.current.className == "white") {
        ref.current.className = "yellow";
        setTurn("rojas");
        setContadorTurns(contadorTurns + 1);
        console.log("aa", contadorTurns);
      }

      if (
        (refSquare1.current.className == "red" &&
          refSquare2.current.className == "red" &&
          refSquare3.current.className == "red") ||
        (refSquare4.current.className == "red" &&
          refSquare5.current.className == "red" &&
          refSquare6.current.className == "red") ||
        (refSquare7.current.className == "red" &&
          refSquare8.current.className == "red" &&
          refSquare9.current.className == "red") ||
        (refSquare1.current.className == "red" &&
          refSquare4.current.className == "red" &&
          refSquare7.current.className == "red") ||
        (refSquare2.current.className == "red" &&
          refSquare5.current.className == "red" &&
          refSquare8.current.className == "red") ||
        (refSquare3.current.className == "red" &&
          refSquare6.current.className == "red" &&
          refSquare9.current.className == "red")
      ) {
        setWinner("rojas");
        setTurn(undefined);
        setClassContainer("container animation");
      } else if (
        (refSquare1.current.className == "yellow" &&
          refSquare2.current.className == "yellow" &&
          refSquare3.current.className == "yellow") ||
        (refSquare4.current.className == "yellow" &&
          refSquare5.current.className == "yellow" &&
          refSquare6.current.className == "yellow") ||
        (refSquare7.current.className == "yellow" &&
          refSquare8.current.className == "yellow" &&
          refSquare9.current.className == "yellow") ||
        (refSquare1.current.className == "yellow" &&
          refSquare4.current.className == "yellow" &&
          refSquare7.current.className == "yellow") ||
        (refSquare2.current.className == "yellow" &&
          refSquare5.current.className == "yellow" &&
          refSquare8.current.className == "yellow") ||
        (refSquare3.current.className == "yellow" &&
          refSquare6.current.className == "yellow" &&
          refSquare9.current.className == "yellow")
      ) {
        setWinner("amarillas");
        setTurn(undefined);
        setClassContainer("container animation");
      }
      console.log("contador", contadorTurns);
    }
  };

  const newPlay = () => {
    setWinner(undefined);
    setContadorTurns(0);
    setEmpate(false);
    setClassContainer("container");
    refSquare1.current.className = "white";
    refSquare2.current.className = "white";
    refSquare3.current.className = "white";
    refSquare4.current.className = "white";
    refSquare5.current.className = "white";
    refSquare6.current.className = "white";
    refSquare7.current.className = "white";
    refSquare8.current.className = "white";
    refSquare9.current.className = "white";
    let money = Math.random();
    if (money < 0.5) setTurn("rojas");
    else setTurn("amarillas");
  };

  useEffect(() => { }, [turn]);

  useEffect(
    () => {
      if (contadorTurns == 9) {
        setEmpate(true);
        setTurn(undefined);
      }
    },
    [contadorTurns]
  );

  return (
    <Container className={classContainer}>
      {turn != undefined && (
        <Row className="text-center">
          <h2>Turno de {turn}</h2>
        </Row>
      )}
      {winner != undefined && (
        <Row className="text-center">
          <h2>Ganan {winner}</h2>
        </Row>
      )}
      {empate != false && (
        <Row>
          <h2>Empate</h2>
        </Row>
      )}

      <Row className="d-flex ">
        <Col
          ref={refSquare1}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare1);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare2}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare2);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare3}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare3);
            console.log("rojo");
          }}
        />
      </Row>
      <Row className="d-flex">
        <Col
          ref={refSquare4}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare4);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare5}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare5);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare6}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare6);
            console.log("rojo");
          }}
        />
      </Row>
      <Row className="d-flex">
        <Col
          ref={refSquare7}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare7);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare8}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare8);
            console.log("rojo");
          }}
        />
        <Col
          ref={refSquare9}
          className={ficha}
          onClick={() => {
            ponerFicha(refSquare9);
            console.log("rojo");
          }}
        />
      </Row>
      <Row>
        <Button onClick={() => newPlay()}>Nueva partida</Button>
      </Row>
    </Container>
  );
};

export default App;
