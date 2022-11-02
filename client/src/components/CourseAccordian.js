import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor: "#fcdce3", margin: "0 auto"}}
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%"}}>Private Full Online Course - £350</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{margin: "0 auto"}}>
          <Typography sx={{fontFamily: "League Spartan", margin: "0 auto"}}>
          10+ hour course (in the comfort of your own home or online).<br /> 
        Weekly sessions, topics will cover everything from the science of birth, how your brain affects everything, your birth plans, your birth environment to learning the importance of your birth partner! 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#fcdce3"}}
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%"}}>Hypnobirthing Express - £150</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{width: "75%", margin: "0 auto"}}> 
          <Typography sx={{fontFamily: "League Spartan"}}>
          4 hour course (Online).<br />
            This is the ideal course if you are close to your due date or just want to refresh your memory!<br /><br />

            Here are just some of the things the course covers!<br /><br />

            - Changing your mindset about birth<br />
            - Your birth partner’s role<br />
            - Your rights<br />

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor: "#fcdce3"}}
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%"}}>One-Off Call - £50</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{margin: "0 auto"}}>
          <Typography sx={{fontFamily: "League Spartan"}}>
          1 hour call to discuss any topic you like! 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%"}}>Full Group Online Course (COMING SOON)</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion disabled sx={{margin: "0 auto"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography align="center" sx={{fontFamily: "League Spartan", fontWeight: 600, width: "100%"}}>Full Group Face-to-Face Course (COMING SOON)</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
