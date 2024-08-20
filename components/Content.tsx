import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";
import componentsConstants from './components.Constants';
import coreConstants from '../pages/core.Constants';

const Content: React.FC = () => {

    const authRedirect = async () => {
        try {
          await appwriteSDK.account.createOAuth2Session(
            process.env.APPWRITE_SDK_NAME || '',
            process.env.APPWRITE_SDK_PAGE,
            process.env.APPWRITE_SDK_URL
          );
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <Container>
          <Row>
            <Col>
              <h1>{componentsConstants.content.HEADING}</h1>
              <p>{componentsConstants.content.DESCRIPTION}</p>
              <Button variant="outline-light" onClick={authRedirect} className="rounded-pill">{componentsConstants.content.BUTTON}</Button>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>{componentsConstants.content.AI_CODE_REVIEWS_TITLE}</h3>
                <p>{componentsConstants.content.AI_CODE_REVIEWS_DESCRIPTION}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>{componentsConstants.content.PR_SUMMARIES_TITLE}</h3>
                <p>{componentsConstants.content.PR_SUMMARIES_DESCRIPTION}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='homeOutline'>
                <h3>{componentsConstants.content.ISSUE_ENRICHMENT_TITLE}</h3>
                <p>{componentsConstants.content.ISSUE_ENRICHMENT_DESCRIPTION}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='pircing-font'>{componentsConstants.content.PRICING_TEXT}</p>
            </Col>
          </Row>
          <Row>
            <Col md="2"></Col>
            <Col md="4">
              <div className='pricing-box'>
                <h3>{componentsConstants.content.TEAMS_TITLE}</h3>
                <p>{componentsConstants.content.TEAMS_DESCRIPTION}</p>
                <hr className='hr-class'></hr>
                <Button>{componentsConstants.content.BUTTON}</Button>
              </div>
            </Col>
            <Col md="4">
              <div className='pricing-box' style={{textAlign: 'center'}}>
                <h3>{componentsConstants.content.MORE_THAN_100_USERS_TITLE}</h3>
                <a href={componentsConstants.content.linkedInLink}><h3>{componentsConstants.content.BOOK_A_CALL_TEXT}</h3></a>
              </div>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
    );
}

export default Content;