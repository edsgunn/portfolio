import { Box, Container, Stack, Typography } from "@mui/material";

export function ExpPanel() {

  return (
    <Container maxWidth="sm">
      <Stack alignItems="left" direction="column" spacing={2}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Education
        </Typography>
        <Typography
          variant="h6"
          align="justify"
          color="text.primary"
          paragraph
        >MEng Engineering Science, University of Oxford</Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          color="text.secondary"
          paragraph
        >2019-2023</Typography>
        <Typography
          variant="body1"
          align="justify"
          color="text.secondary"
          paragraph
        >
         Modules: Computer Vision, Machine Learning, Multivariable Control, Nonlinear and Predictive Control, Advanced Probability, Dynamical Systems, Perturbation Methods, Optimization, Advanced Transforms 
        <br/>
        4th Year Project: Communication Efficient Distributed Reinforcement Learning
        <br/>
        3rd Year Project: Designing an automatic music accompaniment tool to allow singers to generate chords for a sung melody
        <br/>
        Extra curricular: Research Lead for OXAI band, creating a music video through the use of cutting edge deep learning

        
        </Typography>

        <Typography
          variant="h6"
          align="justify"
          color="text.primary"
          paragraph
        >A-Levels, The Leys School, Cambridge</Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          color="text.secondary"
          paragraph
        >2014-2019</Typography>
        <Typography
          variant="body1"
          align="justify"
          color="text.secondary"
          paragraph
        >
         Subjects: Mathematics A*, Further Mathematics A*, Physics A*, Chemistry A*
         Extended Project: Developing an app to locate iPads on the school site. Grade: A

        
        </Typography>

        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Experience
        </Typography>

        <Typography
          variant="h6"
          align="justify"
          color="text.primary"
          paragraph
        >Accessia, Software Engineering Intern</Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          color="text.secondary"
          paragraph
        >July-September 2022</Typography>
        <Typography
          variant="body1"
          align="justify"
          color="text.secondary"
          paragraph
        >
         Accessia is an  early stage start-up with a mission to disrupt the building access and control market place.  As a summer intern I worked directly with the founders and investors to successfully develop the MVP for the visitor management system.  I worked on backend using python where I built a REST API and tested it by writing unit and integration tests using PyTest. We maintained a high code quality using PyLint. I also worked on the frontend using React and TypeScript to develop the user interface employing the use of hooks and React Redux to do so. We also designed and implemented a PostgreSQL database. We used Docker to allow for both local testing and cloud deployment using AWS. I gained experience of agile software development working in sprints and tracking our progress using Jira. In 10 weeks we built the MVP and delivered a successful demo to the investors.

        
        </Typography>
        <Typography
          variant="h6"
          align="justify"
          color="text.primary"
          paragraph
        >Arm, Part-Time Undergrad, Software</Typography>
        <Typography
          variant="subtitle1"
          align="justify"
          color="text.secondary"
          paragraph
        >July 2021-May 2022</Typography>
        <Typography
          variant="body1"
          align="justify"
          color="text.secondary"
          paragraph
        >
         Over the summer of 2021 I was a Part Time Undergraduate (PTUG) at Arm. I worked in the Open Source Software division as part of the Total Compute solutions team, where I helped build a reference software stack  for the total compute system. This involved  providing support for many different software stacks developed in and outside of Arm including optimisations for Machine Learning on the CPU and GPU.
        </Typography>
      </Stack>
    </Container>
  );
}
