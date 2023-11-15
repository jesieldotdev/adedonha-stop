import { Button, Typography } from "@mui/material";
import { GridContainer, HomeScreenContainer } from "./style";
import Lottie from "lottie-react";
import StopLottie from "../../images/stop-lottie.json";
import AddPlayerModal from "../../components/AddPlayModalModal";
import { newGameController } from "./viewController";
import WebSocketExample from "../../components/WebSocket/webSocket";

const GameScreen = () => {
    const {open, setOpen, closeModal} = newGameController()

  return (
    <HomeScreenContainer>
      <Lottie className="lottie" animationData={StopLottie} />
      <Typography className="title" variant="h5">
        Jogo Da Adedonha
      </Typography>

      <WebSocketExample />

      <AddPlayerModal isOpen={open} close={closeModal} />

      <GridContainer>
        <Button
            onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#29A655",
          }}
          className="button"
          variant="contained"
          color="primary"
        >
          Jogar
        </Button>
        <Button
          sx={{
            backgroundColor: "#6524BF",
          }}
          className="button"
          variant="contained"
          color="primary"
        >
          Adicionar Jogador
        </Button>
        <Button
          sx={{
            backgroundColor: "#F27D16",
          }}
          className="button"
          variant="contained"
          color="primary"
        >
          Configurações
        </Button>
      </GridContainer>
      
    </HomeScreenContainer>
  );
};

export default GameScreen;
