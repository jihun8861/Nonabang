import React from "react";
import styled from "styled-components";
import Main from "../components/Main";

const Container = styled.div`
  width: 100%;
  height: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Frame = styled.div`
  width: 95%;
  height: 100%;
`;

const TitleText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 46px;
  margin: 50px 0 50px 0;
`;
const InfoFrame = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoTitle = styled.h2`
  font-size: 26px;
`;

const TopLine = styled.hr`
  border: solid 1.5px;
  margin-top: 20px;
`;

// 박스의 전체적인 크기 프레임
const BoxFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: none;
  position: relative;
  border-bottom: solid 1px #e0e0e0;
`;

const BoxName = styled.div`
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #fcfcfc;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-right: solid 1px #e0e0e0;
`;

// 박스의 오른쪽 정보 프레임
const BoxInfo = styled.div`
  width: 90%;
  height: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
`;

const SearchFrame = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const TextBoxFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const TextBoxContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TextBox = styled.input`
  padding-left: 20px;
  padding-right: 40px;
  font-size: 18px;
  width: 400px;
  height: 60px;
  border: solid 1px #dbdbdb;
  transition: border 0.5s ease;

  &:hover {
    border: solid 0.5px #dbdbdb;
  }

  &:focus {
    border: solid 1px #222222;
  }
`;

const Unit = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #000;
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 60px;
  margin-left: 10px;
  border: none;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #434343;
  }
`;

const BoxInfoMap = styled.div`
  width: 500px;
  height: 350px;
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  border: solid 2px #ededed;
  border-radius: 3px;
`;

const RegistrationContent = () => {
  return (
    <Container>
      <Frame>
        <TitleText>방 등록</TitleText>
        <InfoFrame>
          <InfoTitle>매물 정보</InfoTitle>
          <h3>* 필수입력 항목</h3>
        </InfoFrame>
        <TopLine />
        <BoxFrame>
          <BoxName>
            <h4>매물 주소</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <h4>주소 검색</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox placeholder="예) 번동 10-1, 강북구 번동" />
                </TextBoxContainer>
                <SearchBtn>검색</SearchBtn>
              </TextBoxFrame>
            </SearchFrame>
            <BoxInfoMap>
              <span>주소를 검색하시면 해당 위치가 지도에 표시됩니다.</span>
            </BoxInfoMap>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>매물 크기</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <h4>전용 면적</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox style={{ width: "150px" }} placeholder="평수 입력" />
                  <Unit>평</Unit>
                </TextBoxContainer>
                <span style={{ fontWeight: "bold", padding: "10px 10px" }}>
                  =
                </span>
                <TextBoxContainer>
                  <TextBox style={{ width: "150px" }} placeholder="m² 입력" />
                  <Unit>m²</Unit>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>방 정보</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <h4>방 수</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox style={{ width: "200px" }} />
                  <Unit>개</Unit>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>
      </Frame>
    </Container>
  );
};

const Registration = () => {
  return <Main children={<RegistrationContent />} />;
};

export default Registration;
