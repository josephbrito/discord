import React from "react";
import { HiHashtag as HashTagIcon } from "react-icons/hi";
import { Container, Title, Separator, Description } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon height="24px" width="24px" color="#74777a" />
      <Title>chat-livre</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
