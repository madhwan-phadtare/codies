import { Button, TextField } from "@material-ui/core";
import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";

function ContactUs() {
  return (
    <div className="Contact">
      <div className="Contact_Left">
        <div className="Contact_Left_Text">
          <h2>Let's Create Progress Together</h2>
          <p>
            Fill us the Form and our Team will get back to you within a while.
          </p>
        </div>
        <div className="Contact_Left_1">
          <div>
            <Phone />
            <p>+91 999 999 9999</p>
          </div>
          <div>
            <Email />
            <p>Codies@gmail.com</p>
          </div>
          <div>
            <LocationOn />
            <p>Bhopal</p>
          </div>
        </div>
        <div className="Contact_Left_2">
          <div>
            <Facebook />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
        </div>
      </div>
      <div className="Contact_Right">
        <form>
          <TextField id="Name" label="Name" variant="outlined" />
          <TextField id="Email" label="Email" variant="outlined" />
          <TextField id="Phone" label="Phone No." variant="outlined" />
          <TextField
            id="Message"
            label="Message"
            multiline
            variant="outlined"
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
