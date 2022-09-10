import styled from "styled-components";
const SkillCard = (props) => {
  return (
    <Wrap>
      <Icon>
        <img src={props.icon} alt={props.name} />
      </Icon>
      <h4>{props.name}</h4>
      <Loader quantity={props.level} />
      <p>{props.level}%</p>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
  border: 3px solid #344e41;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  h4 {
    font-size: 1.5rem;
    text-align: center;
  }
  p {
    text-align: right;
  }
  @media screen and (max-width: 768px) {
    h4 {
      text-align: center;
      padding-top: 20px;
    }
  }
`;

const Loader = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 10px;
  border: 1px solid #a3b18a;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: ${(props) => props.quantity}%;
    height: 100%;
    background-color: #a3b18a;
  }
`;
const Icon = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${(props) => props.color};
  right: -15px;
  top: -15px;
  img {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 768px) {
    right: calc(50% - 15px);
  }
`;

export default SkillCard;
