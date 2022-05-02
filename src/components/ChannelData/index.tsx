import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { MdAlternateEmail as InputIcon } from "react-icons/md";

import { Container, Messages, InputWrapper, Input } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="José de Brito"
            date="02/05/2022"
            content="Há uma chance de você ser imortal, até porque você ainda não morreu"
          />
        ))}

        <ChannelMessage
          author="Allana"
          date="02/05/2022"
          content={
            <>
              <Mention>@José de Brito</Mention>, Você é muito lindo cara ❤
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon height="24px" width="24px" color="#74777a" />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
