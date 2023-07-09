import { styled } from "styled-components";

const StyledTitle = styled.div`
  margin-bottom: 2rem;
  color: #9c1dae;
  border-bottom: 1px solid #f2e8f3;

  h2 {
    margin-bottom: 0.5rem;
  }
`;

const Title = ({ children }) => {
  return (
    <StyledTitle>
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default Title;
