import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  
  align-items: center;
  justify-content: space-evenly;
  min-height: 100px;
  background-color: #282c34;
  color: white;
  font-family: "Mulish", sans-serif;
  font-weight: 100;
  border-top: 4px solid red;

  Link{
    text-decoration:none;
  }

  h1{
    color:white;
    text-decoration:none;
  }
`;
export const StyledNav = styled.nav`
  background: linear-gradient(
    to right,
    #ff0000 20%,
    #7f0000 40%,
    #fe0000 60%,
    #ff0000 80%,
    #9f0000 100%
  );
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  padding-left: 3%;
  padding-right: 3%;
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Pcards = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49%;
  font-size: 20px;
  box-shadow: -10px 10px 10px grey, 10px 10px 10px grey;
`;

export const Images = styled.img`
  width: 100%;
`;

export const TinyImage = styled(Images)`
  width: 80px;
`;

export const CartImg = styled(Images)`
  width: 26px;
  margin-top:7px;
`;

export const RemoveImg = styled(Images)`
  width: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TD = styled.td`
  padding: 10px;
`;

export const P = styled(Title)`
  font-size: 24px;
  margin: 4px;
`;

export const CartButton = styled.button`
   border: none;
  background-color: #00a0ff;
  height: 2.5em;
  margin-right: 1em;
  box-shadow: 2px 2px 3px black;
  color: white;
  font-family: "Mulish", sans-serif;
  font-weight: 600;

  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: #00c0ff;
    color: black;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 10%;

  &:hover {
    box-shadow: -10px 10px 10px grey, 10px 10px 10px grey;
  }
`;
