import styled from "styled-components";
import { Link } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <Wrap>
      <Image>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png"
          alt="React"
        />
      </Image>
      <Data>
        <Date>
          <span className="material-icons-outlined">calendar_month</span>
          <p>Junio 30 2022</p>
        </Date>
        <Title>Mi titulo</Title>
        <Excerpt>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          in assumenda deserunt possimus harum nulla corrupti totam? Ea ipsa
          quod soluta animi suscipit. Esse sequi facere voluptatibus unde error
          beatae.
        </Excerpt>
        <ReadMore>
          <Link to="/hjasg">Read More</Link>
        </ReadMore>
      </Data>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 14px 28px rgb(0, 0, 0, 0.25), 0 10px 10px rgb(0, 0, 0, 0.22);
`;
const Image = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: white;
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Data = styled.div`
  padding: 15px;
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
    margin-right: 5px;
  }
`;
const Title = styled.h4`
  font-size: 25px;
  margin-top: 5px;
`;
const Excerpt = styled.div`
  font-size: 14px;
  margin-top: 9px;
`;

const ReadMore = styled.div`
  display: flex;
  margin-top: 9px;
  justify-content: flex-end;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
  }
`;
export default WorkCard;
