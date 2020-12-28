import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function Header(props) {
  return (
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="overline" component="span">
            The New Internet
          </Typography>
          <Typography variant="h3" style={{ fontWeight: "100", color: "#444" }}>
            <small>With your own dedicated</small> <br />
            <b>VPN Server</b>
            <br /> <small>experience uninterrupted Gaming.</small>
          </Typography>
          <Box mt={4}>
          <a href="#contact" style={{ textDecoration:"none" }}>
            <Button color="primary" endIcon={<ArrowRightAltIcon />}>
              Contact Now
            </Button>
          </a>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
