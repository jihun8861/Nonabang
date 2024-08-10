import React, { useState } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import { IoMdHeart } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 100px 0;
`;

const Frame = styled.div`
  width: 85%;
  height: auto;
`;

const HeaderListFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  border-bottom: solid 3px #f9f9f9;
`;

const HeaderList = styled.div`
  width: 230px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#FE8C12" : "black")};
  border-bottom: ${(props) => (props.active ? "solid 3px #FE8C12" : "none")};
  transition: border-bottom 0.3s ease, color 0.3s ease;
  margin-bottom: -3px;

  &:hover {
    color: #fe8c12;
  }
`;

// 공통된 부분
const MiniText = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NumberText = styled.div`
  margin-left: 7px;
  color: #fe8c12;
  font-weight: bold;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FrameBox = styled.div`
  width: 22%; /* 4개씩 나열되도록 너비를 24%로 설정 (마진 고려) */
  height: 430px;
  position: relative;
  cursor: pointer;
  margin-bottom: 60px;
  margin-right: 4%;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const ImageFrame = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  border-radius: 5px;
  background-image: url("/images/banner.png");
  background-size: 100% 100%;
`;

const HeartIcon = styled(IoMdHeart)`
  font-size: 28px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  color: #d84d51;
`;

const InfoFrame = styled.div`
  width: 100%;
  height: 155px;
  h2 {
    padding: 8px 0 8px 0;
    font-size: 23px;
  }
`;

const DetailText = styled.div`
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  span {
    margin-right: 5px;
    position: relative;
    padding-right: 8px;

    &::after {
      content: "·";
      position: absolute;
      right: 0;
    }

    &:last-child::after {
      content: "";
    }
  }
`;

const ChatBtn = styled.button`
  width: 100%;
  height: 65px;
  border: none;
  border-radius: 3px;
  background-color: #fe8c12;
  color: white;
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f08e24;
  }
`;

// 개별 컴포넌트 생성
const MyInfo = () => (
  <div>
    <h2>내 정보</h2>
    <p>여기에 내 정보 내용이 들어갑니다.</p>
  </div>
);

const WishList = () => (
  <div>
    <MiniText>
      찜한방<NumberText>5개</NumberText>
    </MiniText>
    <ListBox>
      <FrameBox>
        <ImageFrame>
          <HeartIcon />
        </ImageFrame>
        <InfoFrame>
          <h2>월세 1,000/32</h2>
          <p>북구 화명동</p>
          <DetailText>
            <span>원룸</span>
            <span>방 1개</span>
            <span>4층</span>
            <span>66.11m²</span>
          </DetailText>
          <p style={{ color: "#a6a6ab" }}>화명동 룸메 구해요</p>
        </InfoFrame>
        <ChatBtn>채팅 문의하기</ChatBtn>
      </FrameBox>

      <FrameBox>
        <ImageFrame>
          <HeartIcon />
        </ImageFrame>
        <InfoFrame>
          <h2>월세 1,000/32</h2>
          <p>북구 화명동</p>
          <DetailText>
            <span>원룸</span>
            <span>방 1개</span>
            <span>4층</span>
            <span>66.11m²</span>
          </DetailText>
          <p style={{ color: "#a6a6ab" }}>화명동 룸메 구해요</p>
        </InfoFrame>
        <ChatBtn>채팅 문의하기</ChatBtn>
      </FrameBox>

      <FrameBox>
        <ImageFrame>
          <HeartIcon />
        </ImageFrame>
        <InfoFrame>
          <h2>월세 1,000/32</h2>
          <p>북구 화명동</p>
          <DetailText>
            <span>원룸</span>
            <span>방 1개</span>
            <span>4층</span>
            <span>66.11m²</span>
          </DetailText>
          <p style={{ color: "#a6a6ab" }}>화명동 룸메 구해요</p>
        </InfoFrame>
        <ChatBtn>채팅 문의하기</ChatBtn>
      </FrameBox>

      <FrameBox>
        <ImageFrame>
          <HeartIcon />
        </ImageFrame>
        <InfoFrame>
          <h2>월세 1,000/32</h2>
          <p>북구 화명동</p>
          <DetailText>
            <span>원룸</span>
            <span>방 1개</span>
            <span>4층</span>
            <span>66.11m²</span>
          </DetailText>
          <p style={{ color: "#a6a6ab" }}>화명동 룸메 구해요</p>
        </InfoFrame>
        <ChatBtn>채팅 문의하기</ChatBtn>
      </FrameBox>

      <FrameBox>
        <ImageFrame>
          <HeartIcon />
        </ImageFrame>
        <InfoFrame>
          <h2>월세 1,000/32</h2>
          <p>북구 화명동</p>
          <DetailText>
            <span>원룸</span>
            <span>방 1개</span>
            <span>4층</span>
            <span>66.11m²</span>
          </DetailText>
          <p style={{ color: "#a6a6ab" }}>화명동 룸메 구해요</p>
        </InfoFrame>
        <ChatBtn>채팅 문의하기</ChatBtn>
      </FrameBox>
    </ListBox>
  </div>
);

const RecentlyView = () => (
  <div>
    <MiniText>
      최근 본 방<NumberText>2개</NumberText>
    </MiniText>
  </div>
);

const MypageContent = () => {
  const [menuList, setMenuList] = useState("내 정보");

  // 선택된 메뉴에 따라 다른 컴포넌트 렌더링
  const renderContent = () => {
    switch (menuList) {
      case "내 정보":
        return <MyInfo />;
      case "찜한 방":
        return <WishList />;
      case "최근본 방":
        return <RecentlyView />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Frame>
        <HeaderListFrame>
          <HeaderList
            active={menuList === "내 정보"}
            onClick={() => setMenuList("내 정보")}
          >
            <h2>내 정보</h2>
          </HeaderList>
          <HeaderList
            active={menuList === "찜한 방"}
            onClick={() => setMenuList("찜한 방")}
          >
            <h2>찜한 방</h2>
          </HeaderList>
          <HeaderList
            active={menuList === "최근본 방"}
            onClick={() => setMenuList("최근본 방")}
          >
            <h2>최근본 방</h2>
          </HeaderList>
        </HeaderListFrame>

        {renderContent()}
      </Frame>
    </Container>
  );
};

const Mypage = () => {
  return <Main children={<MypageContent />} />;
};

export default Mypage;