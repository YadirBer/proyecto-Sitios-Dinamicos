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
        <h2>Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          officia deleniti ea quis repellat in quas magni, vero odio eos ex
          accusamus rerum est adipisci! Natus animi delectus quidem architecto!
        </p>
      </Content>
    </Wrap>
  );
};
const Name = styled.div`
  align-self: center;
  font-size: 80px;
  font-weight: 700;
  h1 {
    line-height: 90px;
    text-shadow: 1px 2px 12px #000;
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
    background-color: #ffae28;
  }
`;
const Content = styled.div`
  align-self: center;
  text-align: left;
  padding-left: 15%;
  padding: 10%;
  h2 {
    font-size: 40px;
  }
`;
const Wrap = styled.section`
  background-color: #323444;
  width: 100%;
  padding: 50px 10%;
  color: white;
  min-height: 100vh;
  background-image: url(./img/kk.jpeg);
  background-size: 300px 500px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
`;
export default Intro;
