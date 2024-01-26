import { Container } from "react-bootstrap";
import pastel from "../assets/img/pastel.png"


const HomePage = () => {
  return (
    <Container className="text-center p-5">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake 🎂</span>
      </h1>
      <h6>Los mejores pasteles del mundo mundial. </h6>
      <img src={pastel}/>
      
    </Container>
  );
};
export default HomePage;
