import styled from "styled-components";
import Link from "next/link";

const Receipes = styled.ul`
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

const FoodLink = props => (
  <Link href="/recipe/[id]" as={`/recipe/${props.id}`}>
    <RecLink>Get recipe</RecLink>
  </Link>
);

export default function ReceipeCards() {
  return (
    <Receipes>
      <Food>
        <PhotoPos>
          <Photo
            src="http://drive.google.com/uc?export=view&id=1ukHPHdTpBc7R4JmtX8KRea407M5Ky-JO"
            alt="Several hands holding beer glasses"
          />
          <Summary>
            <Name>Billions upon billions</Name>
          </Summary>
        </PhotoPos>
        <Text>
          Made in the interiors of collapsing stars star stuff harvesting star
          light venture billions upon billions Drake Equation brain is the seed
          of intelligence?
        </Text>
        <FoodLink id={"Billions upon billions"} />
      </Food>
      <Food>
        <PhotoPos>
          <Photo
            src="http://drive.google.com/uc?export=view&id=1wAhdZESYZBdd23ek6dnWlm_SJ7PWk65n"
            alt="Several friends doing a toast"
          />
          <Summary>
            <Name>Drake Equation</Name>
          </Summary>
        </PhotoPos>
        <Text>
          Another world citizens of distant epochs from which we spring
          descended from astronomers Orion's sword shores of the cosmic ocean.
        </Text>
        <FoodLink id={"Drake Equation"} />
      </Food>
      <Food>
        <PhotoPos>
          <Photo
            src="http://drive.google.com/uc?export=view&id=19AjupR0SlV8y0HtzxMtQx2nqF4ERj0mg"
            alt="Three different glasses of beer"
          />
          <Summary>
            <Name>Vast cosmic arena</Name>
          </Summary>
        </PhotoPos>
        <Text>
          Galaxies the ash of stellar alchemy prime number science inconspicuous
          motes of rock and gas brain is the seed of intelligence.
        </Text>
        <FoodLink id={"Vast cosmic areana"} />
      </Food>
    </Receipes>
  );
}
