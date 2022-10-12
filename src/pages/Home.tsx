import React, { useState, useEffect } from "react";
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
} from "./styles";
import dot from "./../assets/497.jpg";

type HomeProps ={
  getMeal?: () => void
}

const Home: React.FC<HomeProps> = () => {
  const [meal, setMeal] = useState<any>();
  const [data, setData] = useState<any>([]);

  const ingredients: any = [];
  let i: any;

  const getMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        console.log(response);
        const res = response.data.meals[0];
        setMeal(res);
        // for(i = 1; i<=20 ; i++){
        //   ingredients.push(`res.strIngredient${i}`)
        // }
      });
  };

  // useEffect(() => {
  //   meal.map(() => {})
  // }, [meal]);

  // const filterByIngredient = (value: string) => {
  //   if(srtIngredient !== ""){
  //     return value
  //   }
  // }

  console.log(meal);
  // console.log(ingredients);

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
          {meal?.strInstructions}
          <h3>Ingredients:</h3>
          <Ingredient>
            <ul>
              <li>
                {meal?.strIngredient1} - {meal?.strMeasure1}
              </li>
              <li>
                {meal?.strIngredient2} - {meal?.strMeasure2}
              </li>
              <li>
                {meal?.strIngredient3} - {meal?.strMeasure3}
              </li>
              <li>
                {meal?.strIngredient4} - {meal?.strMeasure4}
              </li>
              <li>
                {meal?.strIngredient5} - {meal?.strMeasure5}
              </li>
              <li>
                {meal?.strIngredient6} - {meal?.strMeasure6}
              </li>
              <li>
                {meal?.strIngredient7} - {meal?.strMeasure7}
              </li>
              <li>
                {meal?.strIngredient8} - {meal?.strMeasure8}
              </li>
              <li>
                {meal?.strIngredient9} - {meal?.strMeasure9}
              </li>
              <li>
                {meal?.strIngredient10} - {meal?.strMeasure10}
              </li>
              <li>
                {meal?.strIngredient11} - {meal?.strMeasure11}
              </li>
              <li>
                {meal?.strIngredient12} - {meal?.strMeasure12}
              </li>
              <li>
                {meal?.strIngredient13} - {meal?.strMeasure13}
              </li>
              <li>
                {meal?.strIngredient14} - {meal?.strMeasure14}
              </li>
              <li>
                {meal?.strIngredient15} - {meal?.strMeasure15}
              </li>
              <li>
                {meal?.strIngredient16} - {meal?.strMeasure16}
              </li>
              <li>
                {meal?.strIngredient17} - {meal?.strMeasure17}
              </li>
              <li>
                {meal?.strIngredient18} - {meal?.strMeasure18}
              </li>
              <li>
                {meal?.strIngredient19} - {meal?.strMeasure19}
              </li>
              <li>
                {meal?.strIngredient20} - {meal?.strMeasure20}
              </li>
            </ul>
            <Icon src={dot} />
          </Ingredient>
          <Video src={youtube}></Video>
          <Button onClick={getMeal}>Get Meal</Button>
        </Container>
      )}
    </div>
  );
}

export default Home;
