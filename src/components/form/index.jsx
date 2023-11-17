import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Button } from "@mui/material";

export default function Form({addMovie}) {
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [imdbInput, setImdbInput] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Image</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Image"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">IMDB</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Imdb"
          value={imdbInput}
          onChange={(e) => setImdbInput(e.target.value)}
        />
      </FormControl>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={()=>{
          addMovie(imdbInput,titleInput,imageInput)
          setImdbInput("")
          setTitleInput("")
          setImageInput("")
        }}>
          Add
        </Button>
      </Stack>
    </Box>
  );
}
