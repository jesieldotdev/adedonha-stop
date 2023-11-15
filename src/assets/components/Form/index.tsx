import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { FormContainer, FormItem, FormWrapper } from "./style";
import FormController from "./viewController";
import { useParams } from "react-router-dom";

const FormGame = () => {
  const selectedLetter = "J";

  const { letter } = useParams();

  const { topics, ramdomColor, color } = FormController();

  return (
    <FormContainer>
      <p className="title">{letter}</p>

      <FormWrapper>
        {topics.map((item: { name: string; icon: string }) => (
          <FormItem className="form-item" key={item.name}>
            {/* <p className="left-icon">{item.icon}</p> */}
            <FormControl className="form-control">
              {/* <InputLabel htmlFor="my-input">{item}</InputLabel> */}

              <TextField
                id={item.name}
                className="text-field"
                placeholder={item.name}
                aria-describedby="my-helper-text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <p className="left-icon">{item.icon}</p>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText id="my-helper-text">
                {item.name} com a letra <span>{letter}</span>
              </FormHelperText>
            </FormControl>
          </FormItem>
        ))}
      </FormWrapper>
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
        Concluir
      </Button>
    </FormContainer>
  );
};

export default FormGame;
