import { Container, Row, Col, Button } from 'react-bootstrap';
import appwriteSDK from "../utils";

const DashboardContent: React.FC = () => {

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
                <Col style={{ textAlign: 'center' }}>
                    <h2>Welcome to Dashboard</h2>
                    <p>You're almost done. Head over to GitHub and try out a command on a new pull request!</p>
                    <video width="100%" height="700" controls>
                        <source src="/videos/full-review.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </Container>
    );
}

export default DashboardContent;