import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import { Col, Row } from "react-bootstrap";
// import Top from "./components/nav/Top";

function App() {
  return (
    <div className="App">

      <div className="bagimg">
        <Row>
          <Col md={6} className="bgleft">
            <Row>
              <Col className="bglefttop">
                <img src="images/shape.bbae2481.png" alt="" />
              </Col>
              <Col className="bgleftbottom">
                <img src="images/shape.bbae2481.png" alt="" />

              </Col>
            </Row>
          </Col>
          <Col md={6} className="bgright">
            <img src="images/shape2.f9aa1fe3 (1).png" alt="" />
          </Col>
        </Row>
      </div>

      {/* <Top/> */}

      <Home className="homecontent" />

    </div>
  );
}

export default App;
