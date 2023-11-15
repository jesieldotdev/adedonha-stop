import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from './assets/global/theme' 
import GameScreen from "./assets/pages/Game/index.tsx";
import './index.css'
import GameForm from "./assets/components/GameForm/index.tsx";
import FormGame from "./assets/components/Form/index.tsx";

const router = createBrowserRouter([
  {
  path: '/',
  element: <GameScreen />
},
  {
  path: '/game',
  element: <GameForm />
},
  {
  path: '/game/start',
  element: <FormGame />
},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);
