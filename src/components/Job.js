import styled from "styled-components";
const Job = (props) => {
  return (
    <>
      <Banner url={props.thumbnail.fields.file.url} />
      <Wrap>
        <Title>{props.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: props.richTextContent }} />
        <Date>{props.creationDate}</Date>
      </Wrap>
    </>
  );
};
const Banner = styled.div`
  min-height: 100vh;
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media screen and (max-width: 768px) {
    background-attachment: scroll;
    min-height: 600px;
  }
`;
const Wrap = styled.div`
  padding: 2em 5%;
  background-color: #dad7cd;
`;
const Title = styled.h1`
  margin: 2em 0;
  text-align: center;
  font-size: 4em;
  color: #576c7f;
`;
const Content = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 1em;
  }
  ul,
  li {
    margin-left: 1em;
  }
`;
const Date = styled.div`
  text-align: right;
  margin: 2em 0;
  font-size: 1.2em;
  font-weight: 400;
`;

export default Job;
