import styled from "styled-components";


const Header = () => {

  return (
    <>
      <Nav>
        <Logo>
          <img src="/images/ndubcc_logo.png" alt="NDUBCC" />
        </Logo>
        <Name>NOTRE DAME UNIVERSITY BANGLADESH COMPUTER CLUB<br /><br />Estd. 2014</Name>
        <NavMenu>
          <a href="/">
            <span>HOME</span>
          </a>
          <a href="/about">
            <span>ABOUT</span>
          </a>
          <a href="/news">
            <span>NEWS</span>
          </a>
          <a href="/events">
            <span>EVENTS</span>
          </a>
          <a href="/contact">
            <span>CONTACT</span>
          </a>
        </NavMenu>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Name = styled.p`
    margin-left: 30px;
    margin-top: 40px;
    font-size: 25px;
    font-family: Avenir-Roman, sans-serif;
    color: rgb(249, 249, 249);
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    @media (max-width: 479px) {
      display: none;
    }
`

const Logo = styled.a`
  padding: 0;
  width: 120px;
  cursor: pointer;
  margin-top: 4px;
  max-height: 76px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  
  @media (max-width: 479px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: 25px;
  margin-left: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 17px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;