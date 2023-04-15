import ClientForm from '../components/Client/ClientForm';
import  heroImg  from '../assets/images/background.jpg';

const Contact = () => {

  document.title='Contact';
    
    return (
    <div id='contact__form'>
            <div className="hero">
          <img src={heroImg} alt="" role="presentation" className='background_img' />
        </div>
    <h1>Contactez moi</h1>
    <ClientForm />
    </div>
    );
  };
  
  export default Contact;