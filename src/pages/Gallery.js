import { useEffect, useState } from "react";

import { Box, Button, Container, TextField } from "@mui/material";

import {
  ImageGeneratorUnsplash,
  UnsplashList,
} from "../components/Unsplash.js";

function Home() {
  const [keyword, setkeyword] = useState("art");
  const [images, setimages] = useState([]);

  const handleGenerate = (keyword, imagenum) => {
    ImageGeneratorUnsplash(keyword, imagenum).then((results) => {
      setimages(results);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setkeyword(event.target.value);
    }
  };

  useEffect(() => {
    handleGenerate(`art`, 6);
  }, []);

  return (
    <Container>
      <Box>
        <UnsplashList images={images} />
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
