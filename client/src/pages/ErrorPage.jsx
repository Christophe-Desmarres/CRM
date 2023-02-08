import errorImg from '../assets/images/pages/error/travolta.gif';

const ErrorPage = ({error}) => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Désolé, une erreur est survenue...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <img src={errorImg} alt="error" />
    </div>
  );
}
  
export default ErrorPage;