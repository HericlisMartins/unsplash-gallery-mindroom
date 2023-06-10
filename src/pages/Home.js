import { useEffect, useState } from "react";

import { Box, Button, Container, TextField } from "@mui/material";

import {
  ImageGeneratorUnsplash,
  UnsplashItem,
} from "../components/Unsplash.js";

function Home() {
  const [keyword, setkeyword] = useState("art");
  const [images, setimages] = useState([]);

  const handleGenerate = (keyword) => {
    if (!keyword) keyword = "art";
    ImageGeneratorUnsplash(keyword, 1).then((results) => {
      setimages(results);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setkeyword(event.target.value);
    }
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        alignContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <UnsplashItem images={images} />
        <TextField
          onChange={(e) => setkeyword(e.target.value)}
          onKeyUp={(e) => handleGenerate(e.target.value)}
          id="standard-basic"
          variant="standard"
          sx={{ width: "50%", marginBottom: "50px" }}
          onKeyDown={handleKeyPress}
          label="Enter a value"
          value={keyword}
        />
        <Button onClick={() => handleGenerate()} variant="contained">
          Generate
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
