import styled from "styled-components";

export const Container = styled.div`
  grid-area: SN;
  background-color: var(--secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;
export const ExpandIcon = styled.span`
  &::before {
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: "";
    display: inline-block;
    height: 5px;
    left: 0.15em;
    position: relative;
    margin-bottom: 3px;
    transform: rotate(-55deg);
    width: 5px;
    cursor: pointer;
    transform: rotate(135deg);
    color: var(--white);
  }
`;
