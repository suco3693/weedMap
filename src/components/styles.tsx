import styled from "styled-components";
export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  text-align: center;
  background-color: #F2F5F5;
`;

export const AppContainer = styled.div`
   min-height: 85vh;
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

export const AppContent = styled.div<{isMobile: boolean}>`
  ${({isMobile})=> isMobile? "max-width: 90%;": "max-width: 50%;"}
  min-height: 50vh;
  margin: 10px auto;
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
`;

export const Regions = styled.div<{isMobile: boolean}>`
 ${({isMobile})=> isMobile? "width: 100%;": "width: 90%;"}
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  h2 {
    text-align: left;
  }
  ${(props) => {
    switch(props.theme){
      case "Dispensaries":
        return "order: 1"
      case "Deliveries": 
        return "order: 2"
      case "Doctors": 
        return "order: 3" 
    }

    }}
`;

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div<{isMobile: boolean}>`
  ${({isMobile})=> isMobile? "width: 100%;": "width: 60%;"}
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: #a4a2a2;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: #7e7979;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
`;


