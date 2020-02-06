import styled from "styled-components";
import Link from "next/link";
import recipeData from "../recipes.json";

const Recipes = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
  list-style: none;
  margin: 10% 8%;
`;

const Food = styled.li`
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  //   padding: 1rem;
`;

const PhotoPos = styled.figure`
  max-height: 220px;
  overflow: hidden;
  position: relative;
`;

const Photo = styled.img`
  width: 100%;
`;

const Summary = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

const Name = styled.h3`
  color: white;
  padding: 0.75rem;
  font-size: 1.25rem;
  font-family: Lato;
  font-weight: 200;
`;
const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  padding: 2rem;
  color: #666666;
  font-family: Lato;
  font-weight: 200;
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

const RecLink = styled(Browse)`
  padding: 0.5rem 1rem;
  margin: 2rem;
`;

const FoodLink = props => {
  return (
    <Link
      href={{
        pathname: "/recipe/[id]",
        query: { object: JSON.stringify(props.recipe) }
      }}
      as={`/recipe/${props.id}`}
    >
      <RecLink>Get recipe</RecLink>
    </Link>
  );
};

const Data = () => {
  return recipeData.Food.map((item, key) => {
    return (
      <Food key={key}>
        <PhotoPos>
          <Photo src={item.photo} alt={item.alt} />
          <Summary>
            <Name>{item.name}</Name>
          </Summary>
        </PhotoPos>
        {/* <Text>{item.method}</Text> */}
        <FoodLink id={item.name} recipe={item} />
      </Food>
    );
  });
};

export default function RecipeCards() {
  return (
    <Recipes>
      <Data />
    </Recipes>
  );
}
