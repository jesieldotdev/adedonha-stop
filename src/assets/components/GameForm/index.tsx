import { Button } from "@mui/material";
import { GameFormContainer } from "./style";
import { useState } from "react";
import Roullete from "../Roullete";
import { GameFormViewController } from "./viewController";
import { Link } from "react-router-dom";

const GameForm = () => {
  const {
    handleSpinClick,
    data,
    letters,
    mustSpin,
    prizeNumber,
    selectedLetter,
    setMustSpin,
    alreadySpin,
  } = GameFormViewController();

  return (
    <GameFormContainer>
      <div>
        <p className="title">Gire a roleta para escolher a letra inicial</p>
        <p id="letraEscolhida">{selectedLetter || null}</p>
      </div>
      <Roullete
        letters={data}
        mustSpin={mustSpin}
        prizeNumber={prizeNumber}
        setMustSpin={setMustSpin}
        handleSpinClick={undefined}
      />

      {!mustSpin ? (
        <>
          <p className="letter">{letters[prizeNumber]}</p>
        </>
      ) : null}

      <Button
        disabled={mustSpin}
        style={{
          marginTop: "auto",
          width: 300,
        }}
        variant="contained"
        onClick={() => handleSpinClick()}
      >
        Girar Roleta
      </Button>
      {alreadySpin && !mustSpin ? (
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/game/start"
        >
          <Button
            disabled={mustSpin}
            color="secondary"
            style={{
              marginTop: "auto",
              width: "100px",
            }}
            variant="contained"
            onClick={() => handleSpinClick()}
          >
            Continuar
          </Button>
        </Link>
      ) : null}
    </GameFormContainer>
  );
};

export default GameForm;
