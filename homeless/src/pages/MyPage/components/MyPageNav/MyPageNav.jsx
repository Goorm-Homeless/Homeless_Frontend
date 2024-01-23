import { Button } from "@chakra-ui/react";
import * as S from "./MyPageNav.styles";
import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const MyPageNav = () => {
  const navigate = useNavigate();
  const handleMoveToPath = (path) => {
    navigate(`/mypage/${path}`);
  };
  return (
    <>
      <S.MyPageNavContainer>
        <S.MyPageNavMenu onClick={() => handleMoveToPath("like")}>
          <BellIcon mr="3" />찜 목록
        </S.MyPageNavMenu>
        <S.MyPageNavMenu onClick={() => handleMoveToPath("settingReview")}>
          <SettingsIcon mr="3" />내 리뷰 관리
        </S.MyPageNavMenu>
      </S.MyPageNavContainer>
    </>
  );
};

export default MyPageNav;
