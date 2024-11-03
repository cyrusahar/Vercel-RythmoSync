// pages/terms.js
import styled from 'styled-components';

const Terms = () => {
  return (
    <Container>
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service govern your use of RhythmoSync. By using the bot, you agree to these
        terms. If you do not agree, please do not use the bot.
      </p>
      <h2>Usage</h2>
      <p>
        RhythmoSync is intended for use on Discord servers, providing music playback functionality
        for server members. You are responsible for ensuring that your use complies with Discord’s
        Terms of Service.
      </p>
      <h2>Limitations of Liability</h2>
      <p>
        We are not liable for any damages or issues arising from the use of RhythmoSync. Use the
        bot at your own risk.
      </p>
      <h2>Termination</h2>
      <p>
        We reserve the right to terminate access to RhythmoSync at any time, without notice, for any
        reason.
      </p>
      <p>If you have any questions, please contact us.</p>
    </Container>
  );
};

export default Terms;

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
`;

