import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  makeStyles,
  List,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    marginTop: "15px",
    marginLeft: "120px",
    border: "3px solid red",
    display: "inline-block",
    backgroundColor: "rgb(237, 125, 119)",
    color: "rgb(247, 243, 242)",
    padding: "5px",
  },

  info: {
    border: "2px solid blue",
    marginTop: "50px",
    padding: "20px",
    boxSizing: "border-box",
    width: "500px",
    backgroundColor: "rgb(0,0,0,0.09)",
    height: "540px",
  },

  input: {
    backgroundColor: "rgb(0,0,0,0)",
    color: "rgb(41, 191, 4)",
    textTransform: "lowercase",
    fontWeight: "bolder",
  },

  heading1: {
    color: "rgb(230, 78, 78)",
    fontWeight: "bolder",
    textTransform: "uppercase",
  },

  text: {
    color: "rgb(36, 133, 242)",
    fontWeight: "bolder",
  },
});

const App = () => {
  const [name, setName] = useState("pikachu");

  const classes = useStyles();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  if (name.length === 0) {
    setName("pikachu");
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        var name = data.name;
        var weight = data.weight / 10;
        var height = data.height * 10;
        var type = data.types[0].type.name;
        var a1 = data.moves[0].move.name;
        var a2 = data.moves[1].move.name;
        var a3 = data.moves[2].move.name;

        name = name.toUpperCase();
        type = type.toUpperCase();
        a1 = a1.toUpperCase();
        a2 = a2.toUpperCase();
        a3 = a3.toUpperCase();

        document.getElementById("name").innerHTML = name;
        document.getElementById("weight").innerHTML = weight;
        document.getElementById("height").innerHTML = height;
        document.getElementById("type").innerHTML = type;

        document.getElementById("attack1").innerHTML = a1;
        document.getElementById("attack2").innerHTML = a2;
        document.getElementById("attack3").innerHTML = a3;
      });
  });

  return (
    <Box>
      <Box className={classes.heading}>
        <Typography variant="h3">POKE-INFO</Typography>
        <br />
      </Box>
      <Box align="center" className={classes.info}>
        <TextField
          id="outlined-basic"
          label="Pokemon Name..."
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            className: classes.input,
          }}
        />
        <br />
        <br />

        <List>
          <ListItemText className={classes.heading1}>
            Name : <br /> <span id="name" className={classes.text}></span>
          </ListItemText>
          <br />
          <ListItemText className={classes.heading1}>
            Weight : <br /> <span id="weight" className={classes.text}></span>
            <span className={classes.text}> KG</span>
          </ListItemText>
          <br />
          <ListItemText className={classes.heading1}>
            Height : <br /> <span id="height" className={classes.text}></span>
            <span className={classes.text}> CM</span>
          </ListItemText>
          <br />
          <ListItemText className={classes.heading1}>
            Nature Type : <br />
            <span id="type" className={classes.text}></span>
          </ListItemText>
          <br />
          <ListItemText className={classes.heading1}>
            Attacks :
            <List>
              <ListItemText>
                <span id="attack1" className={classes.text}></span>
              </ListItemText>
              <ListItemText>
                <span id="attack2" className={classes.text}></span>
              </ListItemText>
              <ListItemText>
                <span id="attack3" className={classes.text}></span>
              </ListItemText>
            </List>
          </ListItemText>
        </List>
        <br />
        <br />
      </Box>
    </Box>
  );
};

export default App;
