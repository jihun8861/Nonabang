import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import { RiRadioButtonFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import DaumPostcodeEmbed from "react-daum-postcode";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame = styled.div`
  width: 95%;
  height: 100%;
`;

const TitleText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 46px;
  margin-top: 50px;
`;
const InfoFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const InfoTitle = styled.h2`
  font-size: 26px;
`;

const TopLine = styled.hr`
  border: solid 1.5px;
  margin-top: 20px;
`;

const BoxFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: none;
  position: relative;
  border-bottom: solid 1px #e0e0e0;
`;

const BoxName = styled.div`
  width: 12%;
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

const BoxInfo = styled.div`
  width: 88%;
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = styled.select`
  padding-left: 20px;
  font-size: 18px;
  width: 150px;
  height: 60px;
  border: solid 1px #dbdbdb;
  transition: border 0.5s ease;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "white")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Option = styled.option`
  font-size: 18px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 19px;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;

const ImageBtn = styled.button`
  position: relative;
  padding-left: 20px;
  font-size: 18px;
  width: 170px;
  height: 50px;
  border: solid 1px #cecece;
  transition: border 0.5s ease;
  cursor: pointer;
  background-color: transparent;
  font-weight: bold;

  &:hover {
    border: solid 0.5px #dbdbdb;
    background-color: #f8f8f8;
    transition: background-color 0.3s ease;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  font-size: 18px;
  border: solid 1px #dbdbdb;
  transition: border 0.5s ease;
  line-height: 1.6;
  resize: none;

  &:hover {
    border: solid 0.5px #dbdbdb;
    transition: background-color 0.3s ease;
  }

  &::placeholder {
    white-space: pre-wrap;
    text-indent: 0;
  }
`;

const CharCount = styled.div`
  font-size: 15px;
  color: #888;
  margin: 5px 0 0 5px;
  text-align: left;
`;

const RegistrationBtnSpace = styled.div`
  display: flex;
  algin-items: center;
  justify-content: center;
  padding: 100px 0 100px 0;
`

const RegistrationBtn = styled.button`
  width: 220px;
  height: 80px;
  color:white;
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  background-color: #FE8C12;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f08e24;
  }
`

const PlusIcon = styled(GoPlus)`
  font-size: 24px;
  position: absolute;
  left: 30px;
  top: 12px;
`

const Modal = styled.div`
  width: 500px;
  height: 500px;
  border: solid 1px;
  z-index: 100;
position: absolute;
top: 50px;
left: 250px;
`

const RegistrationContent = () => {
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedSecondFloor, setSelectedSecondFloor] = useState("");
  const [elevator, setElevator] = useState("없음");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [areaPyeong, setAreaPyeong] = useState("");
  const [areaSquareMeter, setAreaSquareMeter] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [postCode, setPostCode] = useState("");
  const [modal, setModal] = useState(false);

  const handleFirstDropdownChange = (e) => {
    setSelectedFloor(e.target.value);
    setSelectedSecondFloor("");
  };

  const renderOptions = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <Option key={index + 1} value={index + 1}>
        {index + 1}층
      </Option>
    ));
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 40) {
      setTitle(value);
    }
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    if (value.length <= 1000) {
      setDescription(value);
    }
  };

  const handleAreaPyeongChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAreaPyeong(value);
      if (value) {
        setAreaSquareMeter((value * 3.3058).toFixed(2));
      } else {
        setAreaSquareMeter("");
      }
    }
  };

  const handleAreaSquareMeterChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAreaSquareMeter(value);
      if (value) {
        setAreaPyeong((value / 3.3058).toFixed(2));
      } else {
        setAreaPyeong("");
      }
    }
  };

  const handleRoomCountChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setRoomCount(value);
    }
  };

  const handleSelectComplete = (data) => {
    const adress = data.adress;
    setPostCode(adress);
    setModal(false);
    console.log(adress);
  }

  return (
    <Container>
    
      {modal && (
        <Modal>
        <DaumPostcodeEmbed style={{ width: "100%", height: "100%" }}
          onComplete={handleSelectComplete}/>
        </Modal>
      )}
      
      <Frame>
        <TitleText>방 등록</TitleText>
        <InfoFrame>
          <InfoTitle>매물 정보</InfoTitle>
          <h3><span style={{ color: "#FE8C12",marginRight: "4px"}}>*</span>필수입력 항목</h3>
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
                <SearchBtn onClick={()=>{setModal(true)}}>검색</SearchBtn>
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
                  <TextBox
                    style={{ width: "150px" }}
                    placeholder="평수 입력"
                    value={areaPyeong}
                    onChange={handleAreaPyeongChange}
                  />
                  <Unit>평</Unit>
                </TextBoxContainer>
                <span style={{ fontWeight: "bold", padding: "10px 10px" }}>
                  =
                </span>
                <TextBoxContainer>
                  <TextBox
                    style={{ width: "150px" }}
                    placeholder="m² 입력"
                    value={areaSquareMeter}
                    onChange={handleAreaSquareMeterChange}
                  />
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
                  <TextBox
                    style={{ width: "160px" }}
                    value={roomCount}
                    onChange={handleRoomCountChange}
                  />
                  <Unit>개</Unit>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>추가 정보</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>층 수</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <h4>전체층 수</h4>
              <TextBoxFrame>
                <DropdownContainer>
                  <Dropdown
                    value={selectedFloor}
                    onChange={handleFirstDropdownChange}
                  >
                    <Option value="">선택</Option>
                    {renderOptions(25)}
                  </Dropdown>
                </DropdownContainer>
                <DropdownContainer style={{ marginLeft: "40px" }}>
                  <Dropdown
                    value={selectedSecondFloor}
                    onChange={(e) => setSelectedSecondFloor(e.target.value)}
                    disabled={!selectedFloor}
                  >
                    <Option value="">선택</Option>
                    {selectedFloor &&
                      renderOptions(parseInt(selectedFloor, 10))}
                  </Dropdown>
                </DropdownContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>엘리베이터</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <TextBoxFrame>
                <RadioGroup>
                  <RadioLabel onClick={() => setElevator("없음")}>
                    <RiRadioButtonFill
                      color={elevator === "없음" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    없음
                  </RadioLabel>
                  <RadioLabel onClick={() => setElevator("있음")}>
                    <RiRadioButtonFill
                      color={elevator === "있음" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    있음
                  </RadioLabel>
                </RadioGroup>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>시설 정보</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>난방 시설</h4>            
          </BoxName>
          <BoxInfo>

          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>냉방 시설</h4>
          </BoxName>
          <BoxInfo>

          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>생활 시설</h4>
          </BoxName>
          <BoxInfo>

          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>보안 시설</h4>
          </BoxName>
          <BoxInfo>

          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>기타 시설</h4>
          </BoxName>
          <BoxInfo>

          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>사진 등록</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>일반 사진</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <ImageBtn><PlusIcon/>사진추가</ImageBtn>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>상세 설명</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>제목</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox
                    style={{ width: "100%" }}
                    placeholder="리스트에 노출되는 문구입니다. 40자 이내로 작성해주세요."
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <CharCount>{title.length}/40</CharCount>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>상세설명</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextArea
                    placeholder="매물 상세 페이지에 노출되는 문구입니다.
                    1000자 이내로 작성해주세요."
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <CharCount>{description.length}/1000</CharCount>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>
        
        <RegistrationBtnSpace>
        <RegistrationBtn>방 등록</RegistrationBtn>
        </RegistrationBtnSpace>
      </Frame>
    </Container>
  );
};

const Registration = () => {
  return <Main children={<RegistrationContent />} />;
};

export default Registration;