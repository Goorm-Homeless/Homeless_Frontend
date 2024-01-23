import { Image, Input } from "@chakra-ui/react";
import * as S from "./Header.styles";
import { SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const isLogin = false;
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };

  return (
    <S.HeaderContainer>
      <Image src="public/images/로고.png" alt="로고" width="8%" onClick={goMain} cursor={"pointer"} />
      <S.HeaderInputContainer>
        <SearchIcon boxSize={20} />
        <Input
          outline={"none"}
          placeholder="지역, 지하철, 또는 건물명을 입력해주세요."
          width="90%"
          height={"4vh"}
          pl="10"
          pr="10"
          border="none"
          fontSize={"1.1em"}
          ml="5"
        />
      </S.HeaderInputContainer>

      <S.HeaderNavContainer>
        <Link to="/">지도</Link>
        <Link to="community">커뮤니티</Link>
        <Link to="mypage/like">마이페이지</Link>
        {isLogin ? <div>로그아웃</div> : <div>로그인</div>}
      </S.HeaderNavContainer>
    </S.HeaderContainer>
  );
};

export default Header;
