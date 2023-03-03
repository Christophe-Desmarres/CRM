import ClientForm from '../components/Client/ClientForm';
import ContactForm from '../components/Client/ContactForm';

const Contact = () => {

  document.title='Contact';
    
    return (
    <div id='contact__form'>
    <h1>Contact Me</h1>
    <a href="https://christophe-desmarres.github.io/" target="_blank" rel='noreferrer'>My CV ? Click here</a>
    <ContactForm />
    </div>
    );
  };
  
  export default Contact;