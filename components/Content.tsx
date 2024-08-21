import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";
import componentsConstants from './components.Constants';
import coreConstants from '../pages/core.Constants';

const Content: React.FC = () => {

  const authRedirect = async () => {
    try {
      const sdkName = process.env.APPWRITE_SDK_NAME || 'github';
      const sdkPage = process.env.APPWRITE_SDK_PAGE || 'http://localhost:3000/welcome';
      const sdkUrl = process.env.APPWRITE_SDK_URL || 'http://localhost:3000';
      await appwriteSDK.account.createOAuth2Session(
        sdkName,
        sdkPage,
        sdkUrl
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
          <p>Squire is your AI pair programmer: chat with your codebase, get an AI code review, and customize it to your style. Have greater impact with less toil - be the hero of your team and hire a Squire who does not need sleep.</p>
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
      <Row>
        <Col>
          <p className='pircing-font'>Pricing</p>
        </Col>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="4">
          <div className='pricing-box'>
            <h3>Teams</h3>
            <p>All inclusive plan</p>
            <p>Based on GitHub users</p>
            <p>$20</p>
            <p>/user/month</p>
            <hr className='hr-class'></hr>
            <Button>Get Started</Button>
          </div>
        </Col>
        <Col md="4">
          <div className='pricing-box' style={{ textAlign: 'center' }}>
            <h3>More than</h3>
            <h3>100 users?</h3>
            <a href='https://www.linkedin.com/in/kuzmychenko-orest-529940318/'><h3>Book a call with our team</h3></a>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  );
}

export default Content;