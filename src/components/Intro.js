import styled from "styled-components";
const Intro = (props) => {
  return (
    <Wrap>
      <Name>
        <h1>
          Yadir <span>Bernal.</span>
        </h1>
      </Name>
      <Content>
        <h2>Productor Audiovisual & Desarrollador Front End Jr</h2>
        <p>
          Espíritu curioso y en busca de formas nuevas de creación y expresión.
          Amante de la comida, comunicologo/cinematógrafo de profesion y
          capoeirista por pasión, docente y desarrolador web en proceso.
        </p>
      </Content>
    </Wrap>
  );
};
const Name = styled.div`
  align-self: center;
  font-size: 70px;
  font-weight: 500;
  grid-column-start: 2;
  grid-column-end: 3;
  h1 {
    line-height: 90px;
    text-shadow: 2px 3px 3px #000;
  }
  span {
    display: block;
  }
  &:after {
    content: "";
    display: block;
    width: 40%;
    height: 15px;
    margin-top: 20px;
    background-color: #3a5a40;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    font-size: 80px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;
const Content = styled.div`
  align-self: center;
  text-align: left;
  padding-left: 15%;
  padding: 10%;
  h2 {
    font-size: 2em;
    font-weight: 600;
  }
  p {
    font-size: 1.5em;
    font-weight: 500;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 25%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    margin-top: 50px;
  }
`;
const Wrap = styled.section`
  background-color: #dad7cd;
  width: 100%;
  padding: 50px 5%;
  color: #576c7f;
  min-height: 100vh;
  background-image: url(/img/perfil.png);
  background-size: 370px 500px;
  background-repeat: no-repeat;
  background-position: 5% 50%;
  background-blend-mode: luminosity;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: 1024px) {
    gap: 50px;
    padding: 50px 5%;
  }
  @media screen and (max-width: 768px) {
    display: block;
    background-size: 330px 480px;
    background-position: 50% 120%;
    height: 150vh;
  }
`;
export default Intro;
