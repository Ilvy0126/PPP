import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="pink"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a sophomore student majoring in Information Management and Information System at <b className="pink">South China Normal University.</b>
              <br />
              <br />I am fluent in
              <i>
                <b className="pink"> Mandarin, Cantonese, and English. </b>
              </i>
              <br />
              <br />
              In my daily life, I enjoy playing badminton,
              <i>
                <b className="pink">playing the piano, </b> and going for walks.{" "}
              </i>
              <br />
              <br />
              Besides, I have a fondness for small animals, particularly <b className="pink">puppies</b>.   
              <br />
              <br />
              <i>
              However, my parents don't permit me to have pets.
              </i>
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="pink">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
