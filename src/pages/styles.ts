import styled from "styled-components";

export const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
  width: 85%;
  min-height: 610px;
  color: black;
  border-radius: 20px;
  border: 1px solid #d3d3d3;
  padding: 50px;
  //box-shadow: 4px 4px 5px 6px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1``;

export const Bold = styled.h4`
  margin-right: 5px;
`;

export const Ingredient = styled.div`
  /* text-align: left; */
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Video = styled.iframe`
  width: 853px;
  height: 480px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 80px;
  border-radius: 50px;
  border: none;
  background-color: black;
  color: white;
  font-size: 25px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  box-shadow: 4px 4px 5px 6px rgba(0, 0, 0, 0.3);
  margin-top: 50px;
  cursor: pointer;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
  
`
