import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

const Frame = styled.div`
    width: 45%;
    height: 700px;
    border: solid 4px #eaeaea;
    display: flex;
     align-items: center;
    justify-content: center;
`;

const FrameBox = styled.div`
    width: 80%;
    height: 80%;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    height: 300px;
    border: solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    width: 100%;
    height: 400px;
    border: solid 1px;
`;

const UserIcon = styled.img`
    width: 160px;
    height: 160px;
`;

const InfoFrame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px;
`

const InfoTitle = styled.div`
    font-size: 24px;
    font-weight: bold;

    border: sollid 1px;
`

const InfoText = styled.div`
    border: sollid 1px;
`

const MyInfo = () => (
  <Container>
    <Frame>
        <FrameBox>
        <Header>
            <UserIcon src="/images/user.svg" alt="User Icon"/>
        </Header>
        <Main>
            <InfoFrame>
                <InfoTitle>이름</InfoTitle>
                <InfoText>현지훈</InfoText>
            </InfoFrame>
        </Main>
        </FrameBox>
    </Frame>
  </Container>
);

export default MyInfo;
