import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const MyPageNavContainer = styled(Box)`
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 93vh;
`;

export const MyPageNavMenu = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #cbc6c6;
  cursor: pointer;
  :hover {
    color: #04a1ff;
  }
`;
