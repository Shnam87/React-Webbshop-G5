import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Gradient>
      <FooterContainer>
        <FooterColumn>
          <Title>Säkerhet</Title>
          <FooterItem>Kundsäkerhet</FooterItem>
          <FooterItem>Locketpaketet</FooterItem>
          <FooterItem>Locketbetalning</FooterItem>
          <FooterItem>Falska mail</FooterItem>
          <FooterItem>Anmäl störande reklam</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <Title>Villkor</Title>
          <FooterItem>Användarvillkor</FooterItem>
          <FooterItem>Personuppgiftshantering</FooterItem>
          <FooterItem>Cookies</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <Title>För företag</Title>
          <FooterItem>För företag</FooterItem>
          <FooterItem>Öppna butik</FooterItem>
          <FooterItem>Öppna fordonsbutik</FooterItem>
          <FooterItem>Visa alla butiker</FooterItem>
          <FooterItem>Inloggning för butiker</FooterItem>
          <FooterItem>Administrera butiksannonser</FooterItem>
        </FooterColumn>
        <FooterColumn>
          <Title>Locket</Title>
          <FooterItem>Om Locket</FooterItem>
          <FooterItem>Press</FooterItem>
          <FooterItem>Jobba på Locket</FooterItem>
          <FooterItem>Kontakta oss</FooterItem>
          <FooterItem>Inspiration</FooterItem>
          <FooterItem>Tips och guider</FooterItem>
        </FooterColumn>
      </FooterContainer>
    </Gradient>
  );
}

const FooterContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: left;
  padding-left: 1em;
  background-color: white;
`;

const Title = styled.h4`
  margin-bottom: 0.7em;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterItem = styled.div`
  color: #010101;
  padding-bottom: 0.5em;
  opacity: 0.8;
  font-size: 14px;
  &:hover{cursor:pointer;}
`;

const Gradient = styled.div`
  padding-top: 0.7em;
  background: linear-gradient(
    to right,
    #ff0000 20%,
    #7f0000 40%,
    #fe0000 60%,
    #ff0000 80%,
    #9f0000 100%
  );
`;

export default Footer;
