import { useEffect } from "react";
import Main from "./Main";
import styled from "styled-components";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { PiElevatorLight } from "react-icons/pi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { GiMoneyStack } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  height: 2600px;
  background-color: white;
  padding: 0 20% 0 20%;
  margin-top: 100px;
`;

const Frame = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TopFrame = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;

const ImageFrameLeft = styled.div`
  width: 49%;
`;

const ImageFrameRight = styled.div`
  width: 49%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
`;

const BottomFrame = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 100px;
`;

const InfoArea = styled.div`
  width: 60%;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const RowBoxContainer = styled.div`
  width: 100%;;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const RowBoxContainerLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const RowBoxContainerRight = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const DetailRowBox = ({ leftSide, rightSide }) => {
  return (
    <RowBoxContainer>
    <RowBoxContainerLeft>
      <h3>{leftSide}</h3>
    </RowBoxContainerLeft>
    <RowBoxContainerRight>
      <h4>{rightSide}</h4>
    </RowBoxContainerRight>
  </RowBoxContainer>
  )
}

const SimpleTextBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(252, 252, 252);
  border: 1px solid lightgray;
  padding: 0 5% 0 5%;
`;

const FollowBoxContainer = styled.div`
  width: 35%;
  height: 600px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  right: 0;
  top: 500px;
  padding: 4% 4% 4% 4%;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.1), 5px 5px 10px rgba(0, 0, 0, 0.1), 5px -5px 10px rgba(0, 0, 0, 0.1);
