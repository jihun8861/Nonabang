import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LottieAnimation from "../components/LottieAnimation";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Main from "../components/Main";

const Container = styled.div`
  width: 500px;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid lightgray;
`;

const Frame = styled.div`
  width: 80%;
  height: 90%;
`;

const Header = styled.div`
  width: 100%;
  height: 40%;
`;

const Middle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SocialBtn = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: #03c75a;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const LoginArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const UnderBar = styled.div`
  width: 40%;
  height: 0px;
  border: 1px solid lightgray;
`;

const SignInContent = () => {
  const handleNaverLogin = () => {
    const clientId = "KJA8AJCFs2vHONBom5XH";
    const redirectUri = encodeURIComponent("http://localhost:8080/login/oauth2/code/naver");
    const state = "randomState"; // CSRF 공격을 방지하기 위한 상태 값
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = naverLoginUrl;
  };

  const handleGoogleLogin = () => {
    const clientId = "730599288403-73ughe6q8k2us136drgfn2nf10ke5hq2.apps.googleusercontent.com";
    const redirectUri = encodeURIComponent("http://localhost:8080/login/oauth2/code/google");
    const state = "randomState"; // CSRF 공격을 방지하기 위한 상태 값
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=profile%20email&state=${state}`;

    window.location.href = googleLoginUrl;
  };

  return (
    <Container>
      <Frame>
        <Header>
          <LottieAnimation />
        </Header>
        <Middle>
          <h2>로그인하고 자취방 노나방~?</h2>
        </Middle>
        <Footer>
          <LoginArea>
            <SocialBtn onClick={handleNaverLogin} style={{color:"white"}}>
              <h3 style={{color:"white"}}>N</h3>
              네이버로 간편 로그인하기
            </SocialBtn>
            <SocialBtn
              style={{ backgroundColor: "white" }}
              onClick={handleGoogleLogin}
            >
              <FcGoogle style={{ fontSize: "30px", marginRight: "10px" }} />
              구글계정으로 간편 로그인하기
            </SocialBtn>
          </LoginArea>
          <LoginArea>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                color: "lightgray",
              }}
            >
              <UnderBar />
              또는
              <UnderBar />
            </span>
            <SocialBtn style={{ backgroundColor: "white" }}>
              노나방 로그인하기
            </SocialBtn>
            <span
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <h4>아직 회원이 아니신가요?</h4>
              <Link to="/SignUp">
                <h4 style={{ color: "lightsalmon", cursor: "pointer" }}>
                  회원 가입
                </h4>
              </Link>
            </span>
          </LoginArea>
        </Footer>
      </Frame>
    </Container>
  );
};

const SignIn = () => {
  return <Main children={<SignInContent />} />;
};

export default SignIn;
