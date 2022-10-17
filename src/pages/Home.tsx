import React, { useState } from "react";
import axios from "axios";
import Started from "../components/Started";
import {
  Bold,
  Button,
  Container,
  Description,
  Image,
  Ingredient,
  Tags,
  Title,
  Video,
  Icon,
  Ingredients,
  TitleIngredient,
  Instructions,
} from "./styles";
import dot from "./../assets/497.jpg";

type HomeProps = {
  getMeal?: () => void;
};

type DataMeal = {
  strYoutube: string;
  strInstructions: string;
  strCategory: string;
  strArea: string;
  strMeal: string;
  strMealThumb: string;
  ingredientsList: {
    ingredient: string;
    measure: string;
  }[];
};

const Home: React.FC<HomeProps> = () => {
  const [meal, setMeal] = useState<any>();
  const [data, setData] = useState<DataMeal>();

  const getMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        const res = response.data.meals[0];
        setMeal(res);

        const {
          strYoutube,
          strInstructions,
          strCategory,
          strArea,
          strMeal,
          strMealThumb,
          ...ingredientsMeasure
        } = res;

        const keys = Object.keys(ingredientsMeasure);
        const ingredientsData = keys.filter((e) => e.includes("strIngredient"));
        const measureData = keys.filter((e) => e.includes("strMeasure"));
        const ingredientsList = ingredientsData
          .map((value, index) => ({
            ingredient: ingredientsMeasure[value],
            measure: ingredientsMeasure[measureData[index]],
          }))
          .filter((v) => v.ingredient);

        const dataMeal = {
          strYoutube,
          strInstructions,
          strCategory,
          strArea,
          strMeal,
          strMealThumb,
          ingredientsList,
        };

        setData(dataMeal);
      });
  };

  const youtube = `https://www.youtube.com/embed/${meal?.strYoutube.slice(
    -11
  )}`;

  return (
    <div className="Home">
      {meal === undefined ? (
        <Started getMeal={getMeal} />
      ) : (
        <Container>
          <Image src={meal?.strMealThumb} />
          <Title>{meal?.strMeal}</Title>
          <Description>
            <Tags>
              <Bold>Area:</Bold>
              <p>{meal?.strArea}</p>
            </Tags>
            <Tags>
              <Bold>Type:</Bold>
              <p>{meal?.strCategory}</p>
            </Tags>
          </Description>
          <Instructions>{meal?.strInstructions}</Instructions>
          <Ingredients>
            <TitleIngredient>Ingredients:</TitleIngredient>
            {data?.ingredientsList?.map((i) => (
              <Ingredient>
                <Icon src={dot} />
                <p>
                  {i.ingredient}-{i.measure}
                </p>
              </Ingredient>
            ))}
          </Ingredients>
          <Video src={youtube}></Video>
          <Button onClick={getMeal}>Get New Meal</Button>
        </Container>
      )}
    </div>
  );
};

export default Home;
