// pages/privacy.js
import styled from 'styled-components';

const Privacy = () => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to the RhythmoSync Privacy Policy. Your privacy is very important to us. This
        page outlines the types of information we collect and how we use and protect it.
      </p>
      <h2>Information Collection</h2>
      <p>
        We collect data to improve the experience of RhythmoSync, including server information and
        user interaction data. We do not sell or share this data with third parties.
      </p>
      <h2>Data Protection</h2>
      <p>
        We take security seriously and use industry-standard methods to protect the data we collect.
        All data is stored securely and is only accessible by authorized personnel.
      </p>
      <h2>Your Consent</h2>
      <p>By using RhythmoSync, you agree to this Privacy Policy.</p>
      <p>If you have any questions, feel free to contact us.</p>
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
`;
