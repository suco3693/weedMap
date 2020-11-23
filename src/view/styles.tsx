import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #F2F5F5;
`;

export const AppHeader = styled.div<{isMobile: boolean}>`
  ${({isMobile})=> isMobile? "padding: 0 20px;": "padding: 0 20vw;"}
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppFooter = styled.div`
  height: 15vh;
  display: block;
  width: 100%;
  background-color: #222222;
`;

export const AppFooterBar = styled.div`
  height: 2em;
  display: block;
  width: 100%;
  background-color: #00CDBE;
`;