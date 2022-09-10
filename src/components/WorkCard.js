import styled from "styled-components";
import { Link } from "react-router-dom";
const WorkCard = (props) => {
  const { entry } = props;
  return (
    <Wrap>
      <Image>
        <img
          src={entry?.fields?.thumbnail.fields.file.url}
          alt={entry.fields.title}
        />
      </Image>
      <Data>
        <Date>
          <span className="material-icons-outlined">calendar_month</span>
          <p>{entry.fields.creationDate}</p>
        </Date>
        <Title>{entry.fields.title}</Title>
        <Excerpt>{entry.fields.extract}</Excerpt>
        <ReadMore>
          <Link to={`/entrada/${entry.sys.id}`}>Read More</Link>
        </ReadMore>
      </Data>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
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
  font-weight: 500;
  margin-top: 9px;
`;
const Excerpt = styled.div`
  font-size: 1.2em;
  font-weight: 400;
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
    font-weight: 400;
  }
`;
export default WorkCard;
