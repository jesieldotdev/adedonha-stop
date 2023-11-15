import styled from "styled-components";

const GameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  justify-content: center;
  /* background-color: red; */
  height: 92vh;

  @media (min-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;

    .title {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
      padding: 0;
      text-align: center;
      /* background-color: red; */
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .letter {
      font-size: 64px;
      font-weight: 900;
      text-align: center;

      margin: 0;
      margin-bottom: 8px;
    }

    /* Adicione mais estilos específicos para telas maiores aqui */
  }
  .title {
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-align: center;
    /* background-color: red; */
    width: 300px;
  }

  .letter {
    font-size: 64px;
    font-weight: 900;
    text-align: center;

    margin: 0;
    margin-bottom: 8px;
  }
`;
export { GameFormContainer };
