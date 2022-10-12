import styled from "styled-components";

export const Container = styled.div`
  // background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px auto;
  width: 80%;
  height: 500px;
  color: black;
  border-radius: 50px;
`;

export const Start = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 130px;
  border-radius: 50px;
  border: none;
  background-color: black;
  color: white;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  box-shadow: 4px 4px 5px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Image = styled.img`
  margin-left: 20px;
`;
