import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  Container,
  HeaderContentContainer,
  MainContentContainer,
  FooterContentContainer,
  TestContainer,
  SolidDivider,
  MainContentImage,
  MainTextContainer,
  LogoContainer,
} from "../styles/Styles";

const Card = () => (
  <>
    <Container>
      <TestContainer>
        <HeaderContentContainer>
          <h1>Rami Bakir</h1>
        </HeaderContentContainer>
        <MainContentContainer>
          <MainTextContainer>
            <h3>
              WORK <br />
              IN <br />
              PROGRESS
            </h3>
            <p>
              Welcome to my what will be my portfolio hosted on GitHub pages.
              It's still a work in progress, but will be updated as soon as I am
              finished :)
            </p>
          </MainTextContainer>
          <MainContentImage src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        </MainContentContainer>
        <FooterContentContainer>
          <SolidDivider />
          <IconButton icon={<FaGithub />} />
          <IconButton icon={<FaLinkedinIn />} />
        </FooterContentContainer>
      </TestContainer>
    </Container>
  </>
);

export default Card;
