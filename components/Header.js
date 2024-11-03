// components/Hero.js
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Hero = () => (
  <HeroContainer>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Title>Bring Rhythm to Your Discord with RhythmoSync!</Title>
      <Subtitle>The Ultimate Music Bot for Endless Grooves</Subtitle>
      <InviteButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Invite RhythmoSync
      </InviteButton>
    </motion.div>
    <Visualizer />
  </HeroContainer>
);

export default Hero;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #0070f3, #ff0077);
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
`;

const InviteButton = styled(motion.button)`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const Visualizer = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 150px;
  background: url('/visualizer.png'); /* Replace with visualizer image or component */
  background-size: cover;
`;
