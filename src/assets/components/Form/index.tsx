import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { FormContainer } from "./style";
import FormController from "./viewController";

const FormGame = () => {
  const selectedLetter = "J";

  const { topics, ramdomColor, color } = FormController();

  return (
    <FormContainer>
      <p className="title">
        Letra Selecionada <span>{selectedLetter}</span>
      </p>

      {topics.map((item: {name:string, icon:string}) => (
        <div
          style={{
            marginTop: 16,
            backgroundColor: ramdomColor(),
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
            <p style={{
                marginRight: 16,
                fontSize: 32
            }}>{item.icon}</p>
          <FormControl>
            {/* <InputLabel htmlFor="my-input">{item}</InputLabel> */}
            <TextField
              id={item.name}
              placeholder={item.name}
              style={{
                width:'260px',
                display: 'flex',
                margin: 'auto',
                justifyContent: 'center'
                
              }}
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              {item.name} com a letra <span>{selectedLetter}</span>
            </FormHelperText>
          </FormControl>
        </div>
      ))}

      <Button
        style={{
          width: 200,
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: 16,
          marginBottom: 16,
        }}
        variant="contained"
        color="error"
      >
        Stop
      </Button>
    </FormContainer>
  );
};

export default FormGame;
