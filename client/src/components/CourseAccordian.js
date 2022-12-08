import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha, styled } from '@mui/material/styles';

const CourseType = styled(Typography)(({ theme }) => ({
  fontFamily: "League Spartan", 
  fontWeight: 600, 
  width: "100%", 
  fontSize: 25,
  color: "white"
}));

const CourseInfo = styled(Typography)(({ theme }) => ({
  fontFamily: "League Spartan", 
  margin: "0 auto", 
  fontSize: 20
}));


export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#EC5EB1", margin: "0 auto", padding: "20px"}}
        >
          <CourseType align="center">Private Full Course - £350</CourseType>
        </AccordionSummary>
        <AccordionDetails sx={{margin: "0 auto", padding: "20px"}}>
          <CourseInfo>
          10+ hour course (in the comfort of your own home or online).<br /> 
        Weekly sessions, topics will cover everything from the science of birth, how your brain affects everything, your birth plans, your birth environment to learning the importance of your birth partner! 

          </CourseInfo>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#EC5EB1", padding: "20px" }}
        >
          <CourseType align="center">Hypnobirthing Express - £150</CourseType>
        </AccordionSummary>
        <AccordionDetails sx={{width: "75%", margin: "0 auto", padding: "20px" }}> 
          <CourseInfo>
          Private 4 hour course (Online).<br />
            This is the ideal course if you are close to your due date or just want to refresh your memory!<br /><br />

            Here are just some of the things the course covers!<br /><br />

            - Changing your mindset about birth<br />
            - Your birth partner’s role<br />
            - Your rights<br />

          </CourseInfo>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: "0 auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#EC5EB1", padding: "20px" }}
        >
          <CourseType align="center">Postnatal Course - £60</CourseType>
        </AccordionSummary>
        <AccordionDetails sx={{width: "75%", margin: "0 auto", padding: "20px" }}> 
          <CourseInfo>
          1.5 hour

          </CourseInfo>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: "0 auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#EC5EB1", padding: "20px" }}
        >
          <CourseType align="center">One-Off Call - £50</CourseType>
        </AccordionSummary>
        <AccordionDetails sx={{margin: "0 auto", padding: "20px" }}>
          <CourseInfo>
          1 hour call to discuss any topic you like! 

          </CourseInfo>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled sx={{margin: "0 auto" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%", fontSize: 20}}>Full Group Online Course (COMING SOON)</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disabled sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%", fontSize: 20}}>Full Group Face-to-Face Course (COMING SOON)</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
