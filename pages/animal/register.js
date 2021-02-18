import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import { FormLabel } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function AnimalRegister() {
  const classes = useStyles();

  // Select breeds
  const [breed, setBreed] = React.useState("");
  const handleChange = (event) => {
    setBreed(event.target.value);
  };

  // Radio Buttons Gender
  const [gender, setGender] = React.useState("female");
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  // Radio Buttons isVaccinated
  const [isVaccinated, setIsVaccinated] = React.useState("not-vaccinated");
  const handleChangeIsVaccinated = (event) => {
    setIsVaccinated(event.target.value);
  };

  // Checkboxes Vaccines
  const [vaccine, setVaccine] = React.useState({
    moquillo: false,
    gripe: false,
    leucemia: false,
    peritonitisInfecciosa: false,
    rabia: false,
    ninguna: true,
  });

  const handleChangeVaccines = (event) => {
    setVaccine({ ...vaccine, [event.target.name]: event.target.checked });
  };

  const {
    moquillo,
    gripe,
    leucemia,
    peritonitisInfecciosa,
    rabia,
    ninguna,
  } = vaccine;

  // Terms and conditions
  const [checked, setChecked] = React.useState(false);
  let isDisable = true;
  const handleChangeTermsConditions = (event) => {
    setChecked(event.target.checked);
    isDisable = !isDisable;
  };

  return (
    <Grid container component="main" style={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/55/14/1b/55141b34f49c60d04656ad3dd4b4c674.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div
          className={classes.paper}
          style={{
            marginTop: "64px",
            marginBottom: "64px",
            marginLeft: "32px",
            marginRight: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ margin: "8px 8px", backgroundColor: "#07A7D8" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro de Gatos
          </Typography>
          <form noValidate style={{ width: "100%", marginTop: "8px" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pet-name"
              label="Nombre del gato"
              name="cat-name"
              autoFocus
            />
            <InputLabel
              id="demo-simple-select-label"
              style={{
                marginTop: "16px",
                minWidth: "120px",
                fontSize: "0.75rem",
              }}
            >
              Raza
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={breed}
              onChange={handleChange}
              style={{ minWidth: "120px" }}
            >
              <MenuItem value={"Asiático"}>Asiático</MenuItem>
              <MenuItem value={"Azul Ruso"}>Azul Ruso</MenuItem>
              <MenuItem value={"Bengalí"}>Bengalí</MenuItem>
              <MenuItem value={"Birmano"}>Birmano</MenuItem>
              <MenuItem value={"Siamés"}>Siamés</MenuItem>
              <MenuItem value={"Criollo"}>Criollo</MenuItem>
            </Select>
            <div style={{ marginTop: "16px" }}>
              <div>
                <FormLabel
                  id="demo-simple-select-label"
                  style={{
                    marginTop: "16px",
                    minWidth: "120px",
                    fontSize: "0.75rem",
                  }}
                >
                  Género
                </FormLabel>
              </div>
              <FormControlLabel
                control={
                  <Radio
                    checked={gender === "female"}
                    onChange={handleChangeGender}
                    value="female"
                    name="radio-button-demo"
                  />
                }
                label="Hembra"
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    checked={gender === "male"}
                    onChange={handleChangeGender}
                    value="male"
                    name="radio-button-demo"
                  />
                }
                label="Macho"
              />
            </div>
            <div style={{ marginTop: "16px" }}>
              <FormLabel
                id="demo-simple-select-label"
                style={{
                  marginTop: "16px",
                  minWidth: "120px",
                  fontSize: "0.75rem",
                }}
              >
                ¿Con qué vacunas cuenta?
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={moquillo}
                      onChange={handleChangeVaccines}
                      name="moquillo"
                    />
                  }
                  label="Moquillo"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gripe}
                      onChange={handleChangeVaccines}
                      name="gripe"
                    />
                  }
                  label="Gripe Felina"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={leucemia}
                      onChange={handleChangeVaccines}
                      name="leucemia"
                    />
                  }
                  label="Leucemia Felina"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={peritonitisInfecciosa}
                      onChange={handleChangeVaccines}
                      name="peritonitisInfecciosa"
                    />
                  }
                  label="Peritonitis Infecciosa Felina"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rabia}
                      onChange={handleChangeVaccines}
                      name="rabia"
                    />
                  }
                  label="Rabia"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ninguna}
                      onChange={handleChangeVaccines}
                      name="ninguna"
                    />
                  }
                  label="Ninguna"
                />
              </FormGroup>
            </div>
            <div style={{ marginTop: "16px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeTermsConditions}
                  />
                }
                label="Acepto términos y condiciones"
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!checked}
              style={{
                marginTop: "16px",
                marginBottom: "24px",
                marginLeft: "0px",
                marginRight: "16px",
              }}
            >
              REGISTRAR
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
