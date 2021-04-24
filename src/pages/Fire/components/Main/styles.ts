import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  width: 85%;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  grid-gap: 2.25rem;
`;
