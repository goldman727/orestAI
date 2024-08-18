import appwriteSDK from "../utils";
import { Button, Container, Flex, Box, Section } from '@radix-ui/themes';

const Content: React.FC = () => {
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

  const MainContent: React.FC = () => (
    <Section>
      <h1>Pair program with your codebase</h1>
      <p>Squire is your AI pair programmer: chat with your codebase, get an AI code review, and customize it to your style. Have greater impact with less toil - be the hero of your team and hire a Squire who does not need sleep.</p>
      <Button onClick={authRedirect}>Get Started for Free</Button>
    </Section>
  );

  const Features: React.FC = () => (
    <Flex gap="large">
      <Box>
        <div>
          <h3>AI Code Reviews</h3>
          <p>Before Squire, developers worried about everything during review. Now they focus on high leverage work like architecture, future planning, and impact.</p>
        </div>
      </Box>
      <Box>
        <div>
          <h3>Pull Request Summaries</h3>
          <p>Never write a PR summary again. Squire writes perfect abstracts and detailed changes that keep your code documented and your team locked in.</p>
        </div>
      </Box>
      <Box>
        <div>
          <h3>Issue Enrichment</h3>
          <p>Coming Soon</p>
          <p>With full codebase context Squire will automatically enhance issues with relevant files, TODOs, and got-ya’s.</p>
        </div>
      </Box>
    </Flex>
  );

  const Pricing: React.FC = () => (
    <>
      <Box>
        <p>Pricing</p>
      </Box>
      <Flex>
        <Box>
          <div>
            <h3>Teams</h3>
            <p>All inclusive plan</p>
            <p>Based on GitHub users</p>
            <p>$20</p>
            <p>/user/month</p>
            <hr />
            <Button>Get Started</Button>
          </div>
        </Box>
        <Box>
          <div>
            <h3>More than</h3>
            <h3>100 users?</h3>
            <a href='https://www.linkedin.com/in/kuzmychenko-orest-529940318/'><h3>Book a call with our team</h3></a>
          </div>
        </Box>
      </Flex>
    </>
  );

  return (
    <Container>
      <MainContent />
      <Features />
      <Pricing />
    </Container>
  );
};

export default Content;