import React, { Component } from 'react';
import Reaptcha from 'reaptcha';


const CAPTCHA_SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;


class ContactForm extends Component {
  constructor(props: Props) {
    super(props);
    this.captcha = null;
    this.state = {
      captchaReady: false
    };
  }

  
  onLoad = () => {
    this.setState({
      captchaReady: true
    });
  };

  onVerify = recaptchaResponse => {
    // Do something
  };


  render() {
    return (
      <form>
        <Reaptcha sitekey={CAPTCHA_SITE_KEY} onVerify={this.onVerify} />
        <button type="submit" disabled={!this.state.verified}>
          Submit
        </button>
      </form>
    );
  }
}

export default ContactForm;