import ReactModal from "react-modal";
import { Input, ModalContainer } from "./style";
import Thinking from '../../images/thinking.json'
import Lottie from "lottie-react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

interface AddPlayerModalProps {
  isOpen: boolean;
  close?: any;
}

const AddPlayerModal = ({ isOpen, close }: AddPlayerModalProps) => {


  return (
    <ReactModal
      style={{
        content: {
          position: "absolute",
          top: "2vh",
          left: "8vw",
          // right: "40px",
          bottom: "40px",
          borderRadius: "32px",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          padding: "0px",
          maxHeight: '94vh',
          minWidth: '300px',

        },
      }}
      isOpen={isOpen}
      onRequestClose={() => close()}
    >
      <ModalContainer>
        <div style={{
          maxWidth: 400,
          margin: 'auto'
        }}>
      <Lottie className="lottie" animationData={Thinking} />

        <p className="label">Nome do jogador</p>
        <p className="sub">Esse será o nome que ficara visivel os outros jogadores</p>
        
        <TextField
      variant="outlined"
      className="nome-input"
      style={{
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',

        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        '&::focus .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
        color: '#343434',
        fontSize: '32px'  ,

      }}
      placeholder="Seu Nome Aqui"
    />
<br></br>
       <Link style={{
        textDecoration: 'none'
       }} to='/game'> <Button  className="button" variant="contained">Confirmar</Button></Link>
        </div>
      </ModalContainer>
    </ReactModal>
  );
};

export default AddPlayerModal;
