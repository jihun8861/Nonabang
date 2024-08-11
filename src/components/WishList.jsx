import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const MiniTextFrame = styled.div`
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
  width: 22%;
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

const WishList = () => (
  <Container>
    <MiniTextFrame>
      <p>찜한방</p><NumberText>5개</NumberText>
    </MiniTextFrame>
    <ListBox>
      {[...Array(5)].map((_, idx) => (
        <FrameBox key={idx}>
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
      ))}
    </ListBox>
  </Container>
);

export default WishList;
