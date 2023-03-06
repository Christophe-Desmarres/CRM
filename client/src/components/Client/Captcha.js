// source : https://codesandbox.io/s/1y4zzjq37l?file=/src/index.js:156-196
import React from 'react';
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







    // const optionsFetch = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //     mode: 'no-cors',
    //     body: 'secret=6LcQTcgkAAAAAOLVOFpNikg98hvtHF7CXEZnWgNm&response=03AFY_a8VpVEqzuiWFM2XdI5JGkMU8xvDok7NJfXVCVlCSTf-gVqH0OgkD1uqvzbxp_DEbgnvSKKA4rAZwyHEC46ttQjHlMl1CAVsaZH3MwxWeEeGoNBd-9S00gWJvVcS-U1XHrczL5LFd4JuPLL5b7XyKl7jXV2y-c2QNHW7H24uID3x1xD-FbdSJPSvh-Ds99vw0Upkvjja9XpdMug8Xx2RZKP4TBOf9PjRROp9xkDsKgU_tsW9Jzrt4TrW_zQHGtez480Z7j35rqR43Wk2FxmH6Weh_K7iFRpiP8TR--jZpyK4VknbmoCKyvNVlbeVsEZFN8gMgQ99WUWKMjGJbdHsIDS52AobhDPwaFUVi_bXML3ZsULVnKhEsdc4FEgH8e3_suPTMhWUijYhZKDUld1KOfarnsMtkJcLq-cHliOxD_ICp7wwq8OEmFYWUQYHJH-CxXxrCnuERN6MixJsMKYh8hdePfwM7nivxoQEZd4TMzTnO4khX87LZhDUuYePbnjth-cXUQx8nS7sPqA2DUV7pl1L_cZ26Mw'
    //   };

    //   try {
    //     await fetch('https://www.google.com/recaptcha/api/siteverify', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    //   } catch (error) {
    //     console.log(error);
    //   }












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