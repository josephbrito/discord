import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
  > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  > div span {
    margin-left: 5px;
    color: var(--senary);
  }
  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
`;
