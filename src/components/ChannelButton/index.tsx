import React from "react";
import { HiHashtag as HashTagIcon } from "react-icons/hi";
import {
  IoMdPersonAdd as InviteIcon,
  IoMdSettings as SettingsIcon,
} from "react-icons/io";
import { Container } from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashTagIcon height="24px" width="24px" color="#74777a" />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon width="16px" height="16px" color="#74777a" />
        <SettingsIcon width="16px" height="16px" color="#74777a" />
      </div>
    </Container>
  );
};

export default ChannelButton;
