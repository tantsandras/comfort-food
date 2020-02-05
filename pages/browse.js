import styled from "styled-components";

const Page = styled.div`
  margin: -8px;
`;

const Footer = styled.footer`
  background-color: #333;
  padding: 0.75rem;
  color: white;
  text-align: center;
  font-size: 0.75rem;
`;

export default function Recipes() {
  return (
    <Page>
      <p>hello</p>
      <Footer>
        <p>&copy; 2020. Sandra Grahl </p>
      </Footer>
    </Page>
  );
}
