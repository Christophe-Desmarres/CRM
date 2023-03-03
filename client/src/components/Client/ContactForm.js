import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

class ContactForm extends Component {
  state = {
    name: "nono le robot",
    email: "nono@lerobot.io",
    recaptchaToken: null,
    error: null,
    isSubmitting: false,
    isSuccess: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  verifyCallback = (recaptchaToken) => {
    this.setState({ recaptchaToken });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, recaptchaToken } = this.state;

    if (!recaptchaToken) {
      this.setState({ error: "Please complete the reCAPTCHA." });
      return;
    }

    this.setState({ isSubmitting: true });

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        mode: 'no-cors',
        body: 'secret=6LcQTcgkAAAAAOLVOFpNikg98hvtHF7CXEZnWgNm&response=03AFY_a8VpVEqzuiWFM2XdI5JGkMU8xvDok7NJfXVCVlCSTf-gVqH0OgkD1uqvzbxp_DEbgnvSKKA4rAZwyHEC46ttQjHlMl1CAVsaZH3MwxWeEeGoNBd-9S00gWJvVcS-U1XHrczL5LFd4JuPLL5b7XyKl7jXV2y-c2QNHW7H24uID3x1xD-FbdSJPSvh-Ds99vw0Upkvjja9XpdMug8Xx2RZKP4TBOf9PjRROp9xkDsKgU_tsW9Jzrt4TrW_zQHGtez480Z7j35rqR43Wk2FxmH6Weh_K7iFRpiP8TR--jZpyK4VknbmoCKyvNVlbeVsEZFN8gMgQ99WUWKMjGJbdHsIDS52AobhDPwaFUVi_bXML3ZsULVnKhEsdc4FEgH8e3_suPTMhWUijYhZKDUld1KOfarnsMtkJcLq-cHliOxD_ICp7wwq8OEmFYWUQYHJH-CxXxrCnuERN6MixJsMKYh8hdePfwM7nivxoQEZd4TMzTnO4khX87LZhDUuYePbnjth-cXUQx8nS7sPqA2DUV7pl1L_cZ26Mw'
      };

      try {
        await fetch('https://www.google.com/recaptcha/api/siteverify', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      } catch (error) {
        console.log(error);
      }
      

    console.log("envoie le fetch ici");

  };

  render() {
    const { name, email, error, isSubmitting, isSuccess } =
      this.state;

    if (isSuccess) {
      return <p>Thank you for your message!</p>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={this.verifyCallback}
        />
        <button type="submit" disabled={isSubmitting}>
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
