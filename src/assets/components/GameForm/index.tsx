import { Button } from "@mui/material";
import { GameFormContainer } from "./style";
import { useState } from "react";
import Roullete from "../Roullete";
import { GameFormViewController } from "./viewController";
import { Link } from "react-router-dom";
import { GridContainer } from "./style";
import Lottie from "lottie-react";
import Question from '../../images/question.json'
import MusicPlayer from "../MusicPlayer";

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
    isPlaying,
    setIsPlaying,
    togglePlay,
    audioRef
  } = GameFormViewController();

  return (
    <GameFormContainer>
      <div>
        <p className="title">Gire a roleta para escolher a letra inicial</p>
        <p id="letraEscolhida">{selectedLetter || null}</p>

        <Lottie className="lottie" animationData={Question} />
      </div>

      <div style={{
        // backgroundColor:'red'
      }}>
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

        <MusicPlayer isPlaying={mustSpin} setIsPlaying={setIsPlaying} togglePlay={() => togglePlay()} audioRef={audioRef}  />

        <GridContainer>
          <Button
            disabled={mustSpin}
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
              to={`/game/start/${letters[prizeNumber]}`}
            >
              <Button
                disabled={mustSpin}
                color="secondary"
                variant="contained"
                onClick={() => handleSpinClick()}
              >
                Continuar
              </Button>
            </Link>
          ) : null}
        </GridContainer>
      </div>
    </GameFormContainer>
  );
};

export default GameForm;
