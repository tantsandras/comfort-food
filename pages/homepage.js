import styled from "styled-components";
import RecipeCards from "../components/recipeCards";

const Title = styled.h1`
  font-size: 4rem;
  padding: 6%;
  font-family: Montserrat;
  font-weight: 900;
`;

const Hero = styled.section`
  background: white;
  background-size: cover;
  padding: 8% 8%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  color: black;
`;

const Description = styled.article`
  font-size: 1.8rem;
  font-weight: 200;
  font-family: Lato;
`;

const Browse = styled.a`
  padding: 0.75rem;
  margin-top: 0.75rem;
  background-color: goldenrod;
  text-decoration: none;
  color: white;
  border-radius: 0.25rem;
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
  font-size: 1.4rem;
  font-family: Lato;
  &:hover {
    opacity: 0.6;
  }
`;

export default function Homepage() {
  return (
    <main>
      <Hero>
        <Title>
          Guilt Free <br /> Guilty Pleasures
        </Title>
        <Description>
          <p>Vegetarian comfort food.</p>
          <Browse href="/browse">Browse Recipes</Browse>
        </Description>
      </Hero>
      <section>
        <RecipeCards />
      </section>
    </main>
  );
}
