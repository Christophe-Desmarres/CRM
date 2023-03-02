// source : https://codesandbox.io/s/1y4zzjq37l?file=/src/index.js:156-196
import React from 'react';
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";



  const CAPTCHA_SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;
  // for testing purpose
 //const CAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const DELAY = 500;

 
  class Captcha extends React.Component {

    constructor(props, ...args) {
      super(props, ...args);
      this.state = {
        callback: "not fired",
        value: "[empty]",
        load: false,
        expired: "false"
      };
      this._reCaptchaRef = React.createRef();
    }

    
  // chargement du captcha
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }
  
  handleChange = async (value) => {
    console.warn("verification Captcha in progress : ");
    // console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });

    // vérification du captcha

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        secret: process.env.REACT_APP_CAPTCHA_SITE_KEY_VALIDATION,
        response: value,
      })
    };

    // console.log(value);
    
    await fetch('https://www.google.com/recaptcha/api/siteverify', options)
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
        const { success } = data;
        if (success) console.log("Captcha is valid");
        else console.log("Bad Captcha :(");
      })
      .catch(error => console.log(error));
      
    console.log("fin...");
    return this.state.value;
  };


  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);


  };

  
render()  {
  const { value, callback, load, expired } = this.state || {};

  return (
    <div style={{ display: "flex", justifyContent: "center",width: "100%",marginBottom: "1rem" }}>
      {load && (        
         <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="light"
            size="normal"
            ref={this._reCaptchaRef}
            sitekey={CAPTCHA_SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
      )}
    </div>
  )
}
}

export default Captcha;