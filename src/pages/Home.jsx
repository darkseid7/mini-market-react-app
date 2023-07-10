import styled from "styled-components";
import { motion } from "framer-motion";

import { media } from "../styled-components/Global";

import Header from "../components/Header/Header";
import MarketPlace from "../components/Marketplace/MarketPlace";

const StyledHome = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  ${media.tablet_s} {
    padding: 0 1rem;
  }
`;

const Home = () => {
  return (
    <StyledHome
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>mini market • cart</h1>
      <Header />
      <MarketPlace />
    </StyledHome>
  );
};

export default Home;
