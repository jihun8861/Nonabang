import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

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

const Date = styled.div`
  width: 100%;
  height: 60px;
  color: #555558;
  font-size: 24px;
  font-weight: 500;
  
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

const MyPost = () => (
  <Container>
    <MiniTextFrame>
      <p>내가 올린 글</p><NumberText>2개</NumberText>
    </MiniTextFrame>
    <Date>2024.08.11</Date>
    <ListBox>
      {[...Array(2)].map((_, idx) => (
        <FrameBox key={idx}>
          <ImageFrame/>
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
        </FrameBox>
      ))}
    </ListBox>
  </Container>
);

export default MyPost;
