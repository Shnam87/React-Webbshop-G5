import styled from "styled-components";

export const StyledHeader = styled.header`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100px;
  color: white;
  font-family: "Mulish", sans-serif;
  font-weight: 100;
  border-top: 4px solid red;

  Link {
    text-decoration: none;
  }

  h1 {
    color: black;
    text-shadow:0;
    text-decoration: none;
  }
`;

export const Background = styled.div`
 overflow:hidden;
 position:relative;
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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Section = styled.section`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SectionImage = styled(Section)`
  grid-column: 1;
  padding-left: 1em;
`;

export const Pcards = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  width: 90%;
  margin-inline: 4em;
  background-color: white;
  margin-top: 1em;
  padding-block: 1em;
  margin-inline: auto;
  border-bottom: solid 2px lightgrey;

  &:last-child {
    margin-bottom: 2em;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const Images = styled.img`
  width: 600px;

  margin-inline: auto;
`;

export const TinyImage = styled(Images)`
  width: 80px;
`;

export const CartImg = styled(Images)`
  width: 26px;
  margin-top: 7px;
`;

export const RemoveImg = styled(Images)`
  width: 20px;
`;

export const Title = styled.h1`
  text-align: left;
  margin-left: 5%;
  margin-top:0;
`;

export const TD = styled.td`
  padding: 10px;
`;

export const P = styled(Title)`
  font-size: 24px;
  margin: 4px;
  color: black;
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
