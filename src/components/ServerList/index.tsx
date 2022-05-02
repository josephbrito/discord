import React from "react";

import { Container, Separator } from "./styles";

import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={6} />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={17} />
      <ServerButton />
      <ServerButton hasNotifications mentions={9} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
