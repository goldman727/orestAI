import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";


export default function Content() {

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
          <Row>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>AI Code Reviews</h3>
                <p>Before Squire, developers worried about everything during review. Now they focus on high leverage work like architecture, future planning, and impact.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>Pull Request Summaries</h3>
                <p>Never write a PR summary again. Squire writes perfect abstracts and detailed changes that keep your code documented and your team locked in.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>Issue Enrichment</h3>
                <p>Coming Soon</p>
                <p>With full codebase context Squire will automatically enhance issues with relevant files, TODOs, and got-ya’s.</p>
              </div>
            </Col>
          </Row>
        </Container>
    );
}