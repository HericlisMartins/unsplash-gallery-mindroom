import React, { useState } from "react";

import { Button, Container, TextField, Typography } from "@mui/material";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission

    // Simulating form submission success
    setIsSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      {isSubmitted ? (
        <Typography variant="h6" align="center" gutterBottom>
          Thank you for your message! We will get back to you soon.
        </Typography>
      ) : (
        <>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              name={"Submit"}
            >
              Submit
            </Button>``
          </form>
        </>
      )}
    </Container>
  );
};

export default ContactPage;
