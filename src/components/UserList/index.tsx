import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="José de Brito" />

      <Role>Offline - 6</Role>
      <UserRow nickname="Allana" isBot />
      <UserRow nickname="omeninodocorsinha" />
      <UserRow nickname="zrk" />
      <UserRow nickname="vitor" />
      <UserRow nickname="h3ved" />
      <UserRow nickname="mx_14" />
    </Container>
  );
};

export default UserList;
