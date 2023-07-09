import { styled } from "styled-components";

import Header from "../components/Header/Header";
import MarketPlace from "../components/Marketplace/MarketPlace";

const StyledHome = styled.div`
  max-width: 800px;
  margin: 2rem auto;

  h1 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>mini market • cart</h1>
      <Header />
      <MarketPlace />
    </StyledHome>
  );
};

export default Home;
