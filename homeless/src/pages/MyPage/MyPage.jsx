import { useParams } from "react-router-dom";
import * as S from "./MyPage.styles";
import MyPageNav from "./components/MyPageNav/MyPageNav";
import { MyPageLike } from "./components/MyPageLike/MyPageLike";
import { MyPageSettingReview } from "./components/MyPageSettingReview/MyPageSettingReview";

const MyPage = () => {
  const { path } = useParams();

  const renderMyPageContent = () => {
    switch (path) {
      case "like":
        return <MyPageLike />;
      case "settingReview":
        return <MyPageSettingReview />;
      default:
        return <MyPageLike />;
    }
  };
  return (
    <S.MyPageContainer>
      <MyPageNav />
      <S.MyPageContentConatiner>{renderMyPageContent()}</S.MyPageContentConatiner>
    </S.MyPageContainer>
  );
};

export default MyPage;
