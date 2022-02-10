import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
`;

export const TestContainer = styled.div`
  margin: 30px auto;
  width: 100%;
  position: relative;
  max-width: 1300px;
  //box-shadow: 5px 5px 5px 5px rgb(248, 244, 244);
  //background-color: #17252a;
  justify-content: center;
  align-items: center;
`;

export const HeaderContentContainer = styled.div`
  //background-color: #765bb6;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const SolidDivider = styled.hr`
  height: 3px;
  background-color: #17252a;
  width: 200px;
  margin-left: 0;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
`;

export const MainContentImage = styled(ImageContainer)`
  width: 650px;
  height: 500px;
  float: right;
`;

export const LogoContainer = styled(ImageContainer)`
  height: 600px;
  width: 200px;
`;
