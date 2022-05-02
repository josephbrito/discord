import React from "react";
import { IoMdSettings as SettingsIcon } from "react-icons/io";
import { MdHeadphones as HeadphoneIcon } from "react-icons/md";
import { HiMicrophone as MicIcon } from "react-icons/hi";

import { Container, Profile, Avatar, UserData, Icons } from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>José de Brito</strong>
          <span>#7453</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon width="16px" height="16px" color="#74777a" cursor="pointer" />
        <HeadphoneIcon
          width="16px"
          height="16px"
          color="#74777a"
          cursor="pointer"
        />
        <SettingsIcon
          width="16px"
          height="16px"
          color="#74777a"
          cursor="pointer"
        />
      </Icons>
    </Container>
  );
};

export default UserInfo;
