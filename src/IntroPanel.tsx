import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { MutableRefObject } from "react";

export function IntroPanel(projectsRef: MutableRefObject<HTMLDivElement | null>, expRef: MutableRefObject<HTMLDivElement | null>) {
  const executeScroll = (ref: MutableRefObject<HTMLDivElement | null>) => () =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <Container maxWidth="sm">
      <Stack alignItems="center" direction="column" spacing={2}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Edward Gunn
        </Typography>
        <Box
          component="img"
          width="50%"
          alt="Edward Gunn"
          src="EdwardGunn.png"
        />

        <Typography
          variant="h6"
          align="justify"
          color="text.secondary"
          paragraph
        >
          I am a recent graduate from the University of Oxford where I completed
          my MEng Engineering Science, specialising in machine learning and
          control. My interests include artificial intelligence, philosophy, the
          origin of consiousness, and beer drinking.
          <br />I dream of using technology to solve the worlds hardest
          problems, but believe that AI is potentially the most dangerous
          technology we could possibly create, meaning that we should take great
          care to do it right the first time.
        </Typography>
      </Stack>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button onClick={executeScroll(projectsRef)} variant="contained">
          Highlighted Projects
        </Button>
        <Button onClick={executeScroll(expRef)} variant="outlined">Experience</Button>
      </Stack>
    </Container>
  );
}
