import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="ahakeypankaj@gmail.com">
        <Button>Contact: ahakeypankaj@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
