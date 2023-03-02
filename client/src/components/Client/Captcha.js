// source : https://codesandbox.io/s/1y4zzjq37l?file=/src/index.js:156-196
import React from 'react';
import ReactDOM from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'



  const CAPTCHA_SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;
  // for testing purpose
 //const CAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const DELAY = 1500;

 
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

    
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.warn("verification Captcha in progress : ");
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });


    const formData = new URLSearchParams({
                          secret: CAPTCHA_SITE_KEY,
                          response: value,
                      });


    //let bodyParams = `secret=${CAPTCHA_SITE_KEY}&response=${value}`;
     //bodyParams.toString();


    console.log("bodyParams : set", formData);


    axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: CAPTCHA_SITE_KEY,
    response: value
  }).then(response => {
    console.log(response);
    console.log(response.data);

    const {success} = response.data

      if (success) {
        // Token is valid, submit the form
        // ...
        console.log("Captcha is valid");
      } else {
        // Token is invalid, show an error message
        // ...
        console.log("Bad Captcha :(");
      }
  })

  console.log("fin...");




  //   fetch("https://www.google.com/recaptcha/api/siteverify", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: formData,
  // })
  //   .then((response) => {
  //     console.log(response);
  //     console.log("Captcha is testing");
  //  return response.json();
  // })
  //   .then((data) => {
  //     console.log(data);
  //     const { success } = data;

  //     if (success) {
  //       // Token is valid, submit the form
  //       // ...
  //       console.log("Captcha is valid");
  //     } else {
  //       // Token is invalid, show an error message
  //       // ...
  //       console.log("Bad Captcha :(");
  //     }
  //   });
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