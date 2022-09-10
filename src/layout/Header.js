import styled from "styled-components";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <Head>
        <Logo>
          <Link to="/">
            <img src="/img/favic.png" alt="Logo" />
          </Link>
        </Logo>
        <Navigation />
      </Head>
    </>
  );
};
const Head = styled.header`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 8888;
  padding: 0 5%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    border-top: 2px solid red !important;
  }

  @media screen and (max-width: 1024px) {
    border-top: 2px solid green !important;
  }

  @media screen and (max-width: 768px) {
    border-top: 2px solid blue !important;
  }

  @media screen and (max-width: 600px) {
    border-top: 2px solid cyan !important;
  }

  @media screen and (max-width: 480px) {
    border-top: 2px solid magenta !important;
  }

  @media screen and (max-width: 320px) {
    background: yellow !important;
  }
`;
const Ghots = styled.div`
  width: 100%;
  height: 60px;
`;
const Logo = styled.div`
  width: 100px;
  img {
    width: 40px;
    height: 40px;
    margin-bottom: 0;
  }
`;

export default Header;
