import React from "react";
import { useState } from "react"
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Substitua pela URL do seu servidor WebSocket

interface Player {
  id: string;
  name: string;
}

interface newGameControler{
  
}

const newGameController = () => {
    const [players, setPlayers] = React.useState<Player[]>([]);
    const [open, setOpen] = React.useState(false)


    function closeModal(){
        setOpen(false)
    }

    React.useEffect(() => {
        // Conectar ao servidor WebSocket quando o componente montar
        socket.connect();
    
        // Escutar por atualizações de jogadores
        socket.on('updatePlayers', (updatedPlayers: Player[]) => {
          setPlayers(updatedPlayers);
        });
    
        // Cleanup ao desmontar o componente
        return () => {
          socket.disconnect();
        };
      }, []); 

      console.log(players)
    return{
        open,
        setOpen,
        closeModal
    }
}

export {newGameController}