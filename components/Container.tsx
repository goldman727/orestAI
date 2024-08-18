import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";

export default function MainContainer(): JSX.Element {
    const authRedirect = async (): Promise<void> => {
        try {
          await appwriteSDK.account.createOAuth2Session(
            "github",
            "http://localhost:3000/welcome",
            "http://localhost:3000"
          );
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <Container>
          <Row>
            <Col>
              <h1>Heading</h1>
              <Button variant="outline-light" onClick={authRedirect} className="rounded-pill">Get Started for Free</Button>
            </Col>
          </Row>
        </Container>
    );
  }