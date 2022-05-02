import React, { ReactHTML } from "react";

import ChannelButton from "../ChannelButton";

import { MdAdd as AddIcon } from "react-icons/md";

import { Container, Category } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddIcon cursor="pointer" color="#74777a" fontSize="21px" />
      </Category>

      <ChannelButton channelName="conversas" />
      <ChannelButton channelName="estudo" />
      <ChannelButton channelName="critical ops" />
      <ChannelButton channelName="pensando na vida" />
      <ChannelButton channelName="alfas kkk" />
    </Container>
  );
};

export default ChannelList;
