import { Box, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderContainer = styled(Box)`
  border-bottom: 1px solid #cccccc;
  padding: 10px;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

export const HeaderNavContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
    font-size: 20px;
    text-decoration: none !important;
    color: black;
  }
  a:hover {
    color: #04a1ff;
    font-weight: bold;
  }
`;

export const HeaderInputContainer = styled.div`
  border: 1px solid gray;
  padding: 0 1rem 0 1rem;
  border-radius: 20px;
  width: 55%;
`;
