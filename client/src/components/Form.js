import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Photo from '../assets/images/prosha2.jpg';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { alpha, styled } from '@mui/material/styles';

init("CRSB7HDdL0UfMj8EF");

const ContactText = styled(TextField)({
    '& label.Mui-focused': {
      color: '#EC5EB1',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EC5EB1',
    },
  });

export default function Form() {

    const [emailSent, setEmailSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fsboimm', 'template_mvkp547', form.current, 'CRSB7HDdL0UfMj8EF')
          .then((result) => {
              setEmailSent(<p>Message sent!</p>)
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', paddingBottom: "20px" }}>
        <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <ContactText label="Name" name="user_name" variant="standard" size="normal"/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <EmailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <ContactText id="input-with-sx" label="Email address" name="user_email" variant="standard" />
      </Box>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, color: "black", display: "flex", justifyContent: "center", alignItems: 'center', paddingBottom: "20px",
      }}
      noValidate
      autoComplete="off"
    >    
      <div> 
        <ContactText
          id="standard-multiline-static"
          label="Message"
          name="user_message"
          multiline
          rows={4}
          variant="standard"
          sx={{color: "white"}}
        />
      </div>
    </Box>
      <p>
          <Button type="submit" variant="contained" size="large" sx={{textTransform: "none", fontSize: 20, fontFamily: "League Spartan", textAlign: "center", margin: "0 auto", display: "block", backgroundColor: "#EC5EB1", marginBottom: "20px",   '&:hover': {
    backgroundColor: '#FABFE2',
    color: 'black'
  }}}>
          Send
          </Button>
          </p>
        </form>
        {emailSent}
    </div>
  )
}