`;

const FollowBoxContainerBoldRow = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const FollowBoxContainerThinRow = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FollowBox = () => {
  return (
    <FollowBoxContainer>
      <FollowBoxContainerBoldRow style={{ justifyContent: "space-between" }}>
        <div style={{ padding: "2%", border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }}>
          매물번호 No.1323123
        </div>
        <IoMdShare style={{ fontSize: 30 }} />
      </FollowBoxContainerBoldRow>
      <FollowBoxContainerBoldRow>
        <h2>월세 5000/50</h2>
      </FollowBoxContainerBoldRow>
      <FollowBoxContainerThinRow>
        최근 7일 조회수 10
      </FollowBoxContainerThinRow>
      <FollowBoxContainerBoldRow style={{ height: "150px", flexDirection: "row", justifyContent: "space-between" }}>
        <div style={{ width: "45%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <IoHomeOutline /><h5 style={{ fontSize: 20 }}>투룸</h5>
        </div>
        <div style={{ width: "45%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <TfiRulerAlt2 /><h5 style={{ fontSize: 20 }}>27.72㎡</h5>
        </div>
        <div style={{ width: "45%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <PiElevatorLight /><h5 style={{ fontSize: 20 }}>고층/3층</h5>
        </div>
        <div style={{ width: "45%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <GiMoneyStack /><h5 style={{ fontSize: 20 }}>1만원</h5>
        </div>
      </FollowBoxContainerBoldRow>
      <FollowBoxContainerThinRow>
        <h4>방/욕실</h4><span>2개/1개</span>
      </FollowBoxContainerThinRow>
      <FollowBoxContainerThinRow>
        <h4>위치</h4><span>서울특별시 강서구 동촌동</span>
      </FollowBoxContainerThinRow>
      <hr style={{ border: "1px solid lightgray", margin: "15px 0" }} />
      <FollowBoxContainerBoldRow style={{ height: "100px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-around" }}>
        <h4>노나방룸메를원해요 님</h4>
        <h5 style={{ color: "gray" }}>안녕하세요 룸메이트를 구하고 싶은 24살 남성입니다</h5>
      </FollowBoxContainerBoldRow>
    </FollowBoxContainer>
  )
};

const KakaoMap = () => {
  useEffect(() => {
    // 카카오맵 스크립트가 로드된 후 실행될 함수
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=558d681fe7c83dd239a96533b3e7313f&libraries=services';
    script.async = true;
    script.onload = () => {
      // 카카오맵을 초기화하는 코드
      const { kakao } = window;

      // 지도를 표시할 div를 선택합니다.
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      // 지도를 생성합니다
      const map = new kakao.maps.Map(container, options);

      // 마커를 생성합니다
      const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 마커를 지도에 표시합니다
      marker.setMap(map);
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '500px'
      }}
    />
  );
};

const DetailRoomContent = () => {

  return (
    <Container>
      <Frame>
        <TopFrame>
          <ImageFrameLeft>
            <img src="https://media.istockphoto.com/id/1496273095/ko/%EC%82%AC%EC%A7%84/%EC%8A%A4%EB%A7%88%ED%8A%B8-tv-%EC%BA%90%EB%B9%84%EB%8B%9B-%EC%86%8C%ED%8C%8C-%EC%84%A0%EC%9D%B8%EC%9E%A5-%EC%8B%9D%EB%AC%BC-%EC%BB%A4%ED%94%BC-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%9D%B4-%EC%9E%88%EB%8A%94-%EA%B1%B0%EC%8B%A4-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4.webp?s=2048x2048&w=is&k=20&c=WVD1DhtsF4v5bYTIK-fRwzi9JJgx-4PaCNdA2LHXW4s=" style={{ width: "100%", height: "99%" }} />
          </ImageFrameLeft>
          <ImageFrameRight>
            <img src="https://media.istockphoto.com/id/1490571644/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EB%B0%94%EB%8B%A5%EC%9D%B4-%EC%9E%88%EB%8A%94-%EA%B1%B0%EC%8B%A4%EC%9D%98-%EB%94%94%EC%A7%80%ED%84%B8-%EC%83%9D%EC%84%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80.webp?s=2048x2048&w=is&k=20&c=Q2Lh7EMympWZsXqhkDi_zLfl41wd6NvlUUl-QvBVqVQ=" style={{ width: "49%", height: "49%" }} />
            <img src="https://cdn.pixabay.com/photo/2016/11/14/03/39/interior-1822511_960_720.jpg" style={{ width: "49%", height: "49%" }} />
            <img src="https://cdn.pixabay.com/photo/2020/01/23/02/29/house-4786769_960_720.jpg" style={{ width: "49%", height: "49%" }} />
            <img src="https://media.istockphoto.com/id/1885760273/ko/%EC%82%AC%EC%A7%84/%EA%B8%88%EC%83%89%EC%9C%BC%EB%A1%9C-%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%A5%BC-%EC%A4%80-%EC%9A%95%EC%8B%A4%EA%B3%BC-%EC%B4%88%EB%A1%9D%EC%83%89-%EC%A7%80%ED%95%98%EC%B2%A0-%ED%83%80%EC%9D%BC%EB%A1%9C-%EB%A7%88%EA%B0%90%EB%90%9C-%EC%83%A4%EC%9B%8C%EC%8B%A4.webp?s=2048x2048&w=is&k=20&c=Qm8r-q4Dy7W9LIODxhFJVnoQaCkTE6mt18HUmWSc9Ko=" style={{ width: "49%", height: "49%" }} />
          </ImageFrameRight>
        </TopFrame>
        <BottomFrame>
          <FollowBox />
          <InfoArea>
            <SimpleTextBox>
              <div style={{ width: "35%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <IoIosInformationCircleOutline fontSize={25} />
                <h3>이런 특징이 있어요</h3>
              </div>
              <div style={{ width: "15%", height: "30%", border: "1px solid gray", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                풀옵션
              </div>
            </SimpleTextBox>
            <DetailRowBox leftSide={<h2>가격정보</h2>} />
            <DetailRowBox leftSide={"월세"} rightSide={"5000/50"} />
            <DetailRowBox leftSide={"관리비"} rightSide={"매월 1만원"} />
            <DetailRowBox leftSide={"주차가능여부"} rightSide={"쌉가능"} />
            <DetailRowBox leftSide={"월세"} rightSide={"5000/50"} />
            <DetailRowBox leftSide={"예상주거비용"} rightSide={"월세 + 관리비 / 2"} />
          </InfoArea>

          <InfoArea style={{ marginTop: "100px" }}>
            <DetailRowBox leftSide={<h2>상세정보</h2>} />
            <DetailRowBox leftSide={"층수"} rightSide={"3층"} />
            <DetailRowBox leftSide={"전용/공급면적"} rightSide={"27.72㎡/27.81㎡"} />
            <DetailRowBox leftSide={"방 수/욕실 수"} rightSide={"2개/1개"} />
            <DetailRowBox leftSide={"입주가능일"} rightSide={"즉시 입주"} />
            <DetailRowBox leftSide={"예상주거비용"} rightSide={"월세 + 관리비 / 2"} />
          </InfoArea>

          <InfoArea style={{ marginTop: "100px" }}>
            <div style={{ width: "100%", height: "100px" }}><h2>위치 및 주변시설</h2></div>
            <div style={{ width: "100%", height: "100px" }}><h4>서울특별시 강서구 등촌동</h4></div>
            <div id="map" style={{ width: "100%", height: "400px", border: "1px solid black" }}>
              지도가 왜 안뜨는 걸까? ㅅㅂ
              <KakaoMap/>
            </div>
          </InfoArea>
        </BottomFrame>
      </Frame>
    </Container>
  );
};

const DetailRoom = () => {
  return <Main children={<DetailRoomContent />} />;
};

export default DetailRoom;