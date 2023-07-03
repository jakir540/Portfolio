import { Button, Typography } from "@mui/material";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wfvb3mb", "template_pdmpzex",form.current, "C61pccjrY14jsvXqX")
      .then(
        (result) => {
          console.log(result);
          console.log("successfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        {/* <form className="contactContainerForm" onSubmit={sendEmail}>
          <Typography variant="h4">Contact Me</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          
          <Button variant="contained" type="submit" >
            Send
          </Button>






        </form> */}

        <form className="contactContainerForm" ref={form} onSubmit={sendEmail}>
        <Typography variant="h4">Contact Me</Typography>
          <input type="text" placeholder="Name" name="user_name" />

          <input type="email" placeholder="Email" name="user_email" />

          <textarea placeholder="Message" name="message" />

          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
