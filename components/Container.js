import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";

export default function MainContainer() {

    const authRedirect = async () => {
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
              <h1>Pair program with your codebase</h1>
              <p>Squire is your AI pair programmer: chat with your codebase, get an AI code review, and customize it to your style. Have greater impact with less toil - be the hero of your team and hire a Squire who doesn't need sleep.</p>
              <Button variant="outline-light" onClick={authRedirect} className="rounded-pill">Get Started for Free</Button>
            </Col>
          </Row>
        </Container>
    );
}